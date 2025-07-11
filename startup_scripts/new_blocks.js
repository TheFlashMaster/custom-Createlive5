StartupEvents.registry("block", (event) => {
  event
    .create("stone_casing") // Create a new block
    .displayName("Stone Casing") // Set a custom name
    .soundType("wood")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .tagBlock("mineable/pickaxe"); // or a pickaxe

  event
    .create("glass_powder") // Create a new block
    .displayName("Glass Powder") // Set a custom name
    .soundType("glass")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(false); // Requires a tool or it won't drop (see tags below)

  event
    .create("diamond_plate") // Create a new block
    .displayName("Diamond Plate") // Set a custom name
    .soundType("stone")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .fullBlock(false)
    .box(1, 0, 1, 15, 2, 15);

  event
    .create("witherproof_obsidian") // Create a new block
    .displayName("Witherproof Obsidian") // Set a custom name
    .soundType("stone")
    .hardness(10.0) // Set hardness (affects mining time)
    .resistance(1200.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock("minecraft:wither_immune");
  event
    .create("witherproof_obsidian_glass")
    .displayName("Witherproof Obsidian Glass")
    .defaultTranslucent()
    .soundType("glass")
    .hardness(10.0)
    .resistance(1200.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:wither_immune");
  event
    .create("highway")
    .displayName("Highway")
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .speedFactor(1.4);
});
