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
        },
        giant_vault: {
            block: 'create:item_vault',
            nbtPaths: ['Size', 'Length'],
            condition: (size, length) => {
                // Check if the vault is large enough
                return size >= 3 && length >= 9;
            },
            triggerName: 'minecraft:giant_vault_trigger'
        },
        giant_tank: {
            block: 'create:fluid_tank',
            nbtPaths: ['Size', 'Height'],
            condition: (size, height) => {
                // Check if the tank is large enough
                return size >= 3 && height >= 32;
            },
            triggerName: 'minecraft:giant_tank_trigger'
        },
        printedKnowledge: {
            block: 'create:depot',
            nbtPath: 'OutputBuffer.Items',
            condition: (items) => {
                // Check if any item in the output buffer is an enchanted book
                if (!items || items.size() === 0) {
                    return false;
                }
                // Iterate through items to find enchanted books
                for (let i = 0; i < items.size(); i++) {
                    let item = items.getCompound(i);
                    if (item.contains('id')) {
                        let itemId = item.getString('id');
                        console.log(`[CustomTrigger] Checking item: ${itemId}`);
                        // Check if it's an enchanted book
                        if (itemId === 'minecraft:enchanted_book') {
                            return true;
                        }
                    }
                }
                return false;


            },
            triggerName: 'minecraft:printed_knowledge_trigger',
        },
        mechanicalSpawner: {
            block: 'create_mechanical_spawner:mechanical_spawner',
            nbtPath: 'TankContent.FluidName',
            condition: (fluidName) => {
                // Check if the fluid is water
                return fluidName != 'minecraft:empty';
            },
            triggerName: 'minecraft:mechanical_spawner_trigger'
        },
        chunkLoader: {
            block: 'create_power_loader:andesite_chunk_loader',
            nbtPath: 'Speed',
            condition: (speed) => {
                // Check if the chunk loader is active
                return Math.abs(speed) >= 60;
            },
            triggerName: 'minecraft:chunk_loader_trigger'
        },
    };


    // Helper function to safely get nested NBT values
    const getNBTValue = function (blockEntity, path, player) {
        if (!blockEntity) {
            player.tell(`[CustomTrigger] No blockEntity provided`);
            return 0;
        }

        try {
            // Get the NBT data
            let { nbt } = blockEntity;
            if (!nbt) {
                nbt = blockEntity.getUpdateTag();
            }

            if (!nbt) {
                player.tell(`[CustomTrigger] No NBT data available for ${blockEntity.id}`);
                return 0;
            }

            let value = nbt;
            player.tell(`[CustomTrigger] Starting NBT traversal for path: ${path}`);
            player.tell(`[CustomTrigger] Root NBT keys: ${Object.keys(nbt).join(', ')}`);

            // Traverse the NBT structure based on the path
            let pathParts = path.split('.');
            let finalKey = pathParts.pop(); // Remove and store the last element

            // Navigate through the path
            for (let i = 0; i < pathParts.length; i++) {
                let part = pathParts[i];
                player.tell(`[CustomTrigger] Looking for part: ${part} in current NBT level`);

                if (value.contains(part)) {
                    value = value.getCompound(part);
                    player.tell(`[CustomTrigger] Successfully navigated to ${part}`);
                    player.tell(`[CustomTrigger] Keys at ${part}: ${Object.keys(value).join(', ')}`);
                } else {
                    player.tell(`[CustomTrigger] Path part '${part}' not found. Available keys: ${Object.keys(value).join(', ')}`);
                    return 0; // Path not found
                }
            }

            // Now try to get the final value
            player.tell(`[CustomTrigger] Looking for final key: ${finalKey}`);

            if (!value.contains(finalKey)) {
                player.tell(`[CustomTrigger] Final key '${finalKey}' not found. Available keys: ${Object.keys(value).join(', ')}`);
                return 0;
            }

            // Get the NBT tag type to determine how to read it
            let tag = value.get(finalKey);
            player.tell(`[CustomTrigger] Found tag for ${finalKey}: ${tag} (type: ${tag.getClass().getSimpleName()})`);

            let finalValue;

            // Check the actual NBT tag type and handle accordingly
            let tagType = tag.getId();
            player.tell(`[CustomTrigger] NBT tag ID: ${tagType}`);

            switch (tagType) {
                case 1: // ByteTag
                    finalValue = value.getByte(finalKey);
                    player.tell(`[CustomTrigger] Got byte value: ${finalValue}`);
                    break;
                case 2: // ShortTag
                    finalValue = value.getShort(finalKey);
                    player.tell(`[CustomTrigger] Got short value: ${finalValue}`);
                    break;
                case 3: // IntTag
                    finalValue = value.getInt(finalKey);
                    player.tell(`[CustomTrigger] Got int value: ${finalValue}`);
                    break;
                case 4: // LongTag
                    finalValue = value.getLong(finalKey);
                    player.tell(`[CustomTrigger] Got long value: ${finalValue}`);
                    break;
                case 5: // FloatTag
                    finalValue = value.getFloat(finalKey);
                    player.tell(`[CustomTrigger] Got float value: ${finalValue}`);
                    break;
                case 6: // DoubleTag
                    finalValue = value.getDouble(finalKey);
                    player.tell(`[CustomTrigger] Got double value: ${finalValue}`);
                    break;
                case 8: // StringTag
                    let stringValue = value.getString(finalKey);
                    finalValue = parseFloat(stringValue);
                    if (isNaN(finalValue)) {
                        finalValue = stringValue; // Keep as string if not a number
                    }
                    player.tell(`[CustomTrigger] Got string value: ${stringValue} -> ${finalValue}`);
                    break;
                case 9: // ListTag
                    let listValue = value.getList(finalKey, 10); // Try compound list first
                    if (listValue.isEmpty()) {
                        // Try other list types
                        for (let type = 0; type <= 12; type++) {
                            listValue = value.getList(finalKey, type);
                            if (!listValue.isEmpty()) {
                                break;
                            }
                        }
                    }
                    finalValue = listValue;
                    player.tell(`[CustomTrigger] Got list value with ${finalValue} items`);
                    break;
                case 10: // CompoundTag
                    let compound = value.getCompound(finalKey);
                    finalValue = Object.keys(compound); // Return number of keys
                    player.tell(`[CustomTrigger] Got compound with ${finalValue} keys`);
                    break;
                default:
                    player.tell(`[CustomTrigger] Unknown NBT tag type: ${tagType}, trying generic approach`);
                    // Fall back to string representation
                    finalValue = tag.toString();
                    break;
            }

            player.tell(`[CustomTrigger] Final value for ${path}: ${finalValue} (type: ${typeof finalValue})`);
            return finalValue;

        } catch (error) {
            player.tell(`[CustomTrigger] Error getting NBT value for ${blockEntity.id} at path ${path}: ${error}`);
            player.tell(`[CustomTrigger] Error stack: ${error.stack}`);
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