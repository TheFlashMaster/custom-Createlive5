//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create
    .cutting("minecraft:big_dripleaf", "minecraft:moss_block")
    .processingTime(500);
  event.recipes.create
    .cutting("minecraft:small_dripleaf", "minecraft:big_dripleaf")
    .processingTime(100);
  event.recipes.create
    .cutting("2x kubejs:stargaze_wire", "create_dd:stargaze_singularity_sheet")
    .processingTime(3000);
  event.recipes.create
    .cutting("2x kubejs:blaze_wire", "create_dd:blaze_gold_sheet")
    .processingTime(3000);
  event.recipes.create
    .cutting("2x kubejs:burger_bun", "minecraft:bread")
    .processingTime(100);
  event.recipes.create
    .cutting("2x kubejs:dough_cutout", "#forge:dough")
    .processingTime(200);
});
