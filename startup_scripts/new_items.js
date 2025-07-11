StartupEvents.registry("item", (event) => {
  event.create("netherite_scrap_scrap").displayName("Netherite Scrap Scrap");
  event.create("pulverized_tofu").displayName("Pulverized Tofu");
  event.create("hydrated_tofu_mass").displayName("Hydrated Tofu Mass");
  event.create("electrolyzed_mass").displayName("Electrolyzed Mass");
  event.create("netherrack_plate").displayName("Netherrack Plate");
  event.create("smithing_template").displayName("Smithing Template");
  event.create("stargaze_wire").displayName("Stargaze Wire");
  event.create("stargaze_mesh").displayName("Stargaze Mesh");
  event.create("blaze_wire").displayName("Blaze Wire");
  event.create("blaze_mesh").displayName("Blaze Mesh");
  event.create("undestructable_scale").displayName("Undestructable Scale");
  event.create("shiny_scale").displayName("Shiny Scale");
  event.create("stargaze_plate").displayName("Stargaze Plate");
  event.create("blaze_plate").displayName("Blaze Plate");
  event.create("blaze_plate_rod").displayName("Blaze Plate Rod");
  event.create("quartz_dust").displayName("Quartz Dust");
  event.create("crushed_soybean").displayName("Crushed Soybean");
  event.create("shimmer_nugget").displayName("Shimmer Nugget");
  event.create("stone_template").displayName("Stone Template");
  event.create("blackstone_template").displayName("Blackstone Template");
  event.create("chorus_template").displayName("Chorus Template");
  event.create("lost_template").displayName("Lost Template");
  event.create("mossy_template").displayName("Mossy Template");
  event.create("nether_template").displayName("Nether Template");
  event.create("ocean_template").displayName("Ocean Template");
  event.create("prismarine_template").displayName("Prismarine Template");
  event.create("sandstone_template").displayName("Sandstone Template");
  event.create("glass_shard").displayName("Glass Shard");
  event
    .create("redstone_drink")
    .displayName("Redstone Drink")
    .food((food) => {
      food.hunger(1).saturation(1.2).alwaysEdible().effect("speed", 300, 0, 1);
    })
    .useAnimation("drink");
  event
    .create("bloodmoonshine_cocktail")
    .displayName("Bloodmoonshine Cocktail")
    .food((food) => {
      food
        .hunger(1)
        .saturation(5)
        .alwaysEdible()
        .effect("glowing", 600, 0, 1)
        .effect("speed", 600, 3, 1)
        .effect("nausea", 200, 1, 1);
    })
    .useAnimation("drink");
  event
    .create("ravioli_can")
    .displayName("Ravioli Can")
    .food((food) => {
      food
        .hunger(10)
        .saturation(1.2)
        .eaten((ctx) => {
          ctx.player.give("kubejs:labeled_can");
        });
    })
    .useAnimation("drink");

  event
    .create("rocket_pocket")
    .displayName("Rocket Pocket")
    .rarity("epic")
    .tooltip("What doesn't kill you makes you stronger! Or will it?")
    .food((food) => {
      food
        .hunger(20)
        .saturation(1.2)
        .effect("saturation", 20, 100, 1)
        .effect("regeneration", 20, 100, 1)
        .alwaysEdible()
        .eaten((ctx) => {
          let explosion = ctx.player.block.createExplosion();
          explosion.strength(6);
          explosion.explosionMode("block");
          explosion.explode();
        });
    })
    .useAnimation("eat");
  event.create("empty_can").displayName("Empty Can");
  event.create("labeled_can").displayName("Labeled Can");
  event.create("ravioli").displayName("Ravioli");
  event.create("dough_cutout").displayName("Dough Cutout");
  event
    .create("burgerpommes")
    .displayName("Burgerpommes")
    .food((food) => {
      food.hunger(14).saturation(1.2);
    });
  event.create("burger_bun").displayName("Burger Bun");

  event
    .create("disabled_creator_helmet")
    .displayName("Disabled Creator Helmet")
    .fireResistant();
  event
    .create("disabled_creator_chestplate")
    .displayName("Disabled Creator Chestplate")
    .fireResistant();
  event
    .create("disabled_creator_leggings")
    .displayName("Disabled Creator Leggings")
    .fireResistant();
  event
    .create("disabled_creator_boots")
    .displayName("Disabled Creator Boots")
    .fireResistant();
  event
    .create("disabled_creator_sword")
    .displayName("Disabled Creator Sword")
    .fireResistant();
  event
    .create("disabled_creator_shovel")
    .displayName("Disabled Creator Shovel")
    .fireResistant();
  event
    .create("disabled_creator_pickaxe")
    .displayName("Disabled Creator Pickaxe")
    .fireResistant();
  event
    .create("disabled_creator_axe")
    .displayName("Disabled Creator Axe")
    .fireResistant();
  event
    .create("disabled_creator_hoe")
    .displayName("Disabled Creator Hoe")
    .fireResistant();
  event
    .create("creator_helmet", "helmet")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_helmet")
    .tier("creator")
    .displayName("Creator Helmet")
    .fireResistant();
  event
    .create("creator_chestplate", "chestplate")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_chestplate")
    .tier("creator")
    .displayName("Creator Chestplate")
    .fireResistant();
  event
    .create("creator_leggings", "leggings")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_leggings")
    .tier("creator")
    .displayName("Creator Leggings")
    .fireResistant();
  event
    .create("creator_boots", "boots")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_boots")
    .tier("creator")
    .displayName("Creator Boots")
    .fireResistant();
  event
    .create("creator_sword", "sword")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_sword")
    .tier("creator")
    .displayName("Creator Sword")
    .attackDamageBaseline(30.0)
    .fireResistant();
  event
    .create("creator_shovel", "shovel")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_shovel")
    .tier("creator")
    .displayName("Creator Shovel")
    .fireResistant();

  event
    .create("creator_pickaxe", "pickaxe")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_pickaxe")
    .tier("creator")
    .displayName("Creator Pickaxe")
    .fireResistant();

  event
    .create("creator_axe", "axe")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_axe")
    .tier("creator")
    .displayName("Creator Axe")
    .fireResistant();

  event
    .create("creator_hoe", "hoe")
    .rarity("epic")
    .tooltip("Feels like playing in Creative Mode")
    .texture("kubejs:item/creator_hoe")
    .tier("creator")
    .displayName("Creator Hoe")
    .fireResistant();
});

ItemEvents.armorTierRegistry((event) => {
  event.add("creator", (tier) => {
    tier.durabilityMultiplier = 1500; // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [9, 18, 24, 9]; // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:item.armor.equip_netherite";
    tier.toughness = 9.0;
    tier.knockbackResistance = 0.3;
  });
});

ItemEvents.toolTierRegistry((event) => {
  event.add("creator", (tier) => {
    tier.uses = 10000;
    tier.speed = 100.0;
    tier.attackDamageBonus = 3.0;
    tier.level = 6;
    tier.enchantmentValue = 14;
  });
});
