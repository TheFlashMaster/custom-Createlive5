//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.pressing(
    "kubejs:diamond_plate",
    "minecraft:diamond_block"
  );
  event.recipes.create.pressing(
    "kubejs:netherrack_plate",
    "minecraft:netherrack"
  );
  event.recipes.create.pressing(
    "create_dd:stargaze_singularity_sheet",
    "create_dd:stargaze_singularity"
  );
  event.recipes.create.pressing(
    "create_dd:blaze_gold_sheet",
    "create_dd:blaze_gold"
  );
  event.recipes.create.pressing("kubejs:stone_template", "minecraft:stone");
  event.recipes.create.pressing(
    "kubejs:blackstone_template",
    "minecraft:blackstone"
  );
  event.recipes.create.pressing(
    "kubejs:nether_template",
    "minecraft:nether_bricks"
  );
  event.recipes.create.pressing(
    "kubejs:ocean_template",
    "#forge:dead_coral_block"
  );
  event.recipes.create.pressing(
    "kubejs:prismarine_template",
    "minecraft:prismarine_bricks"
  );
  event.recipes.create.pressing(
    "kubejs:sandstone_template",
    "minecraft:smooth_sandstone"
  );
  event.recipes.create.pressing(
    "create_sa:vault_component",
    "create_connected:item_silo"
  );
});
