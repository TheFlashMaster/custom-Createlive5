//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.shapeless("8x create_dd:coal_piece", [
  "minecraft:charcoal",
  ]);
  //event.shapeless("2x create_bic_bit:sunflower_seeds", ["minecraft:sunflower"]);
  event.shapeless("minecraft:tube_coral_block", [
    "4x minecraft:tube_coral_fan",
  ]);
  event.shapeless("minecraft:brain_coral_block", [
    "4x minecraft:brain_coral_fan",
  ]);
  event.shapeless("minecraft:bubble_coral_block", [
    "4x minecraft:bubble_coral_fan",
  ]);
  event.shapeless("minecraft:fire_coral_block", [
    "4x minecraft:fire_coral_fan",
  ]);
  event.shapeless("minecraft:horn_coral_block", [
    "4x minecraft:horn_coral_fan",
  ]);
  event.shapeless("1x create:crimsite", [
    "minecraft:redstone",
    "minecraft:gravel",
  ]);
  event.shapeless("1x minecraft:ender_eye", [
    "create_dd:mithril_ingot",
    "create_dd:blaze_gold",
  ]);
  event.shapeless("create_things_and_misc:powdered_obsidian_block", [
    "4x create:powdered_obsidian",
  ]);
  event.shapeless("4x kubejs:glass_powder", [
    "2x minecraft:calcite",
    "4x minecraft:quartz",
  ]);
  event.shapeless("4x minecraft:granite", [
    "4x minecraft:sand",
    "1x minecraft:quartz",
  ]);
  event.shapeless("9x create_dd:diamond_shard", ["minecraft:diamond"]);
  event.shapeless("1x minecraft:diamond", "9x create_dd:diamond_shard");
	event.shaped("1x toms_storage:ts.wireless_terminal", ["SMS", "YGF", "SES"], {
    S: "create_connected:item_silo",
    M: "create_dd:integrated_mechanism",
    Y: "minecraft:spyglass",
    G: "minecraft:glowstone",
    F: "#forge:glass",
    E: "minecraft:ender_pearl",
  });
  event.shaped("1x travelersbackpack:white_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:white_sheet",
  });
  event.shaped("1x travelersbackpack:black_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:black_sheet",
  });
  event.shaped("1x travelersbackpack:blue_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:blue_sheet",
  });
  event.shaped("1x travelersbackpack:brown_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:brown_sheet",
  });
  event.shaped("1x travelersbackpack:cyan_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:cyan_sheet",
  });
  event.shaped("1x travelersbackpack:gray_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:gray_sheet",
  });
  event.shaped("1x travelersbackpack:green_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:green_sheet",
  });
  event.shaped("1x travelersbackpack:light_blue_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:light_blue_sheet",
  });
  event.shaped("1x travelersbackpack:light_gray_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:light_gray_sheet",
  });
  event.shaped("1x travelersbackpack:lime_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:lime_sheet",
  });
  event.shaped("1x travelersbackpack:magenta_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:magenta_sheet",
  });
  event.shaped("1x travelersbackpack:orange_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:orange_sheet",
  });
  event.shaped("1x travelersbackpack:pink_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:pink_sheet",
  });
  event.shaped("1x travelersbackpack:purple_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:purple_sheet",
  });
  event.shaped("1x travelersbackpack:red_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:red_sheet",
  });
  event.shaped("1x travelersbackpack:yellow_sleeping_bag", ["XXX", "XXX"], {
    X: "handcrafted:yellow_sheet",
  });
  event.shaped("4x kubejs:blaze_plate_rod", ["X", "X"], {
    X: "kubejs:blaze_plate",
  });
  event.shaped("1x create:millstone", ["SCS", "CPC", "SCS"], {
    S: "minecraft:stone_slab",
    C: "minecraft:cobblestone",
    P: "kubejs:stone_casing",
  });
  event.shapeless("create:item_vault", "create_connected:item_silo");
  event.shapeless("create_connected:item_silo", "create:item_vault");
  event.shaped("1x create:hand_crank", ["   ", "OOO", "  S"], {
    O: "#minecraft:planks",
    S: "minecraft:stone",
  });
  event.shaped("1x create_dd:cog_crank", [" O ", "OHO", " O "], {
    O: "#minecraft:planks",
    H: "create:hand_crank",
  });
  event.shaped("4x minecraft:andesite", [" C ", "CDC", " C "], {
    C: "minecraft:cobblestone",
    D: "minecraft:diorite",
  });
  event.shaped("4x minecraft:granite", [" S ", "SQS", " S "], {
    S: "minecraft:sand",
    Q: "minecraft:quartz",
  });
  event.shaped("3x minecraft:calcite", ["QC", "CQ"], {
    Q: "minecraft:quartz",
    C: "minecraft:cobblestone",
  });
  event.shaped("4x minecraft:diorite", ["GC", "CG"], {
    G: "minecraft:gravel",
    C: "minecraft:calcite",
  });
  event.shaped("4x create:limestone", [" C ", "CPC", " C "], {
    C: "minecraft:calcite",
    P: "create_dd:coal_piece",
  });
  event.shaped("2x create:scoria", ["CD", "DC"], {
    C: "create_dd:coal_piece",
    D: "minecraft:dirt",
  });
  event.shaped("2x create:asurine", ["CS", "SC"], {
    C: "minecraft:calcite",
    S: "create_bic_bit:crushed_sunflower_seeds",
  });
  event.shaped("1x minecraft:ender_chest", ["OOO", "OEO", "OOO"], {
    O: "minecraft:obsidian",
    E: "minecraft:ender_pearl",
  });
  event.shaped("1x minecraft:soul_sand", [" O ", "OEO", " O "], {
    O: "create:experience_nugget",
    E: "minecraft:sand",
  });
  event.shaped(
    "1x create_things_and_misc:netherite_portable_whistle",
    ["   ", " PP", "CN "],
    {
      C: "minecraft:copper_ingot",
      N: "minecraft:netherite_ingot",
      P: "createdeco:netherite_sheet",
    }
  );
  event.shaped("1x create:propeller", [" I ", "IAI", " I "], {
    I: "minecraft:iron_ingot",
    A: "create:andesite_alloy",
  });
  event.shaped(
    "1x create_new_age:basic_solar_heating_plate",
    ["GGG", "IPI", "IPI"],
    {
      G: "minecraft:glass",
      P: "create_new_age:heat_pipe",
      I: "minecraft:gold_ingot",
    }
  );
  event.shaped(
    "1x create_new_age:advanced_solar_heating_plate",
    ["GGG", "IPI", "IPI"],
    {
      G: "minecraft:glass",
      P: "create_new_age:heat_pipe",
      I: "create_new_age:layered_magnet",
    }
  );
  event.shaped("1x minecraft:end_crystal", ["GTG", "TNT", "GEG"], {
    G: "minecraft:tinted_glass",
    N: "minecraft:nether_star",
    E: "minecraft:ender_eye",
    T: "minecraft:ghast_tear",
  });
  event.shaped("1x amazingtrading:create_shredder", ["AAA", "ASA", "AAA"], {
    A: "create:andesite_alloy",
    S: "create:brass_casing",
  });
  event.shaped("1x create_new_age:heat_pump", [" M ", "PCP"], {
    P: "create_new_age:heat_pipe",
    C: "minecraft:copper_block",
    M: "create:mechanical_pump",
  });
  event.shaped("1x constructionwand:infinity_wand", ["  S", " R ", "R  "], {
    R: "vintageimprovements:netherite_rod",
    S: "create_dd:stargaze_singularity",
  });
  event.shaped("1x create_new_age:redstone_magnet", ["RRR", "RMR", "RRR"], {
    M: "create_new_age:magnetite_block",
    R: "minecraft:redstone",
  });
  event.shaped("1x create_new_age:layered_magnet", ["GGG", "GMG", "GGG"], {
    M: "create_new_age:magnetite_block",
    G: "create_new_age:overcharged_gold",
  });
  event.shaped("4x create_new_age:fluxuated_magnetite", ["DMD", "MDM", "DMD"], {
    M: "create_new_age:magnetite_block",
    D: "create_new_age:overcharged_diamond",
  });
  event.shaped("1x create_new_age:netherite_magnet", ["SDS", "DMD", "SDS"], {
    M: "create_new_age:magnetite_block",
    D: "create_new_age:overcharged_diamond",
    S: "minecraft:netherite_scrap",
  });
});
