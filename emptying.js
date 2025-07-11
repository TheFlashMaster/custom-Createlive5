//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:powder_snow_bucket",
      },
    ],
    results: [
      {
        item: "minecraft:bucket",
        count: 1,
      },
      {
        amount: 1000,
        fluid: "kubejs:powder_snow",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:oak_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_oak_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:spruce_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_spruce_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:birch_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_birch_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:jungle_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_jungle_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:acacia_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_acacia_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:dark_oak_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_dark_oak_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:mangrove_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_mangrove_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "minecraft:cherry_log",
      },
    ],
    results: [
      {
        item: "minecraft:stripped_cherry_log",
        count: 1,
      },
      {
        amount: 25,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "create_dd:rubber_log",
      },
    ],
    results: [
      {
        item: "create_dd:stripped_rubber_log",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_dd:sap",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "kubejs:electrolyzed_mass",
      },
    ],
    results: [
      {
        amount: 100,
        fluid: "kubejs:powder_snow",
      },
    ],
  });
  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: "kubejs:shimmer_nugget",
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "kubejs:better_shimmer_fluid",
      },
    ],
  });
});
