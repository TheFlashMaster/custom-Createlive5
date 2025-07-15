//! Custom Advancement Trigger for Create Live 5
(() => {
    // Configuration constants for different advancement triggers
    const TRIGGER_CONFIGS = {
        stress_basic: {
            block: 'create:stressometer',
            nbtPath: 'Network.Capacity',
            condition: (value) => Math.abs(value) >= 100000,
            triggerName: 'minecraft:stress_basic_trigger'
        },
        high_stress: {
            block: 'create:stressometer',
            nbtPath: 'Network.Capacity',
            condition: (value) => Math.abs(value) >= 1000000,
            triggerName: 'minecraft:high_stress_trigger'
        },
        stress_master: {
            block: 'create:stressometer',
            nbtPaths: ['Network.Stress', 'Network.Capacity'],
            condition: (stress, capacity) => capacity > 0 && (stress / capacity) >= 0.99,
            triggerName: 'minecraft:stress_master_trigger'
        },
        high_rpm: {
            block: 'create:speedometer',
            nbtPath: 'Speed',
            condition: (value) => Math.abs(value) >= 256,
            triggerName: 'minecraft:high_rpm_trigger'
        },
        long_conveyors: {
            block: 'create:belt',
            nbtPath: 'Length',
            condition: (value) => value >= 20,
            triggerName: 'minecraft:long_conveyors_trigger'
        },
        steam_giant: {
            block: 'create:fluid_tank',
            nbtPaths: ['Size', 'Height', 'Boiler.ActiveHeat', 'Boiler.Supply'],
            condition: (size, height, activeHeat, supply) => {
                // Check if the boiler is active and has the right size
                return size >= 3 && height >= 8 && activeHeat >= 18 && supply >= 180;
            },
            triggerName: 'minecraft:steam_giant_trigger'
        }
    };


    // Helper function to safely get nested NBT values
    // Helper function to safely get nested NBT values
    const getNBTValue = function (blockEntity, path, player) {
        if (!blockEntity) {
            return 0;
        }

        try {
            // Get the NBT data
            let { nbt } = blockEntity;
            if (!nbt) {
                nbt = blockEntity.getUpdateTag();
            }

            if (!nbt) {
                return 0;
            }

            let value = nbt;
            player.tell(`[CustomTrigger] NBT data for ${blockEntity.id}: ${value}`);
            // Traverse the NBT structure based on the path
            let pathParts = path.split('.');
            pathParts.pop(); // Remove the last element
            for (const part of pathParts) {
                if (value.contains(part)) {
                    value = value.getCompound(part);
                    player.tell(`[CustomTrigger] Navigated to ${part}: ${value}`);
                } else {
                    return 0; // Path not found
                }
            }
            value = value.getFloat(path.split('.')[path.split('.').length - 1]);
            player.tell(`[CustomTrigger] Final value for ${path}: ${value}`);
            return value;
        } catch (error) {
            // Error will be reported in checkAndTriggerAdvancement
            player.tell(`[CustomTrigger] Error getting NBT value for ${blockEntity.id} at path ${path}: ${error}`);
        }

        return 0;
    }
    // Helper function to check trigger conditions and fire advancement
    const checkAndTriggerAdvancement = function (event, config) {
        let targetEntity = event.block.entity;
        let { nbt } = targetEntity;
            if (!nbt) {
                nbt = targetEntity.getUpdateTag();
            }
        event.player.tell(`[CustomTrigger] Checking block: ${config.block} with NBT: ${(nbt)}`);
        // Special case: if block has Controller NBT, use controller block instead
        if (targetEntity && nbt && nbt.contains('Controller')) {
            event.player.tell(`[CustomTrigger] Found Controller NBT for ${config.block}, checking controller block...`);
            try {
                let controllerNBT = nbt.getCompound('Controller');
                if (controllerNBT.contains('X') && controllerNBT.contains('Y') && controllerNBT.contains('Z')) {
                    let controllerPos = {
                        x: controllerNBT.getInt('X'),
                        y: controllerNBT.getInt('Y'),
                        z: controllerNBT.getInt('Z')
                    };

                    let controllerBlock = event.level.getBlock(controllerPos.x, controllerPos.y, controllerPos.z);
                    if (controllerBlock && controllerBlock.entity) {
                        targetEntity = controllerBlock.entity;
                        event.player.tell(`[CustomTrigger] Using controller block at ${controllerPos.x}, ${controllerPos.y}, ${controllerPos.z}`);
                    } else {
                        event.player.tell(`[CustomTrigger] Controller block not found or has no entity`);
                    }
                }
            } catch (error) {
                event.player.tell(`[CustomTrigger] Error accessing controller: ${error}`);
            }
        } else {
            event.player.tell(`[CustomTrigger] No Controller NBT found for ${config.block}, using block entity directly`);
        }

        if (!targetEntity) {
            event.player.tell(`[CustomTrigger] No block entity found for ${config.block}`);
            return;
        }

        try {
            // Debug: Show what NBT data is available
            let { nbt } = targetEntity;
            if (!nbt) {
                nbt = targetEntity.getUpdateTag();
            }

            // Handle both single nbtPath and multiple nbtPaths
            let nbtValues;
            if (config.nbtPaths) {
                // Multiple NBT paths
                nbtValues = config.nbtPaths.map(path => getNBTValue(targetEntity, path, event.player));
                event.player.tell(`[CustomTrigger] Checking ${config.block}: ${config.nbtPaths.join(', ')} = ${nbtValues.join(', ')}`);

                if (config.condition.apply(null, nbtValues)) {
                    event.player.tell(`[CustomTrigger] Triggering ${config.triggerName} for player ${event.player.username}`);
                    CustomTriggers.of(config.triggerName).trigger(event.player);
                }
            } else if (config.nbtPath) {
                // Single NBT path (backward compatibility)
                let nbtValue = getNBTValue(targetEntity, config.nbtPath, event.player);
                event.player.tell(`[CustomTrigger] Checking ${config.block}: ${config.nbtPath} = ${nbtValue}`);

                if (config.condition(nbtValue)) {
                    event.player.tell(`[CustomTrigger] Triggering ${config.triggerName} for player ${event.player.username}`);
                    CustomTriggers.of(config.triggerName).trigger(event.player);
                }
            }
        } catch (error) {
            event.player.tell(`[CustomTrigger] Error processing trigger for ${config.block}: ${error}`);
        }
    }

    BlockEvents.rightClicked(event => {
        // This is a catch-all for any block right-clicks that don't have specific handlers
        event.player.tell(`[CustomTrigger] Right-clicked block: ${event.block.id}`);
        for (const config of Object.values(TRIGGER_CONFIGS)) {
            if (event.block.id === config.block) {
                checkAndTriggerAdvancement(event, config);
            }
        }
    }
    )
})(); // End of IIFE