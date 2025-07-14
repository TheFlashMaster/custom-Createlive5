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
        block: 'create:belt_connector',
        nbtPath: 'Length',
        threshold: 20,
        triggerName: 'minecraft:long_conveyors_trigger'
    }
};

// Helper function to safely get nested NBT values
function getNBTValue(blockEntity, path) {
    if (!blockEntity) {
        return 0;
    }
    
    try {
        // Get the NBT data
        let {nbt} = blockEntity;
        if (!nbt) {
            nbt = blockEntity.getUpdateTag();
        }
        
        if (!nbt) {
            return 0;
        }
        
        // For Create mod blocks, try specific NBT paths
        if (path === 'Network.Capacity') {
            // Try different possible NBT structures for stress capacity
            if (nbt.contains('Network')) {
                let network = nbt.getCompound('Network');
                if (network.contains('Capacity')) {
                    return network.getFloat('Capacity');
                }
            }
            // Alternative path
            if (nbt.contains('capacity')) {
                return nbt.getFloat('capacity');
            }
            if (nbt.contains('Capacity')) {
                return nbt.getFloat('Capacity');
            }
        }
        
        if (path === 'Network.Utilization') {
            // Calculate utilization as Stress/Capacity
            let stress = 0;
            let capacity = 0;
            
            if (nbt.contains('Network')) {
                let network = nbt.getCompound('Network');
                if (network.contains('Stress')) {
                    stress = network.getFloat('Stress');
                }
                if (network.contains('Capacity')) {
                    capacity = network.getFloat('Capacity');
                }
            }
            
            // Try alternative NBT paths for stress and capacity
            if (stress === 0 && nbt.contains('stress')) {
                stress = nbt.getFloat('stress');
            }
            if (stress === 0 && nbt.contains('Stress')) {
                stress = nbt.getFloat('Stress');
            }
            if (capacity === 0 && nbt.contains('capacity')) {
                capacity = nbt.getFloat('capacity');
            }
            if (capacity === 0 && nbt.contains('Capacity')) {
                capacity = nbt.getFloat('Capacity');
            }
            
            // Calculate utilization percentage (0.0 to 1.0)
            if (capacity > 0) {
                return Math.abs(stress) / capacity;
            }
            return 0;
        }
        
        if (path === 'Speed') {
            // Try different possible NBT structures for speed
            if (nbt.contains('Speed')) {
                return Math.abs(nbt.getFloat('Speed'));
            }
            if (nbt.contains('speed')) {
                return Math.abs(nbt.getFloat('speed'));
            }
            // For Create speedometers, the speed might be stored differently
            if (nbt.contains('VisualSpeed')) {
                return Math.abs(nbt.getFloat('VisualSpeed'));
            }
        }
        
        if (path === 'Length') {
            // Try different possible NBT structures for belt length
            if (nbt.contains('Length')) {
                return nbt.getInt('Length');
            }
            if (nbt.contains('length')) {
                return nbt.getInt('length');
            }
            if (nbt.contains('BeltLength')) {
                return nbt.getInt('BeltLength');
            }
        }
        
    } catch (error) {
        // Error will be reported in checkAndTriggerAdvancement
    }
    
    return 0;
}

// Helper function to check trigger conditions and fire advancement
function checkAndTriggerAdvancement(event, config) {
    if (!event.block.entity) {
        event.player.tell(`[CustomTrigger] No block entity found for ${config.block}`);
        return;
    }

    try {
        // Debug: Show what NBT data is available
        let {nbt} = event.block.entity;
        if (!nbt) {
            nbt = event.block.entity.getUpdateTag();
        }
        
        if (nbt) {
            event.player.tell(`[CustomTrigger] NBT keys available: ${Object.keys(nbt).join(', ')}`);
            
            // Show some common NBT values that might be relevant
            if (config.block === 'create:stressometer' && nbt.contains('Network')) {
                let network = nbt.getCompound('Network');
                event.player.tell(`[CustomTrigger] Network NBT keys: ${Object.keys(network).join(', ')}`);
            }
        }
        
        let nbtValue = getNBTValue(event.block.entity, config.nbtPath);
        
        event.player.tell(`[CustomTrigger] Checking ${config.block}: ${config.nbtPath} = ${nbtValue} (threshold: ${config.threshold})`);
        
        if (nbtValue >= config.threshold) {
            event.player.tell(`[CustomTrigger] Triggering ${config.triggerName} for player ${event.player.username}`);
            CustomTriggers.of(config.triggerName).trigger(event.player);
        }
    } catch (error) {
        event.player.tell(`[CustomTrigger] Error processing trigger for ${config.block}: ${error}`);
    }
}

// Register block click handlers for stressometer (stress capacity checks)
BlockEvents.rightClicked('create:stressometer', event => {
    // Check for all stress-related advancements
    checkAndTriggerAdvancement(event, TRIGGER_CONFIGS.stress_basic);
    checkAndTriggerAdvancement(event, TRIGGER_CONFIGS.high_stress);
    checkAndTriggerAdvancement(event, TRIGGER_CONFIGS.stress_master);
});

// Register block click handler for speedometer (RPM checks)
BlockEvents.rightClicked('create:speedometer', event => {
    checkAndTriggerAdvancement(event, TRIGGER_CONFIGS.high_rpm);
});

// Register block click handler for belt connectors (length checks)
BlockEvents.rightClicked('create:belt_connector', event => {
    checkAndTriggerAdvancement(event, TRIGGER_CONFIGS.long_conveyors);
});

})(); // End of IIFE