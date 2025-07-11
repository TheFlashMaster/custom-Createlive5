//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create.filling("create_dd:shimmer_bucket", [
    Fluid.of("kubejs:better_shimmer_fluid", 1000),
    "minecraft:bucket",
  ]);
  event.recipes.create.filling("create_dd:aethersite", [
    Fluid.of("kubejs:better_shimmer_fluid", 1),
    "minecraft:andesite",
  ]);
  event.recipes.create.filling("create_dd:frozen_nugget", [
    Fluid.of("kubejs:better_shimmer_fluid", 1),
    "create_dd:compound_base",
  ]);
  event.recipes.create.filling("minecraft:warden_spawn_egg", [
    Fluid.of("kubejs:spawn_fluid_warden", 250),
    "minecraft:egg",
  ]);

  event.recipes.create.filling(
    Item.of("kubejs:creator_helmet", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_helmet"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_chestplate", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_chestplate"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_leggings", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_leggings"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_boots", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_boots"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_sword", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_sword"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_shovel", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_shovel"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_pickaxe", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_pickaxe"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_axe", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_axe"]
  );
  event.recipes.create.filling(
    Item.of("kubejs:creator_hoe", "{Damage:0,RepairCost:1}").enchant(
      "minecraft:mending",
      1
    ),
    [Fluid.of("kubejs:boss_fluid", 1000), "kubejs:disabled_creator_hoe"]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_random_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_random", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_blaze_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_blaze", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_creeper_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_creeper", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_enderman_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_enderman", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_magma_cube_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_magma_cube", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_skeleton_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_skeleton", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_slime_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_slime", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_spider_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_spider", 1000),
      "minecraft:bucket",
    ]
  );
  event.recipes.create.filling(
    "create_mechanical_spawner:spawn_fluid_zombie_bucket",
    [
      Fluid.of("create_mechanical_spawner:spawn_fluid_zombie", 1000),
      "minecraft:bucket",
    ]
  );
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:dirt",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 10,
      },
    ],
    results: [
      {
        item: "minecraft:mycelium",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:blue_dye",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 10,
      },
    ],
    results: [
      {
        item: "minecraft:lapis_lazuli",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:cactus",
      },
      {
        fluid: "create_central_kitchen:dragon_breath",
        amount: 500,
      },
    ],
    results: [
      {
        item: "minecraft:chorus_flower",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:glass_bottle",
      },
      {
        fluid: "create_enchantment_industry:experience",
        amount: 15,
      },
    ],
    results: [
      {
        item: "minecraft:experience_bottle",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:glass_bottle",
      },
      {
        fluid: "kubejs:redstone_fluid",
        amount: 250,
      },
    ],
    results: [
      {
        item: "kubejs:redstone_drink",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:glass_bottle",
      },
      {
        fluid: "kubejs:bloodmoonshine_fluid",
        amount: 250,
      },
    ],
    results: [
      {
        item: "kubejs:bloodmoonshine_cocktail",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "create_sa:large_fueling_tank",
      },
      {
        fluid: "kubejs:better_shimmer_fluid",
        amount: 1000,
      },
    ],
    results: [
      {
        item: "create_sa:creative_filling_tank",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "create:experience_nugget",
      },
      {
        fluid: "kubejs:better_shimmer_fluid",
        amount: 1000,
      },
    ],
    results: [
      {
        item: "kubejs:shimmer_nugget",
      },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:bucket",
      },
      {
        fluid: "kubejs:powder_snow",
        amount: 1000,
      },
    ],
    results: [
      {
        item: "minecraft:powder_snow_bucket",
      },
    ],
  });
});
