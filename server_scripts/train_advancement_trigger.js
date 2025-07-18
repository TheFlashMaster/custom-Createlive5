//! Train Movement Tracker for Create Live 5
(() => {
    // Configuration for train distance achievements
    const TRAIN_DISTANCE_CONFIGS = {
        short_journey: {
            distance: 100,
            triggerName: 'minecraft:long_train_ride_trigger'
        },
        long_journey: {
            distance: 1000,
            triggerName: 'minecraft:very_long_train_ride_trigger'
        },
    };

    // Cooldown configuration (in ticks - 20 ticks = 1 second)
    const TRAIN_EXIT_COOLDOWN = 40; // 3 seconds cooldown

    // Store player train data
    const playerTrainData = new Map();

    // Helper function to get distance between two points
    const getDistance = function (x1, y1, z1, x2, y2, z2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
    };

    // Helper function to check if player is riding a train
    const isPlayerOnTrain = function (player) {
        try {
            // Method 1: Check nearby entities for Create trains
            let nearbyEntities = player.level.getEntitiesWithin(AABB.of(
                player.x - 15, player.y - 5, player.z - 15,  // Increased search area
                player.x + 15, player.y + 5, player.z + 15
            ));

            let closestTrainDistance = 999;

            for (let entity of nearbyEntities) {
                if (entity !== player) {
                    let entityType = entity.type.toString();

                    // Calculate distance using our helper function
                    let distance = getDistance(player.x, player.y, player.z, entity.x, entity.y, entity.z);

                    // Check if this is a Create train/contraption
                    if (entityType === 'create:carriage_contraption') {

                        if (distance < closestTrainDistance) {
                            closestTrainDistance = distance;
                        }
                        return true; // Player is riding a Create train
                    }
                }
            }
            return false;

        } catch (error) {
            player.tell(`§c[Train Tracker] §7Error checking train: ${error.message}`);
            return false;
        }
    };
    // Helper function to get or initialize player train data
    const getPlayerTrainData = function (player) {
        // Load data from persistent memory
        let isRiding = player.persistentData.getBoolean('train_is_riding') || false;
        let startX = player.persistentData.getDouble('train_start_x') || player.x;
        let startY = player.persistentData.getDouble('train_start_y') || player.y;
        let startZ = player.persistentData.getDouble('train_start_z') || player.z;
        let exitCooldown = player.persistentData.getInt('train_exit_cooldown') || 0;

        return {
            isRiding: isRiding,
            startX: startX,
            startY: startY,
            startZ: startZ,
            exitCooldown: exitCooldown,
        };
    };

    const savePlayerData = function (player, data) {
        // Save all data to persistent memory
        player.persistentData.putBoolean('train_is_riding', data.isRiding);
        player.persistentData.putDouble('train_start_x', data.startX);
        player.persistentData.putDouble('train_start_y', data.startY);
        player.persistentData.putDouble('train_start_z', data.startZ);
        player.persistentData.putInt('train_exit_cooldown', data.exitCooldown);
    }

    // Helper function to check and trigger distance achievements
    const checkDistanceAchievements = function (player, distance) {
        for (const [configName, config] of Object.entries(TRAIN_DISTANCE_CONFIGS)) {
            if (distance >= config.distance) {
                // Check if player already has this achievement
                let achievementKey = `train_achievement_${configName}`;
                try {
                    CustomTriggers.of(config.triggerName).trigger(player);
                } catch (error) {
                    player.tell(`§c[Train Tracker] §7Error triggering achievement: ${error.message}`);
                }
            }
        }
    }

    // Event handler for player tick (runs every tick for each player)
    PlayerEvents.tick(event => {
        let { player } = event;

        // Skip if player is not valid or is a fake player
        if (!player || !player.isPlayer()) {
            return;
        }

        let data = getPlayerTrainData(player);
        let isCurrentlyOnTrain = isPlayerOnTrain(player);

        if (isCurrentlyOnTrain && !data.isRiding) {
            // Player just started riding a train
            data.isRiding = true;
            data.startX = player.x;
            data.startY = player.y;
            data.startZ = player.z;
            data.exitCooldown = 0; // Reset cooldown when getting on train

            // Save immediately to prevent repeated messages
            savePlayerData(player, data);

            player.tell(`§a[Train Tracker] §7Started train journey at ${Math.round(player.x)}, ${Math.round(player.y)}, ${Math.round(player.z)}`);

        } else if (!isCurrentlyOnTrain && data.isRiding) {
            // Player is not on train but was riding - start or continue cooldown
            if (data.exitCooldown > 0) {
                // Continue cooldown
                data.exitCooldown--;
                savePlayerData(player, data);
            } else {
                // Start cooldown
                data.exitCooldown = TRAIN_EXIT_COOLDOWN;
                savePlayerData(player, data);
            }

            // Only stop riding if cooldown has expired
            if (data.exitCooldown <= 0) {
                data.isRiding = false;
                player.tell(`§c[Train Tracker] §7Stopped train journey at ${Math.round(player.x)}, ${Math.round(player.y)}, ${Math.round(player.z)}`);
                
                // Calculate total distance traveled
                let endX = player.x;
                let endY = player.y;
                let endZ = player.z;
                let distanceTraveled = getDistance(data.startX, data.startY, data.startZ, endX, endY, endZ);
                player.tell(`§a[Train Tracker] §7Total distance traveled this journey: §e${Math.round(distanceTraveled)} blocks`);
                checkDistanceAchievements(player, distanceTraveled);
                
                // Save data to persistent storage
                savePlayerData(player, data);
            }

        } else if (isCurrentlyOnTrain && data.isRiding) {
            // Player is still riding a train, reset cooldown and update position
            data.exitCooldown = 0; // Reset cooldown since player is back on train
            savePlayerData(player, data);
            
            let endX = player.x;
            let endY = player.y;
            let endZ = player.z;
            let distanceTraveled = getDistance(data.startX, data.startY, data.startZ, endX, endY, endZ);
            // Check if distance traveled exceeds any achievement thresholds
            checkDistanceAchievements(player, distanceTraveled);
        } else {
            // Player is not riding and not on train - just save data
            savePlayerData(player, data);
        }
    });
    
    // Event handler for player leaving the server
    PlayerEvents.loggedOut(event => {
        let { player } = event;
        let playerId = player.uuid.toString();

        if (playerTrainData.has(playerId)) {
            let data = playerTrainData.get(playerId);
            savePlayerData(player, data);
            playerTrainData.delete(playerId);
        }
    });

    console.log('[Train Tracker] Train movement tracking system initialized');
})();