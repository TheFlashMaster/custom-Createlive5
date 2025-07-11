//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_sheep",
      amount: 100,
    },
    mob: "minecraft:sheep",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_pig",
      amount: 100,
    },
    mob: "minecraft:pig",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_cow",
      amount: 100,
    },
    mob: "minecraft:cow",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_chicken",
      amount: 100,
    },
    mob: "minecraft:chicken",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_squid",
      amount: 100,
    },
    mob: "minecraft:squid",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_ghast",
      amount: 100,
    },
    mob: "minecraft:ghast",
    processingTime: 2500,
  });

  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_wither_skeleton",
      amount: 100,
    },
    mob: "minecraft:wither_skeleton",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_allay",
      amount: 100,
    },
    mob: "minecraft:allay",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_dolphin",
      amount: 100,
    },
    mob: "minecraft:dolphin",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_guardian",
      amount: 100,
    },
    mob: "minecraft:guardian",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_fox",
      amount: 100,
    },
    mob: "minecraft:fox",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_wolf",
      amount: 250,
    },
    mob: "minecraft:wolf",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_cat",
      amount: 250,
    },
    mob: "minecraft:cat",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_frog",
      amount: 100,
    },
    mob: "minecraft:frog",
    processingTime: 2500,
  });
  event.custom({
    type: "create_mechanical_spawner:spawner",
    fluid: {
      fluid: "kubejs:spawn_fluid_phantom",
      amount: 100,
    },
    mob: "minecraft:phantom",
    processingTime: 2500,
  });
});
