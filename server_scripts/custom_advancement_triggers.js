//! Custom Advancement Trigger for Create Live 5
(() => {
    // Configuration constants for different advancement triggers
    const TRIGGER_CONFIGS = {
        stress_basic: {
            block: 'create:stressometer',
            nbtPath: 'Network.Capacity',
            threshold: 100000,
            triggerName: 'minecraft:stress_basic_trigger'
        },
        high_stress: {
            block: 'create:stressometer',
            nbtPath: 'Network.Capacity',
            threshold: 1000000,
            triggerName: 'minecraft:high_stress_trigger'
        },
        stress_master: {
            block: 'create:stressometer',
            nbtPath: 'Network.Utilization',
            threshold: 0.99,
            triggerName: 'minecraft:stress_master_trigger'
        },
        high_rpm: {
            block: 'create:speedometer',
            nbtPath: 'Speed',
            threshold: 256,
            triggerName: 'minecraft:high_rpm_trigger'
        },
        long_conveyors: {
            block: 'create:belt',
            nbtPath: 'Length',
            threshold: 20,
            triggerName: 'minecraft:long_conveyors_trigger'
        }
    };

    // Helper function to safely get nested NBT values
    // Helper function to safely get nested NBT values
    const getNBTValue = function(blockEntity, path,player) {
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
            value = Math.abs(value);
            player.tell(`[CustomTrigger] Final value for ${path}: ${value}`);
            return value;
        } catch (error) {
            // Error will be reported in checkAndTriggerAdvancement
            player.tell(`[CustomTrigger] Error getting NBT value for ${blockEntity.id} at path ${path}: ${error}`);
        }

        return 0;
    }
    // Helper function to check trigger conditions and fire advancement
    const checkAndTriggerAdvancement = function(event, config) {
        if (!event.block.entity) {
            event.player.tell(`[CustomTrigger] No block entity found for ${config.block}`);
            return;
        }

        try {
            // Debug: Show what NBT data is available
            let { nbt } = event.block.entity;
            if (!nbt) {
                nbt = event.block.entity.getUpdateTag();
            }

            let nbtValue = getNBTValue(event.block.entity, config.nbtPath,event.player);

            event.player.tell(`[CustomTrigger] Checking ${config.block}: ${config.nbtPath} = ${nbtValue} (threshold: ${config.threshold})`);

            if (nbtValue >= config.threshold) {
                event.player.tell(`[CustomTrigger] Triggering ${config.triggerName} for player ${event.player.username}`);
                CustomTriggers.of(config.triggerName).trigger(event.player);
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