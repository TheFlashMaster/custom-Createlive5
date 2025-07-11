//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.crushing(
    ["minecraft:snow_block", Item.of("minecraft:snowball").withChance(0.25)],
    "minecraft:blue_ice"
  );
  event.recipes.create.crushing(
    ["3x minecraft:blue_dye", Item.of("minecraft:blue_dye").withChance(0.5)],
    "create_bic_bit:crushed_sunflower_seeds"
  );
  event.recipes.create.crushing(
    Item.of("minecraft:bone_meal").withChance(0.25),
    "minecraft:calcite"
  );
  event.recipes.create.crushing(
    Item.of("minecraft:redstone").withChance(0.4),
    "minecraft:red_sand"
  );
  event.recipes.create.crushing(
    ["minecraft:redstone", Item.of("minecraft:redstone").withChance(0.5)],
    "minecraft:red_nether_bricks"
  );
  event.recipes.create.crushing(
    [
      Item.of("create:crushed_raw_tin").withChance(0.1),
      Item.of("create_dd:tin_nugget").withChance(0.2),
    ],
    "create_dd:potassic"
  );
  event.recipes.create.crushing(
    "2x create:powdered_obsidian",
    "minecraft:obsidian"
  );
  event.recipes.create.crushing(
    Item.of("kubejs:pulverized_tofu").withChance(0.5),
    "vegandelight:tofu"
  );
  event.recipes.create.crushing(
    "16x minecraft:leather",
    "#travelersbackpack:custom_travelers_backpack"
  );
  event.recipes.create.crushing(
    Item.of("kubejs:glass_powder").withChance(0.5),
    "4x kubejs:glass_shard"
  );
  event.recipes.create.crushing(
    Item.of("kubejs:quartz_dust").withChance(0.5),
    "minecraft:diorite"
  );
  event.recipes.create.crushing(
    [
      "create_bic_bit:sunflower_seeds",
      Item.of("create_bic_bit:sunflower_seeds").withChance(0.6),
    ],
    "minecraft:sunflower"
  );
});
