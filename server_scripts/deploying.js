//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.deploying("minecraft:crimson_nylium", [
    "minecraft:netherrack",
    "minecraft:crimson_fungus",
  ]);
  event.recipes.create.deploying("minecraft:warped_nylium", [
    "minecraft:netherrack",
    "minecraft:warped_fungus",
  ]);
  event.recipes.create.deploying("minecraft:sculk_sensor", [
    "minecraft:sculk",
    "minecraft:kelp",
  ]);
  event.recipes.create.deploying(
    "minecraft:netherite_upgrade_smithing_template",
    ["kubejs:diamond_plate", "kubejs:smithing_template"]
  );
  event.recipes.create.deploying(
    Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1),
    ["minecraft:book", "minecraft:echo_shard"]
  );
  event.recipes.create.deploying("kubejs:stargaze_plate", [
    "kubejs:stargaze_mesh",
    "kubejs:undestructable_scale",
  ]);
  event.recipes.create.deploying("kubejs:blaze_plate", [
    "kubejs:blaze_mesh",
    "kubejs:shiny_scale",
  ]);
});
