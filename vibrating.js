//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "vintageimprovements:vibrating",
    ingredients: [
      {
        item: "minecraft:moss_block",
      },
    ],
    results: [
      {
        item: "minecraft:moss_carpet",
      },
      {
        chance: 0.1,
        item: "minecraft:pink_petals",
      },
      {
        chance: 0.1,
        item: "minecraft:spore_blossom",
      },
    ],
    processingTime: 300,
  });
  event.custom({
    type: "vintageimprovements:vibrating",
    ingredients: [
      {
        item: "minecraft:mycelium",
      },
    ],
    results: [
      {
        chance: 0.1,
        item: "minecraft:brown_mushroom",
      },
      {
        chance: 0.1,
        item: "minecraft:red_mushroom",
      },
    ],
    processingTime: 300,
  });
  event.custom({
    type: "vintageimprovements:vibrating",
    ingredients: [
      {
        item: "farmersdelight:organic_compost",
      },
    ],
    results: [
      {
        item: "minecraft:dirt",
      },
      {
        chance: 0.5,
        item: "minecraft:dirt",
      },
    ],
    processingTime: 300,
  });
});
