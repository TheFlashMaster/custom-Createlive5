//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.recipes.create
    .mixing("minecraft:amethyst_cluster", [
      "minecraft:lapis_block",
      "minecraft:redstone_block",
      "minecraft:quartz",
    ])
    .superheated();
  event.recipes.create
    .mixing("minecraft:sponge", [
      "minecraft:stripped_bamboo_block",
      "minecraft:yellow_wool",
    ])
    .heated();

  event.recipes.create.mixing("minecraft:tube_coral_fan", [
    "minecraft:kelp",
    "2x minecraft:blue_dye",
  ]);
  event.recipes.create.mixing("minecraft:brain_coral_fan", [
    "minecraft:kelp",
    "2x minecraft:pink_dye",
  ]);
  event.recipes.create
    .mixing("2x kubejs:highway", [
      "8x minecraft:flint",
      "minecraft:gray_concrete_powder",
    ])
    .heated();
  event.recipes.create.mixing("minecraft:bubble_coral_fan", [
    "minecraft:kelp",
    "minecraft:purple_dye",
    "minecraft:magenta_dye",
  ]);
  event.recipes.create.mixing("minecraft:fire_coral_fan", [
    "minecraft:kelp",
    "2x minecraft:red_dye",
  ]);
  event.recipes.create.mixing("minecraft:horn_coral_fan", [
    "minecraft:kelp",
    "2x minecraft:yellow_dye",
  ]);

  event.recipes.create.mixing("minecraft:tuff", [
    "3x minecraft:gravel",
    "minecraft:stone",
  ]);
  event.recipes.create
    .mixing("16x minecraft:end_stone", [
      "16x minecraft:cobblestone",
      "minecraft:ender_pearl",
    ])
    .heated();
  event.recipes.create
    .mixing("minecraft:end_portal_frame", [
      "minecraft:end_stone",
      "create_dd:mithril_sheet",
      "create_new_age:overcharged_diamond",
    ])
    .superheated();

  event.recipes.create
    .mixing("kubejs:chorus_template", [
      "kubejs:stone_template",
      "4x minecraft:popped_chorus_fruit",
    ])
    .superheated();

  event.recipes.create
    .mixing(Fluid.of("create_bic_bit:frying_oil", 250), [
      "#forge:oil_seeds",
      Fluid.water(250),
    ])
    .heated();

  event.recipes.create.mixing(Fluid.of("create_bic_bit:mayonnaise", 250), [
    Fluid.of("vegandelight:soymilk", 200),
    Fluid.of("create_bic_bit:frying_oil", 50),
    "3x vegandelight:salt",
  ]);

  // Thanks Fynxes!
  event.recipes.create
    .mixing(Fluid.of("create_dd:condense_milk", 250), [
      Fluid.of("minecraft:water", 250),
      Fluid.of("vegandelight:soymilk", 500),
      "4x minecraft:sugar",
    ])
    .heated();

  event.recipes.create
    .mixing(Fluid.of("kubejs:redstone_fluid", 1000), ["10x minecraft:redstone"])
    .heated();

  event.recipes.create
    .mixing(Fluid.of("kubejs:bloodmoonshine_fluid", 1000), [
      "10x minecraft:redstone",
      "10x minecraft:glow_berries",
      "10x farmersdelight:rotten_tomato",
    ])
    .heated();

  event.recipes.create
    .mixing(Fluid.of("kubejs:spawn_fluid_sheep", 250), [
      "#minecraft:wool",
      Fluid.of("create_mechanical_spawner:spawn_fluid_random", 250),
    ])
    .heated();

  event.recipes.create
    .mixing("kubejs:witherproof_obsidian", [
      "16x create:powdered_obsidian",
      Fluid.of("createbigcannons:molten_nethersteel", 200),
    ])
    .superheated();

  event.recipes.create
    .mixing("kubejs:witherproof_obsidian_glass", [
      "16x create:powdered_obsidian",
      "16x minecraft:amethyst_shard",
      Fluid.of("createbigcannons:molten_nethersteel", 200),
    ])
    .superheated();

  event.recipes.create
    .mixing("kubejs:rocket_pocket", [
      "minecraft:firework_star",
      "16x minecraft:tnt",
      Fluid.of("create_dd:caramel", 250),
    ])
    .heated();

  //fixed salt recipe (thanks vegan delight for removing useful recipes)
  event.recipes.create.mixing("vegandelight:salt", Fluid.water(250)).heated();

  event.recipes.create
    .mixing("64x minecraft:sugar", Fluid.of("create:honey", 1000))
    .heated();

  event.recipes.create
    .mixing(
      Fluid.of("create_dd:hot_chocolate", 250),
      Fluid.of("create:chocolate", 250)
    )
    .superheated();

  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:porkchop",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_pig",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:beef",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_cow",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:chicken",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_chicken",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:ink_sac",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_squid",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:ghast_tear",
        count: 1,
      },
      {
        amount: 500,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 500,
        fluid: "kubejs:spawn_fluid_ghast",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "create_things_and_misc:vibration_mechanism",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_warden",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:coal_block",
        count: 1,
      },
      {
        item: "create_dd:diamond_shard",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_skeleton",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_wither_skeleton",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:white_banner",
        nbt: {
          BlockEntityTag: {
            Patterns: [
              { Color: 9, Pattern: "mr" },
              { Color: 8, Pattern: "bs" },
              { Color: 7, Pattern: "cs" },
              { Color: 8, Pattern: "bo" },
              { Color: 15, Pattern: "ms" },
              { Color: 8, Pattern: "hh" },
              { Color: 8, Pattern: "mc" },
              { Color: 15, Pattern: "bo" },
            ],
            id: "minecraft:banner",
          },
          HideFlags: 32,
          display: {
            Name: {
              color: "gold",
              translate: "block.minecraft.ominous_banner",
            },
          },
        }, // white Banner mit Villager-Raid typ nbt tag
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_allay",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:tropical_fish",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_dolphin",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:prismarine_shard",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_guardian",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:sweet_berries",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_fox",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:lead",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_wolf",
      },
    ],
  });
  event.recipes.create
    .mixing(Fluid.of("kubejs:spawn_fluid_cat", 250), [
      "#minecraft:fishes",
      Fluid.of("create_mechanical_spawner:spawn_fluid_random", 250),
    ])
    .heated();
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:mud",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_frog",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:phantom_membrane",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:spawn_fluid_phantom",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:ender_pearl",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "create_mechanical_spawner:spawn_fluid_enderman",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:blaze_rod",
        count: 1,
      },
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random",
        nbt: {},
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "create_mechanical_spawner:spawn_fluid_blaze",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:sugar",
        count: 4,
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "create_dd:caramel",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "superheated",
    ingredients: [
      {
        item: "create:experience_nugget",
        count: 4,
      },
      {
        tag: "forge:ingots/steel",
        count: 1,
      },
      {
        tag: "forge:ingots/strong_bronze",
        count: 1,
      },
      {
        tag: "forge:chromatic",
        count: 1,
      },
      {
        item: "minecraft:ender_pearl",
        count: 1,
      },
      {
        fluid: "create_dd:glowberry_milkshake",
        amount: 500,
      },
    ],
    results: [
      {
        item: "create_dd:mithril_ingot",
        count: 1,
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
        count: 1,
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "kubejs:molten_iron",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "create_dd:ember_alloy",
        count: 1,
      },
    ],
    results: [
      {
        amount: 50,
        fluid: "minecraft:lava",
      },
    ],
  });
  event.custom({
    type: "create:mixing",
    heatRequirement: "superheated",
    ingredients: [
      {
        item: "minecraft:echo_shard",
        count: 4,
      },
      {
        item: "minecraft:nether_star",
        count: 2,
      },
      {
        item: "minecraft:elytra",
        count: 1,
      },
      {
        amount: 500,
        fluid: "create_central_kitchen:dragon_breath",
      },
    ],
    results: [
      {
        amount: 1000,
        fluid: "kubejs:boss_fluid",
      },
    ],
  });
});
