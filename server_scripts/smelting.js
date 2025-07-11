//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.smelting("1x minecraft:quartz", "minecraft:sand");
  event.smelting("1x minecraft:glass", "kubejs:glass_powder");
  event.smelting("1x minecraft:quartz", "kubejs:quartz_dust");
});
