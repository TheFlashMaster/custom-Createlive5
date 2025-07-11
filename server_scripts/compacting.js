//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create
    .compacting("2x minecraft:pointed_dripstone", [
      "4x minecraft:clay_ball",
      "minecraft:granite",
    ])
    .heated();
  event.recipes.create
    .compacting("minecraft:cobbled_deepslate", "4x minecraft:cobblestone")
    .heated();
  event.recipes.create.compacting(
    "minecraft:netherrack",
    "4x create:cinder_flour"
  );
  event.recipes.create.compacting(
    "minecraft:obsidian",
    "2x create_things_and_misc:powdered_obsidian_block"
  );
  event.recipes.create
    .compacting("4x create:ochrum", [
      "minecraft:dripstone_block",
      "3x minecraft:smooth_red_sandstone",
    ])
    .heated();
  event.recipes.create
    .compacting("createbigcannons:cast_iron_ingot", [
      "createdeco:industrial_iron_ingot",
    ])
    .heated();
  event.recipes.create.compacting(
    [Fluid.water(250), "minecraft:moss_carpet"],
    "minecraft:moss_block"
  );
  event.recipes.create.compacting(
    "farmersdelight:organic_compost",
    "4x #minecraft:flowers"
  );

  event.recipes.create
    .compacting(Fluid.of("create_bic_bit:frying_oil", 250), [
      "#forge:oil_seeds",
      Fluid.water(250),
    ])
    .heated();

  event.recipes.create.compacting(Fluid.water(50), "#minecraft:leaves");
  event.custom({
    type: "create:compacting",
    heatRequirement: "superheated",
    ingredients: [
      {
        count: 8,
        item: "create_dd:steel_sheet",
      },
      {
        amount: 1000,
        fluid: "create_dd:chromatic_waste",
      },
    ],
    results: [
      {
        item: "minecraft:netherite_scrap",
      },
    ],
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      {
        amount: 250,
        fluid: "kubejs:powder_snow",
      },
    ],
    results: [
      {
        item: "minecraft:ice",
      },
    ],
  });
});
