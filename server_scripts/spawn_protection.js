/*
const DATA_KEY = 'spawn_protected_blocks';
let originalSpawnBlocks = new Set();
const SPAWN_RADIUS = 8; // Radius around spawn to protect
// Helper to serialize block position
function posKey(pos) {
    return `${pos.x},${pos.y},${pos.z}`;
}

// Helper to parse posKey back to object (if needed)
function parsePosKey(key) {
    const [x, y, z] = key.split(',').map(Number);
    return { x: x, y: y, z: z };
}
console.log(`[SpawnProtect] Initialized with DATA_KEY: ${DATA_KEY}`);
// Load saved blocks from persistent data on server start
function loadProtectedBlocks(event) {
    console.log(`[SpawnProtect] Loading original spawn blocks from persistent data: ${DATA_KEY}`);

    let arr = event.server.persistentData[DATA_KEY];
    if (arr) {
        // Always convert Java Iterator to JS array if .iterator exists
        if (arr && typeof arr.iterator === 'function') {
            let tmp = [];
            let it = arr.iterator();
            while (it.hasNext()) {
                let next = it.next();
                tmp.push(next.toString()); // Always force to JS string
            }
            arr = tmp;
        } else if (Array.isArray(arr)) {
            // Always force to JS string
            arr = arr.map(e => e.toString());
        }
        console.log(`[SpawnProtect] Loaded ${arr.length} protected blocks from persistent data.`);
        originalSpawnBlocks = new Set(arr);
        console.log(`[SpawnProtect] Loaded ${originalSpawnBlocks.size} protected blocks into memory.`);
    } else {
        console.log('[SpawnProtect] No saved spawn protection data found.');
    }
}

// Command to scan and save original blocks
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    console.log('[SpawnProtect] Registering commands for spawn protection');

    event.register(
        Commands.literal('protectspawn')
            .requires(s => s.hasPermission(2)) // Only allow ops
            .executes(ctx => {
                let { level } = ctx.source.player;

                let arr = [];
                for (let x = 0; x <= 50; x++) {
                    for (let y = 60; y < 100; y++) {
                        for (let z = 0; z <= 50; z++) {
                            let block = level.getBlock(x, y, z);
                            if (block.id !== 'minecraft:air') {
                                arr.push(posKey({ x: x, y: y, z: z }));
                            }
                        }
                    }
                }
                originalSpawnBlocks = new Set(arr);
                // Save to persistent data
                ctx.source.server.persistentData[DATA_KEY] = Array.from(originalSpawnBlocks);
                ctx.source.sendSuccess(`Saved ${arr.length} spawn blocks for protection.`, true);
                return 1;
            })
    );
    event.register(
        Commands.literal('showblocks')
            .requires(s => s.hasPermission(2)) // Only allow ops
            .executes(ctx => {
                if (originalSpawnBlocks.size === 0) {
                    ctx.source.sendSuccess('No spawn protection blocks are currently set.', true);
                } else {
                    ctx.source.sendSuccess(`Currently protected spawn blocks: ${Array.from(originalSpawnBlocks).join(', ')}`, true);
                    // Show protected blocks visually
                    let level = ctx.source.server.getLevel('overworld');
                    originalSpawnBlocks.forEach(key => {
                        let pos = parsePosKey(key);
                        ctx.source.player.tell(`Protected block at ${key}: ${level.getBlock(pos)}`);
                        level.getBlock(pos).set('minecraft:glowstone'); // Clear the block
                    });
                }
                return 1;
            })
    );
});

// Cancel block break only if it's an original block
BlockEvents.broken(event => {
    if (!originalSpawnBlocks || originalSpawnBlocks.size === 0) {
        event.player.tell("No spawn protection blocks are currently set.");
        loadProtectedBlocks(event);
    }
    event.player.tell(`originalSpawnBlocks[0]: ${originalSpawnBlocks.size > 0 ? Array.from(originalSpawnBlocks)[0] : 'none'} type: ${typeof Array.from(originalSpawnBlocks)[0]}`);
    if (originalSpawnBlocks.has(posKey(event.block.pos))) {
        event.cancel();
    }
});

// Cancel block place only if it's replacing an original block
BlockEvents.placed(event => {
    if (originalSpawnBlocks.has(posKey(event.block.pos))) {
        event.cancel();
    }
});
*/