//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.splashing(
    ["minecraft:mossy_cobblestone", Item.of("moss_block").withChance(0.01)],
    "minecraft:cobblestone"
  );
  event.recipes.create.splashing(
    ["minecraft:clay_ball", Item.of("sniffer_egg").withChance(0.05)],
    "minecraft:suspicious_sand"
  );
  event.recipes.create.splashing(
    Item.of("kubejs:hydrated_tofu_mass").withChance(0.25),
    "kubejs:pulverized_tofu"
  );
  event.recipes.create.splashing(
    "kubejs:mossy_template",
    "kubejs:stone_template"
  );
});
