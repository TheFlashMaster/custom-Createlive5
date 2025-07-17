//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:creeper")
    .killedByPlayer()
    .randomChance(0.05) // 5% chance
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:creeper")
    .killedByPlayer()
    .randomChance(0.0004)
    .addLoot(
      Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1)
    );

  event
    .addEntityLootModifier("minecraft:ghast")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:husk")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:warden")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:shulker")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:silverfish")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:skeleton")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:skeleton")
    .killedByPlayer()
    .randomChance(0.0004)
    .addLoot(
      Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1)
    );

  event
    .addEntityLootModifier("minecraft:witch")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:zombie")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:zombie")
    .killedByPlayer()
    .randomChance(0.12)
    .addLoot("minecraft:iron_ingot");

  event
    .addEntityLootModifier("minecraft:zombie")
    .killedByPlayer()
    .randomChance(0.0004)
    .addLoot(
      Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1)
    );

  event
    .addEntityLootModifier("minecraft:ghast")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:iron_golem")
    .removeLoot("minecraft:iron_ingot");

  event
    .addEntityLootModifier("minecraft:iron_golem")
    .addLoot("minecraft:poppy");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .removeLoot("minecraft:end_portal_frame");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(1)
    .addLoot("2x minecraft:elytra");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("travelersbackpack:dragon");

  event
    .addEntityLootModifier("minecraft:slime")
    .killedByPlayer()
    .randomChance(0.01)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:wither")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:spider")
    .killedByPlayer()
    .randomChance(0.05)
    .addLoot("create:experience_nugget");

  event
    .addEntityLootModifier("minecraft:warden")
    .addLoot("minecraft:echo_shard");

  event
    .addEntityLootModifier("minecraft:warden")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("minecraft:silence_armor_trim_smithing_template");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("minecraft:eye_armor_trim_smithing_template");

  event
    .addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChance(0.5)
    .addLoot("minecraft:ward_armor_trim_smithing_template");

  /*
  event
    .addBlockLootModifier("minecraft:sunflower")
    //.removeLoot("create_bic_bit:sunflower_seeds");
    .addLoot("create_bic_bit:sunflower_seeds")
    .removeLoot("minecraft:sunflower");

  event
    .addBlockLootModifier("create_bic_bit:sunflowerstem")
    .removeLoot("create_bic_bit:sunflower_seeds");
  */
  event
    .addBlockLootModifier("minecraft:oak_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:oak_sapling");

  event
    .addBlockLootModifier("minecraft:oak_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:oak_sapling");

  event
    .addBlockLootModifier("minecraft:spruce_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:spruce_sapling");

  event
    .addBlockLootModifier("minecraft:birch_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:birch_sapling");

  event
    .addBlockLootModifier("minecraft:jungle_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:jungle_sapling");

  event
    .addBlockLootModifier("minecraft:dark_oak_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:dark_oak_sapling");

  event
    .addBlockLootModifier("minecraft:acacia_leaves")
    .randomChance(0.05)
    .addLoot("minecraft:acacia_sapling");
  event
    .addBlockLootModifier("create_dd:rubber_leaves")
    .randomChance(0.05)
    .addLoot("create_dd:rubber_sapling");

  event
    .addBlockLootModifier("create_dd:aethersite")
    .removeLoot("create_dd:aethersite");
  event
    .addBlockLootModifier("create_dd:potassic_cobble")
    .removeLoot("create_dd:potassic_cobble");
  event.addBlockLootModifier("create_dd:gabbro").removeLoot("create_dd:gabbro");
  event
    .addBlockLootModifier("create_dd:crimsite_cobble")
    .removeLoot("create_dd:crimsite_cobble");
  event
    .addBlockLootModifier("minecraft:dripstone_block")
    .removeLoot("minecraft:dripstone_block");
  event
    .addBlockLootModifier("create_dd:ochrum_cobble")
    .removeLoot("create_dd:ochrum_cobble");
  event
    .addBlockLootModifier("create_dd:veridium_cobble")
    .removeLoot("create_dd:veridium_cobble");
  event
    .addBlockLootModifier("create_dd:asurine_cobble")
    .removeLoot("create_dd:asurine_cobble");
  event.addBlockLootModifier("create:scorchia").removeLoot("create:scorchia");
  event.addBlockLootModifier("create:scoria").removeLoot("create:scoria");
  event
    .addBlockLootModifier("minecraft:calcite")
    .removeLoot("minecraft:calcite");
  event.addBlockLootModifier("create:limestone").removeLoot("create:limestone");
  event
    .addBlockLootModifier("create_bic_bit:crystallised_oil")
    .removeLoot("create_bic_bit:crystallised_oil");
});
