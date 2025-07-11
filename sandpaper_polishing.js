ServerEvents.recipes((event) => {
  event.recipes.create.sandpaper_polishing(
    Item.of(
      "minecraft:suspicious_gravel",
      '{BlockEntityTag:{item:{Count:1b,id:"kubejs:lost_template"}}}'
    ).withChance(0.025),
    "minecraft:gravel"
  );
});
