//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create_dd:superheating",
    ingredients: [
      {
        item: "create:crushed_raw_copper",
      },
    ],
    results: [
      {
        count: 2,
        item: "minecraft:copper_ingot",
      },
      {
        chance: 0.5,
        item: "minecraft:copper_ingot",
      },
    ],
  });
});
