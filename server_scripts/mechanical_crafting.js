//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor, The_FlashMaster(crafting_terminal)

ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    "minecraft:coal",
    ["XXX", "XXX", " XX"],
    {
      X: "create_dd:coal_piece",
    }
  );
  event.recipes.create.mechanical_crafting(
    "toms_storage:ts.crafting_terminal",
    ["XXXXX", "XAHDX", "XBGEX", "XCIFX", "XXXXX"],
    {
      A: "create:precision_mechanism",
      B: "create_dd:integrated_mechanism",
      C: "create_dd:calculation_mechanism",
      D: "create_dd:inductive_mechanism",
      E: "create_dd:infernal_mechanism",
      F: "create_dd:sealed_mechanism",
      G: "toms_storage:ts.storage_terminal",
      H: "create:mechanical_arm",
      I: "minecraft:brown_shulker_box",
      X: "create:mechanical_crafter",
    }
  );
  event.recipes.create.mechanical_crafting(
    "toms_storage:ts.storage_terminal",
    ["XXXXX", "XAGDX", "XBGEX", "XCGFX", "XXXXX"],
    {
      A: "create:precision_mechanism",
      B: "create_dd:integrated_mechanism",
      C: "create_dd:calculation_mechanism",
      D: "create_dd:inductive_mechanism",
      E: "create_dd:infernal_mechanism",
      F: "create_dd:sealed_mechanism",
      G: "create:cogwheel",
      X: "create:andesite_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "create_sa:copper_jetpack_chestplate",
    ["A   A", "AAEAA", "FLHLF", " AAA "],
    {
      A: "minecraft:copper_ingot",
      E: "minecraft:elytra",
      F: "create:fluid_tank",
      L: "vegandelight:leather_substitute",
      H: "create_sa:hydraulic_engine",
    }
  );
  event.recipes.create.mechanical_crafting(
    "create_sa:andesite_jetpack_chestplate",
    ["A   A", "AAEAA", "FLHLF", " AAA "],
    {
      A: "create:andesite_alloy",
      E: "minecraft:elytra",
      F: "create:encased_fan",
      L: "create_dd:rubber",
      H: "create_sa:heat_engine",
    }
  );
  event.recipes.create.mechanical_crafting(
    "create_sa:brass_jetpack_chestplate",
    ["A   A", "TB CT", "FLHLF", " AAA "],
    {
      A: "create:brass_ingot",
      B: "create_sa:copper_jetpack_chestplate",
      C: "create_sa:andesite_jetpack_chestplate",
      F: "create:encased_fan",
      L: "create_dd:rubber",
      H: "create_sa:steam_engine",
      T: "create:fluid_tank",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:stargaze_mesh",
    ["ASASA", "SASAS", "ASASA", "SASAS", "ASASA"],
    {
      A: "kubejs:stargaze_wire",
      S: "minecraft:string",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:blaze_mesh",
    ["ASASA", "SASAS", "ASASA", "SASAS", "ASASA"],
    {
      A: "kubejs:blaze_wire",
      S: "minecraft:string",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_helmet",
    [
      "BSB",
      "SCS",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate",
      C: "create_dd:stargaze_singularity_casing",
    }
  );


  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_chestplate",
    [
      "B B",
      "SCS",
      "BSB",
      "SSS",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_leggings",
    [
      "SCS",
      "BSB",
      "S S",
      "B B",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_boots",
    [
      "S S",
      "BCB",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_sword",
    [
      " S ",
      "SCS",
      " B ",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate_rod",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_shovel",
    [
      "SCS",
      " B ",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate_rod",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_pickaxe",
    [
      "SCS",
      " B ",
      " B ",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate_rod",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_axe",
    [
      "SC",
      "SB",
      " B",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate_rod",
      C: "create_dd:stargaze_singularity_casing",
    }
  );
  event.recipes.create.mechanical_crafting(
    "kubejs:disabled_creator_hoe",
    [
      "SC",
      " B",
      " B",
    ],
    {
      S: "kubejs:stargaze_plate",
      B: "kubejs:blaze_plate_rod",
      C: "create_dd:stargaze_singularity_casing",
    }
  );

  event.recipes.create.mechanical_crafting(
    "kubejs:shimmer_nugget",
    ["ABC", "DEF", "GHI"],
    {
      A: "create_dd:vanilla_milkshake_bucket",
      B: "create_dd:hot_chocolate_bucket",
      C: "create_dd:chocolate_milkshake_bucket",
      D: "create_dd:glowberry_milkshake_bucket",
      E: "create_dd:experience_mass",
      F: "create_dd:sap_bucket",
      G: "create_dd:strawberry_milkshake_bucket",
      H: "create_dd:chromatic_waste_bucket",
      I: "create_dd:caramel_milkshake_bucket",
    }
  );
});
