//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.milling("create:zinc_nugget", "create:asurine");
  event.recipes.create.milling(
    Item.of("suspicious_sand").withChance(0.25),
    "minecraft:smooth_sandstone"
  );
  event.recipes.create.milling(
    Item.of("minecraft:bone_meal").withChance(0.1),
    "minecraft:calcite"
  );
  event.recipes.create.milling(
    "2x minecraft:blue_dye",
    "create_bic_bit:crushed_sunflower_seeds"
  );
  event.recipes.create.milling(
    "kubejs:crushed_soybean",
    "vegandelight:soybean"
  );
  event.recipes.create.milling(
    "create:copper_nugget",
    "minecraft:decorated_pot"
  );
  event.recipes.create.milling("minecraft:sand", "minecraft:gravel");
  event.recipes.create.milling("minecraft:flint", "minecraft:tuff");
  event.recipes.create.milling(
    Item.of("minecraft:iron_nugget").withChance(0.3),
    "create:crimsite"
  );
  event.recipes.create.milling(
    Item.of("create:cinder_flour").withChance(0.25),
    "minecraft:netherrack"
  );
  event.recipes.create.milling(
    Item.of("minecraft:redstone").withChance(0.35),
    "minecraft:red_sand"
  );
  event.recipes.create.milling(
    Item.of("minecraft:redstone").withChance(0.75),
    "minecraft:red_nether_bricks"
  );
  event.recipes.create.milling(
    Item.of("create_bic_bit:sunflower_seeds").withChance(0.8),
    "minecraft:sunflower"
  );
  event.recipes.create.milling(
    Item.of("kubejs:glass_powder").withChance(0.25),
    "4x kubejs:glass_shard"
  );
});
