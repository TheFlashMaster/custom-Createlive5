//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create_enchantment_industry:disenchanting",
    ingredients: [
      {
        item: "minecraft:amethyst_shard",
      },
    ],
    results: [
      {
        item: "kubejs:glass_shard",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 3,
      },
    ],
  });
});
