//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.haunting(
    "minecraft:nether_wart",
    "minecraft:fermented_spider_eye"
  );
  event.recipes.create.haunting("minecraft:netherrack", "minecraft:calcite");
});
