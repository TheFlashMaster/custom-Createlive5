//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.item_application("kubejs:stone_casing", [
    "#forge:stripped_logs",
    "minecraft:stone",
  ]);
  event.recipes.create.item_application("minecraft:cactus", [
    "minecraft:moss_block",
    "minecraft:pointed_dripstone",
  ]);
  event.recipes.create.item_application("create:item_vault", [
    "create_dd:overburden_casing",
    "create_dd:industrial_iron_sheet",
  ]);
  event.recipes.create.item_application("create_connected:item_silo", [
    "create_dd:overburden_casing",
    "create_dd:industrial_iron_ingot",
  ]);
  event.recipes.create.item_application("create_new_age:magnetite_block", [
    "minecraft:deepslate_tiles",
    "create_dd:steel_sheet",
  ]);
});
