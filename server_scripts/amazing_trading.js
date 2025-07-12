ATEvents.mapping((event) => {

  event.setRP("kubejs:shimmer_nugget", 4096);
  event.setRP("create_dd:fallen_stargaze_singularity", 1200);
  event.setRP("create_dd:stargaze_singularity", 1500);

  //! Custom RP values for chunk loaders
  event.setRP("create_power_loader:empty_andesite_chunk_loader", 1600);
  event.setRP("create_power_loader:empty_brass_chunk_loader", 4000);
  event.setRP("create_power_loader:andesite_chunk_loader", 2500);
  event.setRP("create_power_loader:brass_chunk_loader", 5042);

  // remove mobloot (again!!!)
  event.setRP("minecraft:wooden_shovel", 0);
  event.setRP("minecraft:wooden_pickaxe", 0);
  event.setRP("minecraft:wooden_axe", 0);
  event.setRP("minecraft:wooden_hoe", 0);
  event.setRP("minecraft:wooden_sword", 0);
  event.setRP("minecraft:stone_shovel", 0);
  event.setRP("minecraft:stone_pickaxe", 0);
  event.setRP("minecraft:stone_axe", 0);
  event.setRP("minecraft:stone_hoe", 0);
  event.setRP("minecraft:stone_sword", 0);
  event.setRP("minecraft:iron_shovel", 0);
  event.setRP("minecraft:iron_pickaxe", 0);
  event.setRP("minecraft:iron_axe", 0);
  event.setRP("minecraft:iron_hoe", 0);
  event.setRP("minecraft:iron_sword", 0);
  event.setRP("minecraft:gold_shovel", 0);
  event.setRP("minecraft:gold_pickaxe", 0);
  event.setRP("minecraft:gold_axe", 0);
  event.setRP("minecraft:gold_hoe", 0);
  event.setRP("minecraft:gold_sword", 0);
  event.setRP("minecraft:diamond_shovel", 0);
  event.setRP("minecraft:diamond_pickaxe", 0);
  event.setRP("minecraft:diamond_axe", 0);
  event.setRP("minecraft:diamond_hoe", 0);
  event.setRP("minecraft:diamond_sword", 0);
  event.setRP("minecraft:netherite_shovel", 0);
  event.setRP("minecraft:netherite_pickaxe", 0);
  event.setRP("minecraft:netherite_axe", 0);
  event.setRP("minecraft:netherite_hoe", 0);
  event.setRP("minecraft:netherite_sword", 0);

  // remove templates
  event.setRP("minecraft:sentry_armor_trim_smithing_template", 0);
  event.setRP("minecraft:vex_armor_trim_smithing_template", 0);
  event.setRP("minecraft:wild_armor_trim_smithing_template", 0);
  event.setRP("minecraft:coast_armor_trim_smithing_template", 0);
  event.setRP("minecraft:dune_armor_trim_smithing_template", 0);
  event.setRP("minecraft:wayfinder_armor_trim_smithing_template", 0);
  event.setRP("minecraft:raiser_armor_trim_smithing_template", 0);
  event.setRP("minecraft:shaper_armor_trim_smithing_template", 0);
  event.setRP("minecraft:host_armor_trim_smithing_template", 0);
  event.setRP("minecraft:tide_armor_trim_smithing_template", 0);
  event.setRP("minecraft:snout_armor_trim_smithing_template", 0);
  event.setRP("minecraft:rib_armor_trim_smithing_template", 0);
  event.setRP("minecraft:spire_armor_trim_smithing_template", 0);

  // reduce flowers and saplings
  event.setRP("minecraft:poppy", 4);
  event.setRP("minecraft:dandelion", 4);
  event.setRP("minecraft:sunflower", 4);
  event.setRP("minecraft:blue_orchid", 4);
  event.setRP("minecraft:allium", 4);
  event.setRP("minecraft:azure_bluet", 4);
  event.setRP("minecraft:red_tulip", 4);
  event.setRP("minecraft:orange_tulip", 4);
  event.setRP("minecraft:white_tulip", 4);
  event.setRP("minecraft:pink_tulip", 4);
  event.setRP("minecraft:oxeye_daisy", 4);
  event.setRP("minecraft:cornflower", 4);
  event.setRP("minecraft:lily_of_the_valley", 4);
  event.setRP("minecraft:lilac", 4);
  event.setRP("minecraft:rose_bush", 4);
  event.setRP("minecraft:peony", 4);

  event.setRP("minecraft:oak_sapling", 4);
  event.setRP("minecraft:spruce_sapling", 4);
  event.setRP("minecraft:birch_sapling", 4);
  event.setRP("minecraft:jungle_sapling", 4);
  event.setRP("minecraft:acacia_sapling", 4);
  event.setRP("minecraft:dark_oak_sapling", 4);
  event.setRP("minecraft:cherry_sapling", 4);
  event.setRP("create_dd:rubber_sapling", 4);

  // Mob drops (zu teuer!)

  event.setRP("minecraft:bone", 8);
  event.setRP("minecraft:rotten_flesh", 8);
  event.setRP("minecraft:gunpowder", 8);
  event.setRP("minecraft:spider_eye", 32);
  // spawnable with spawner
  event.setRP("minecraft:blaze_rod", 64);
  event.setRP("minecraft:phantom_membrane", 64);

  // Villager trades
  event.setRP("minecraft:bell", 36);
  event.setRP("minecraft:rabbit_stew", 1);
  event.setRP("minecraft:cooked_porkchop", 1);
  event.setRP("minecraft:cooked_chicken", 1);
  event.setRP("minecraft:map", 7);
  event.setRP("minecraft:item_frame", 7);
  event.setRP("minecraft:redstone", 1);
  event.setRP("minecraft:lapis_lazuli", 1);
  event.setRP("minecraft:glowstone", 4);
  event.setRP("minecraft:ender_pearl", 5);
  event.setRP("minecraft:experience_bottle", 3);
  event.setRP("minecraft:bread", 1);
  event.setRP("minecraft:pumpkin_pie", 1);
  event.setRP("minecraft:apple", 1);
  event.setRP("minecraft:cookie", 3);
  event.setRP("minecraft:cake", 1);
  event.setRP("minecraft:golden_carrot", 3);
  event.setRP("minecraft:glistering_melon_slice", 4);
  event.setRP("minecraft:cooked_cod", 1);
  event.setRP("minecraft:cooked_salmon", 1);
  event.setRP("minecraft:campfire", 2);
  event.setRP("minecraft:arrow", 1);
  event.setRP("minecraft:flint", 1);
  event.setRP("minecraft:saddle", 1);
  event.setRP("minecraft:bookshelf", 9);
  event.setRP("minecraft:lantern", 1);
  event.setRP("minecraft:glass", 1);
  event.setRP("minecraft:clock", 5);
  event.setRP("minecraft:compass", 1);
  event.setRP("minecraft:name_tag", 20);
  event.setRP("minecraft:brick", 1);

  event.setRP("minecraft:glowstone_dust", 2);

  // cobblestone root (value 1)
  event.setRP("minecraft:blackstone", 2); // 1 steps
  event.setRP("minecraft:stone", 2);
  event.setRP("minecraft:gravel", 2);
  event.setRP("minecraft:iron_nugget", 2 / 0.12 + 2); // 2 steps
  event.setRP("minecraft:iron_ingot", 18 * 9); // 2 steps
  event.setRP("minecraft:bucket", 162 + 7); // 4 steps
  event.setRP("minecraft:sand", 2 + 2); // 2 steps
  event.setRP("minecraft:clay_ball", 4 / 0.25 + 3); // 3 steps
  event.setRP("minecraft:quartz", 4 + 3); // 3 steps
  event.setRP("minecraft:calcite", 5); // 3 steps
  event.setRP("minecraft:netherrack", 5 + 4); // 4 steps
  event.setRP("minecraft:diorite", 4); // 3 steps
  event.setRP("minecraft:suspicious_sand", 16 * 4 + 4); // 4 steps
  event.setRP("minecraft:sniffer_egg", 68 / 0.05 + 5); // 5 steps

  // brick root (value 1)
  event.setRP("create:copper_nugget", 4 + 1); // 1 steps
  event.setRP("minecraft:copper_ingot", 4 * 9 + 1); // 1 steps

  // log root (value 8)
  const log = 8;
  event.setRP("minecraft:dark_oak_log", log);
  event.setRP("minecraft:dark_oak_wood", log);
  event.setRP("minecraft:stripped_dark_oak_log", log);
  event.setRP("minecraft:stripped_dark_oak_wood", log);
  event.setRP("minecraft:oak_log", log);
  event.setRP("minecraft:oak_wood", log);
  event.setRP("minecraft:stripped_oak_log", log);
  event.setRP("minecraft:stripped_oak_wood", log);
  event.setRP("minecraft:acacia_log", log);
  event.setRP("minecraft:acacia_wood", log);
  event.setRP("minecraft:stripped_acacia_log", log);
  event.setRP("minecraft:stripped_acacia_wood", log);
  event.setRP("minecraft:birch_log", log);
  event.setRP("minecraft:birch_wood", log);
  event.setRP("minecraft:stripped_birch_log", log);
  event.setRP("minecraft:stripped_birch_wood", log);
  event.setRP("minecraft:jungle_log", log);
  event.setRP("minecraft:jungle_wood", log);
  event.setRP("minecraft:stripped_jungle_log", log);
  event.setRP("minecraft:stripped_jungle_wood", log);
  event.setRP("minecraft:spruce_log", log);
  event.setRP("minecraft:spruce_wood", log);
  event.setRP("minecraft:stripped_spruce_log", log);
  event.setRP("minecraft:stripped_spruce_wood", log);
  event.setRP("minecraft:mangrove_log", log);
  event.setRP("minecraft:mangrove_wood", log);
  event.setRP("minecraft:stripped_mangrove_log", log);
  event.setRP("minecraft:stripped_mangrove_wood", log);
  event.setRP("minecraft:cherry_log", log);
  event.setRP("minecraft:cherry_wood", log);
  event.setRP("minecraft:stripped_cherry_log", log);
  event.setRP("minecraft:stripped_cherry_wood", log);
  event.setRP("minecraft:crimson_stem", log);
  event.setRP("minecraft:crimson_hyphae", log);
  event.setRP("minecraft:stripped_crimson_stem", log);
  event.setRP("minecraft:stripped_crimson_hyphae", log);
  event.setRP("minecraft:warped_stem", log);
  event.setRP("minecraft:warped_hyphae", log);
  event.setRP("minecraft:stripped_warped_stem", log);
  event.setRP("minecraft:stripped_warped_hyphae", log);
  event.setRP("minecraft:rubber_log", log);
  event.setRP("minecraft:rubber_wood", log);
  event.setRP("minecraft:stripped_rubber_log", log);
  event.setRP("minecraft:stripped_rubber_wood", log);
  event.setRP("minecraft:smoked_log", log + 1); // 1 step
  event.setRP("minecraft:smoked_wood", log + 1);
  event.setRP("minecraft:stripped_smoked_log", log + 1);
  event.setRP("minecraft:stripped_smoked_wood", log + 1);
  event.setRP("minecraft:spirit_log", log + 1);
  event.setRP("minecraft:spirit_wood", log + 1);
  event.setRP("minecraft:stripped_spirit_log", log + 1);
  event.setRP("minecraft:stripped_spirit_wood", log + 1);
  const planks = log / 4;
  event.setRP("minecraft:oak_planks", planks);
  event.setRP("minecraft:spruce_planks", planks);
  event.setRP("minecraft:birch_planks", planks);
  event.setRP("minecraft:jungle_planks", planks);
  event.setRP("minecraft:acacia_planks", planks);
  event.setRP("minecraft:dark_oak_planks", planks);
  event.setRP("minecraft:mangrove_planks", planks);
  event.setRP("minecraft:cherry_planks", planks);
  event.setRP("minecraft:crimson_planks", planks);
  event.setRP("minecraft:warped_planks", planks);
  event.setRP("minecraft:rubber_planks", planks);
  event.setRP("minecraft:smoked_planks", (log + 1) / 4);
  event.setRP("minecraft:spirit_planks", (log + 1) / 4);

  event.setRP("minecraft:stick", 1);
  event.setRP("minecraft:emerald", 1);
  event.setRP("minecraft:coal", 8); // 8 tiny coal
  event.setRP("create_dd:diamond_shard", 90); // 0,8 % chance from coal_block
  event.setRP("minecraft:diamond", 810);
  event.setRP("minecraft:prismarine_shard", 2); // 1 step
  event.setRP("minecraft:prismarine_crystals", 10); // 1 step 10 % chance

  event.setRP("minecraft:gold_ingot", 20 * 9);
});
