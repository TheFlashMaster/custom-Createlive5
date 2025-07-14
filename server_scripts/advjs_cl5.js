//priority: 1
//Create Live 5 Custom Advancements
//Author: RGB Pixl

AdvJSEvents.advancement((event) => {
  const { CONDITION, PREDICATE, PROVIDER, TRIGGER } = event;
  event.remove({ mod: "minecraft" });
  event.remove({ mod: "create" });
  event.remove({ mod: "create_bic_bit" });
  event.remove({ mod: "create_central_kitchen" });
  event.remove({ mod: "create_connected" });
  event.remove({ mod: "create_dd" });
  event.remove({ mod: "create_enchantment_industry" });
//  event.remove({ mod: "display_case" });
  event.remove({ mod: "farmersdelight" });
  event.remove({ mod: "vegandelight" });

  event.remove("tooltrims:adventure/shiny_tools");

  //Root erstellen
  const cl5 = event
    .create("advjs:cl5")
    .display((displayBuilder) => {
      displayBuilder.setIcon("create_dd:integrated_mechanism");
      displayBuilder.setTitle({translate: 'cl5.advjs.welcome.title'});
      displayBuilder.setDescription({translate: 'cl5.advjs.welcome.description'});
      displayBuilder.setBackground(
        "textures/gui/advancements/backgrounds/adventure.png"
      );
      displayBuilder.setShowToast(true);
      displayBuilder.setAnnounceToChat(false);
      displayBuilder.setFrameType("challenge");
    })

    .criteria((criteriaBuilder) => {
      criteriaBuilder.add(
        "start",
        TRIGGER.hasItems([
          "minecraft:oak_log",
          "minecraft:spruce_log",
          "minecraft:birch_log",
          "minecraft:jungle_log",
          "minecraft:acacia_log",
          "minecraft:dark_oak_log",
          "minecraft:mangrove_log",
          "minecraft:cherry_log",
          "create_dd:rose_log",
          "create_dd:smoked_log",
          "create_dd:spirit_log",
          "create_dd:rubber_log",
        ])
      );
    });

  //Child Stone Age
  const human_energy = cl5.addChild("stone_age", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("cobblestone");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.cobblestone.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.cobblestone.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_cobble", TRIGGER.hasItems("cobblestone"));
      })
      .requireParentDone();
  });

  //Child Kohle, Kohle, Kohle
  const coal = cl5.addChild("charcoal", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:charcoal");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.charcoal.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.charcoal.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_charcoal",
          TRIGGER.hasItems("minecraft:charcoal")
        );
      })
      .requireParentDone();
  });

  //Child Shred the Sun
  const crushed_sunflower_seed = cl5.addChild(
    "crushed_sunflower_seed",
    (advBuilder) => {
      advBuilder
        .display((displayBuilder) => {
          displayBuilder.setIcon("minecraft:sunflower");
          displayBuilder.setTitle({translate: 'cl5.advjs.item.crushed_sunflower_seeds.title'});
          displayBuilder.setDescription({translate: 'cl5.advjs.item.crushed_sunflower_seeds.description'});
          displayBuilder.setHidden(false);
        })
        .criteria((criteriaBuilder) => {
          criteriaBuilder.add(
            "get_crushed_sunflower_seed",
            TRIGGER.hasItems("create_bic_bit:crushed_sunflower_seeds")
          );
        })
        .requireParentDone();
    }
  );

  //Child Bigger Inventory
  cl5.addChild("backpack", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("travelersbackpack:standard");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.custom_travelers_backpack.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.custom_travelers_backpack.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_backpack",
          TRIGGER.hasItems([
            "travelersbackpack:standard",
            "travelersbackpack:netherite",
            "travelersbackpack:diamond",
            "travelersbackpack:gold",
            "travelersbackpack:emerald",
            "travelersbackpack:iron",
            "travelersbackpack:lapis",
            "travelersbackpack:redstone",
            "travelersbackpack:coal",
            "travelersbackpack:quartz",
            "travelersbackpack:bookshelf",
            "travelersbackpack:end",
            "travelersbackpack:nether",
            "travelersbackpack:sandstone",
            "travelersbackpack:snow",
            "travelersbackpack:sponge",
            "travelersbackpack:cake",
            "travelersbackpack:cactus",
            "travelersbackpack:hay",
            "travelersbackpack:melon",
            "travelersbackpack:pumpkin",
            "travelersbackpack:creeper",
            "travelersbackpack:dragon",
            "travelersbackpack:enderman",
            "travelersbackpack:blaze",
            "travelersbackpack:ghast",
            "travelersbackpack:magma_cube",
            "travelersbackpack:skeleton",
            "travelersbackpack:spider",
            "travelersbackpack:wither",
            "travelersbackpack:bat",
            "travelersbackpack:bee",
            "travelersbackpack:wolf",
            "travelersbackpack:fox",
            "travelersbackpack:ocelot",
            "travelersbackpack:horse",
            "travelersbackpack:cow",
            "travelersbackpack:pig",
            "travelersbackpack:sheep",
            "travelersbackpack:chicken",
            "travelersbackpack:squid",
            "travelersbackpack:villager",
            "travelersbackpack:iron_golem",
          ])
        );
      })
      .requireParentDone();
  });

  //Child Iron Robbery
  const iron = cl5.addChild("zombie_iron", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:iron_ingot");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.iron_ingot.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.iron_ingot.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "kill_zombie",
          TRIGGER.playerKilledEntity((triggerBuilder) => {
            triggerBuilder.setKilled((entityPredicateBuilder) => {
              entityPredicateBuilder.of("zombie");
            });
          })
        );
        criteriaBuilder.add("iron_loot", TRIGGER.hasItems("iron_ingot"));
        criteriaBuilder.setRequirements([["kill_zombie"], ["iron_loot"]]);
      });
  });

  //Child Human Energy
  human_energy.addChild("human_energy", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:cog_crank");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.cog_crank.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.cog_crank.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_cog_crank",
          TRIGGER.hasItems("create_dd:cog_crank")
        );
      })
      .requireParentDone();
  });

  //Child Stone Miller
  const mill_stone = human_energy.addChild("mill_stone", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:millstone");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.millstone.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.millstone.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_millstone",
          TRIGGER.hasItems("create:millstone")
        );
      })
      .requireParentDone();
  });

  //Child Sandy
  const sandy = mill_stone.addChild("sandy", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:sand");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.sand.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.sand.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_sand", TRIGGER.hasItems("minecraft:sand"));
      })
      .requireParentDone();
  });

  //Child Stone, but Red
  mill_stone.addChild("redstone", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:redstone");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.redstone.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.redstone.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_redstone",
          TRIGGER.hasItems("minecraft:redstone")
        );
      })
      .requireParentDone();
  });

  //Child Asurine
  const asurine = crushed_sunflower_seed.addChild("asurine", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:asurine");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.asurine.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.asurine.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_asurine", TRIGGER.hasItems("create:asurine"));
      })
      .requireParentDone();
  });

  //Child Calcium
  const calcite = sandy.addChild("calcite", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:calcite");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.calcite.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.calcite.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_calcite",
          TRIGGER.hasItems("minecraft:calcite")
        );
      })
      .requireParentDone();
  });

  //Child Quarz
  sandy.addChild("quartz", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:quartz");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.quartz.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.quartz.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_quartz", TRIGGER.hasItems("minecraft:quartz"));
      });
  });

  //Child Finally!
  const andesite_alloy = asurine.addChild("andesite_alloy", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:andesite_alloy");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.andesite_alloy.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.andesite_alloy.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_a_alloy",
          TRIGGER.hasItems("create:andesite_alloy")
        );
      })
      .requireParentDone()
      .requireOthersDone(["advjs:cl5/calcite"]);
  });

  //Child Tier 1 Machinery
  const tier1 = andesite_alloy.addChild("tier1_casing", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:andesite_casing");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.andesite_casing.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.andesite_casing.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_a_casing",
          TRIGGER.hasItems("create:andesite_casing")
        );
      })
      .requireParentDone();
  });

  //Child Hydropower
  const hydropower = tier1.addChild("hydropower", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:water_wheel");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.water_wheel.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.water_wheel.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_waterwheel",
          TRIGGER.hasItems("create:water_wheel")
        );
      })
      .requireParentDone();
  });

  //Child Power of the wind!
  const windpower = hydropower.addChild("windpower", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:white_sail");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.white_sail.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.white_sail.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_sail", TRIGGER.hasItems("create:white_sail"));
        criteriaBuilder.add(
          "get_windmill",
          TRIGGER.hasItems("create:windmill_bearing")
        );
      })
      .requireParentDone();
  });

  //Child High Energy
  const high_energy = windpower.addChild("high_energy", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:steam_engine");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.steam_engine.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.steam_engine.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_engine",
          TRIGGER.hasItems("create:steam_engine")
        );
        criteriaBuilder.add("get_tank", TRIGGER.hasItems("create:fluid_tank"));
      })
      .requireParentDone();
  });

  //Child Electricity!
  const electricity = high_energy.addChild("electricity", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_new_age:generator_coil");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.generator_coil.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.generator_coil.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_coil",
          TRIGGER.hasItems("create_new_age:generator_coil")
        );
        criteriaBuilder.add(
          "get_magnet",
          TRIGGER.hasItems("create_new_age:magnetite_block")
        );
      })
      .requireParentDone();
  });

  //Child Electrical Connection
  const electric_connect = electricity.addChild(
    "electric_connect",
    (advBuilder) => {
      advBuilder
        .display((displayBuilder) => {
          displayBuilder.setIcon("create_new_age:electrical_connector");
          displayBuilder.setTitle({translate: 'cl5.advjs.item.electrical_connector.title'});
          displayBuilder.setDescription({translate: 'cl5.advjs.item.electrical_connector.description'});
          displayBuilder.setHidden(false);
        })
        .criteria((criteriaBuilder) => {
          criteriaBuilder.add(
            "get_connector",
            TRIGGER.hasItems("create_new_age:electrical_connector")
          );
        })
        .requireParentDone();
    }
  );

  //Child Electric Motor!
  const electric_motor = electric_connect.addChild(
    "electric_motor",
    (advBuilder) => {
      advBuilder
        .display((displayBuilder) => {
          displayBuilder.setIcon("create_new_age:basic_motor");
          displayBuilder.setTitle({translate: 'cl5.advjs.item.basic_motor.title'});
          displayBuilder.setDescription({translate: 'cl5.advjs.item.basic_motor.description'});
          displayBuilder.setHidden(false);
        })
        .criteria((criteriaBuilder) => {
          criteriaBuilder.add(
            "get_motor",
            TRIGGER.hasItems("create_new_age:basic_motor")
          );
        })
        .requireParentDone();
    }
  );

  //Child Solar Energy
  const solar_energy = high_energy.addChild("solar_energy", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_new_age:basic_solar_heating_plate");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.basic_solar_heating_plate.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.basic_solar_heating_plate.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_solar_heater",
          TRIGGER.hasItems("create_new_age:basic_solar_heating_plate")
        );
      })
      .requireParentDone();
  });

  //Child Heat Pipes
  const heat_pipe = solar_energy.addChild("heat_pipe", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_new_age:heat_pipe");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.heat_pipe.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.heat_pipe.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_heatpipe",
          TRIGGER.hasItems("create_new_age:heat_pipe")
        );
      })
      .requireParentDone();
  });

  //Child Pump the Heat
  const heat_pump = heat_pipe.addChild("heat_pump", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_new_age:heat_pump");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.heat_pump.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.heat_pump.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_heatpump",
          TRIGGER.hasItems("create_new_age:heat_pump")
        );
      })
      .requireParentDone();
  });

  //Child Better than Blazes
  heat_pump.addChild("boiler_heater", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_new_age:heater");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.heater.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.heater.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_heater",
          TRIGGER.hasItems("create_new_age:heater")
        );
      })
      .requireParentDone();
  });

  //Child Mechanical Fuse
  hydropower.addChild("shear_pin", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_connected:shear_pin");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.shear_pin.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.shear_pin.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_shearpin",
          TRIGGER.hasItems("create_connected:shear_pin")
        );
      })
      .requireParentDone();
  });

  //Child Tier 2 Machinery
  const tier2 = tier1.addChild("tier2_casing", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:brass_casing");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.brass_casing.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.brass_casing.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_brass_casing",
          TRIGGER.hasItems("create:brass_casing")
        );
      })
      .requireParentDone();
  });

  //Child High End Storage
  tier1.addChild("highend_storage", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("toms_storage:ts.storage_terminal");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.storage_terminal.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.storage_terminal.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_storage_terminal",
          TRIGGER.hasItems("toms_storage:ts.storage_terminal")
        );
      })
      .requireParentDone();
  });

  //Child Auto-Cobble
  tier1.addChild("auto_cobble", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon(
          "create_mechanical_extruder:mechanical_extruder"
        );
        displayBuilder.setTitle({translate: 'cl5.advjs.item.mechanical_extruder.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.mechanical_extruder.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_extruder",
          TRIGGER.hasItems("create_mechanical_extruder:mechanical_extruder")
        );
      })
      .requireParentDone();
  });

  //Child Bye Rainforest
  tier1.addChild("big_saw", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:deforester_saw");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.deforester_saw.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.deforester_saw.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_deforester",
          TRIGGER.hasItems("create_dd:deforester_saw")
        );
      })
      .requireParentDone();
  });

  //Child Item Vault
  tier1.addChild("item_vault", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:item_vault");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.item_vault.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.item_vault.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_vault", TRIGGER.hasItems("create:item_vault"));
      })
      .requireParentDone();
  });

  //Child High-Tier Material
  const tier3 = tier2.addChild("chromatic_compound", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:chromatic_compound");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.chromatic_compound.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.chromatic_compound.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_chromatic_compound",
          TRIGGER.hasItems("create_dd:chromatic_compound")
        );
      })
      .requireParentDone();
  });

  //Child Custom Spawner
  const spawner = tier2.addChild("mechanical_spawner", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_mechanical_spawner:mechanical_spawner");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.mechanical_spawner.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.mechanical_spawner.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_spawner",
          TRIGGER.hasItems("create_mechanical_spawner:mechanical_spawner")
        );
      })
      .requireParentDone();
  });

  //Child Spawner Fluid
  spawner.addChild("spawn_fluid", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon(
          "create_mechanical_spawner:spawn_fluid_random_bucket"
        );
        displayBuilder.setTitle({translate: 'cl5.advjs.item.spawn_fluid_random_bucket.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.spawn_fluid_random_bucket.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_spawn_fluid",
          TRIGGER.hasItems(
            "create_mechanical_spawner:spawn_fluid_random_bucket"
          )
        );
      })
      .requireParentDone();
  });

  //Child Advanced Crushing
  tier2.addChild("crushing_wheels", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:crushing_wheel");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.crushing_wheel.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.crushing_wheel.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_crushing_wheel",
          TRIGGER.hasItems("create:crushing_wheel")
        );
      })
      .requireParentDone();
  });

  //Child Gamecontroller
  tier2.addChild("gamecontroller", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon(
          "create_tweaked_controllers:tweaked_linked_controller"
        );
        displayBuilder.setTitle({translate: 'cl5.advjs.item.tweaked_linked_controller.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.tweaked_linked_controller.description'});
        displayBuilder.setHidden(true);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_gamecontroller",
          TRIGGER.hasItems(
            "create_tweaked_controllers:tweaked_linked_controller"
          )
        );
      })
      .requireParentDone();
  });

  //Child Stargaze Singularity
  const stargaze = tier3.addChild("stargaze", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:stargaze_singularity");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.stargaze_singularity.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.stargaze_singularity.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_stargaze",
          TRIGGER.hasItems("create_dd:stargaze_singularity")
        );
      })
      .requireParentDone();
  });

  //Child Infinite Blocks!
  stargaze.addChild("infablocks", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:infastone");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.infablocks.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.infablocks.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_infablocks",
          TRIGGER.hasItems([
            "create_dd:infastone",
            "create_dd:infadirt",
            "create_dd:infadiorite",
            "create_dd:infacobblestone",
            "create_dd:infacobbled_deepslate",
          ])
        );
      })
      .requireParentDone();
  });

  //Child Singularity Casing
  const tier4 = stargaze.addChild("singularity_casing", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:stargaze_singularity_casing");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.stargaze_singularity_casing.title'});
        displayBuilder.setAnnounceToChat(false);
        displayBuilder.setFrameType("challenge");
        displayBuilder.setDescription({translate: 'cl5.advjs.item.stargaze_singularity_casing.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_infablocks",
          TRIGGER.hasItems("create_dd:stargaze_singularity_casing")
        );
      })
      .requireParentDone();
  });

  //Child Singularity Casing
  tier3.addChild("refined_radiance", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:refined_radiance");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.refined_radiance.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.refined_radiance.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_infablocks",
          TRIGGER.hasItems("create_dd:refined_radiance")
        );
      })
      .requireParentDone();
  });

  //Child Creator Helmet
  tier4.addChild("01creator_helmet", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_helmet");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_helmet.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_helmet.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_helmet",
          TRIGGER.hasItems("kubejs:creator_helmet")
        );
      })
      .requireParentDone();
  });

  //Child Creator Chestplate
  tier4.addChild("1creator_chestplate", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_chestplate");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_chestplate.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_chestplate.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_chestplate",
          TRIGGER.hasItems("kubejs:creator_chestplate")
        );
      })
      .requireParentDone();
  });

  //Child Creator Leggings
  tier4.addChild("0001creator_leggings", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_leggings");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_leggings.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_leggings.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_leggings",
          TRIGGER.hasItems("kubejs:creator_leggings")
        );
      })
      .requireParentDone();
  });

  //Child Creator Boots
  tier4.addChild("001creator_boots", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_boots");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_boots.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_boots.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_boots",
          TRIGGER.hasItems("kubejs:creator_boots")
        );
      })
      .requireParentDone();
  });

  //Child Netherite
  const netherite = tier3.addChild("netherite", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:netherite_ingot");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.netherite_ingot.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.netherite_ingot.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_netherite",
          TRIGGER.hasItems("minecraft:netherite_ingot")
        );
      })
      .requireParentDone();
  });

  //Child Stargaze Plate
  netherite.addChild("stargaze_plate", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:stargaze_plate");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.stargaze_plate.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.stargaze_plate.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_stargaze_plate",
          TRIGGER.hasItems("kubejs:stargaze_plate")
        );
      })
      .requireParentDone();
  });

  //Child Blaze Brass
  const blaze_gold = tier3.addChild("blaze_gold", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:blaze_gold");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.blaze_gold.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.blaze_gold.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_blaze_gold",
          TRIGGER.hasItems("create_dd:blaze_gold")
        );
      })
      .requireParentDone();
  });

  //Child Blaze Plate
  const blaze_plate = blaze_gold.addChild("blaze_plate", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:blaze_plate");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.blaze_plate.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.blaze_plate.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_blaze_plate",
          TRIGGER.hasItems("kubejs:blaze_plate")
        );
      })
      .requireParentDone();
  });

  //Child Blaze Plate Rod
  const blaze_plate_rod = blaze_plate.addChild(
    "blaze_plate_rod",
    (advBuilder) => {
      advBuilder
        .display((displayBuilder) => {
          displayBuilder.setIcon("kubejs:blaze_plate_rod");
          displayBuilder.setTitle({translate: 'cl5.advjs.item.blaze_plate_rod.title'});
          displayBuilder.setDescription({translate: 'cl5.advjs.item.blaze_plate_rod.description'});
          displayBuilder.setHidden(false);
          displayBuilder.setFrameType("challenge");
        })
        .criteria((criteriaBuilder) => {
          criteriaBuilder.add(
            "get_blaze_plate_rod",
            TRIGGER.hasItems("kubejs:blaze_plate_rod")
          );
        })
        .requireParentDone();
    }
  );

  //Child Creator Sword
  blaze_plate_rod.addChild("00001creator_sword", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_sword");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_sword.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_sword.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_sword",
          TRIGGER.hasItems("kubejs:creator_sword")
        );
      })
      .requireParentDone();
  });

  //Child Creator Shovel
  blaze_plate_rod.addChild("00002creator_shovel", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_shovel");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_shovel.titl'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_shovel.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_shovel",
          TRIGGER.hasItems("kubejs:creator_shovel")
        );
      })
      .requireParentDone();
  });

  //Child Creator Pickaxe
  blaze_plate_rod.addChild("00003creator_pickaxe", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_pickaxe");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_pickaxe.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_pickaxe.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_pickaxe",
          TRIGGER.hasItems("kubejs:creator_pickaxe")
        );
      })
      .requireParentDone();
  });

  //Child Creator Axe
  blaze_plate_rod.addChild("00004creator_axe", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_axe");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_axe.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_axe.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_axe",
          TRIGGER.hasItems("kubejs:creator_axe")
        );
      })
      .requireParentDone();
  });

  //Child Creator Hoe
  blaze_plate_rod.addChild("00005creator_hoe", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:creator_hoe");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creator_hoe.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creator_hoe.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creator_hoe",
          TRIGGER.hasItems("kubejs:creator_hoe")
        );
      })
      .requireParentDone();
  });

  //Child Mithril
  const mithril = tier3.addChild("mithril", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:mithril_ingot");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.mithril_ingot.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.mithril_ingot.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_mithril",
          TRIGGER.hasItems("create_dd:mithril_ingot")
        );
      })
      .requireParentDone();
  });

  //Child End
  const end = mithril.addChild("end", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:end_portal_frame");
        displayBuilder.setTitle({translate: 'cl5.advjs.dimension.the_end.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.dimension.the_end.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "entered_end",
          TRIGGER.changedDimension((triggerBuilder) => {
            triggerBuilder.setTo("the_end");
          })
        );
      })
      .requireParentDone();
  });

  //Child Ravager
  mithril.addChild("forest_ravager", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:forest_ravager");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.forest_ravager.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.forest_ravager.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_ravager",
          TRIGGER.hasItems("create_dd:forest_ravager")
        );
      })
      .requireParentDone();
  });

  //Child Dragon Egg
  end.addChild("dragon_egg", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:dragon_egg");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.dragon_egg.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.dragon_egg.description'});
        displayBuilder.setHidden(true);
        displayBuilder.setFrameType("challenge");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_dragon_egg",
          TRIGGER.hasItems("minecraft:dragon_egg")
        );
      })
      .requireParentDone();
  });

  //Child Shimmer
  const shimmer = tier2.addChild("shimmer_bucket", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("kubejs:shimmer_nugget");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.shimmer_nugget.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.shimmer_nugget.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_shimmer_bucket",
          TRIGGER.hasItems("kubejs:shimmer_nugget")
        );
      })
      .requireParentDone();
  });

  //Child Diorite
  const diorite = calcite.addChild("diorite", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:diorite");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.diorite.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.diorite.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_diorite",
          TRIGGER.hasItems("minecraft:diorite")
        );
      })
      .requireParentDone();
  });

  //Child Shred Diorite
  diorite.addChild("shred_diorite", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:crushing_wheel");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.quartz_dust.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.quartz_dust.description'});
        displayBuilder.setHidden(true);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "crush_diorite",
          TRIGGER.hasItems("kubejs:quartz_dust")
        );
      });
  });

  iron.addChild("no_golem_iron", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:poppy");
        displayBuilder.setTitle({translate: 'cl5.advjs.kill.iron_golem.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.kill.iron_golem.description'});
        displayBuilder.setHidden(true);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "kill_golem",
          TRIGGER.playerKilledEntity((triggerBuilder) => {
            triggerBuilder.setKilled((entityPredicateBuilder) => {
              entityPredicateBuilder.of("iron_golem");
            });
          })
        );
      });
  });

  //Child Shredder
  tier2.addChild("create_shredder", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("amazingtrading:create_shredder");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.create_shredder.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.create_shredder.description'});
        displayBuilder.setHidden(false);
        displayBuilder.setFrameType("goal");
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_create_shredder",
          TRIGGER.hasItems("amazingtrading:create_shredder")
        );
      });
  });

  //Child Cannon
  tier1.addChild("cannon_builder", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("createbigcannons:cannon_builder");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.cannon_builder.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.cannon_builder.description'});
        displayBuilder.setHidden(true);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_cannon_builder",
          TRIGGER.hasItems("createbigcannons:cannon_builder")
        );
      });
  });

  //Child Better Smelting
  const fan = coal.addChild("encased_fan", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:encased_fan");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.encased_fan.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.encased_fan.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_encased_fan",
          TRIGGER.hasItems("create:encased_fan")
        );
      });
  });

  //Child Industrial Smelting
  fan.addChild("industrial_fan", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_dd:industrial_fan");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.industrial_fan.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.industrial_fan.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_industrial_fan",
          TRIGGER.hasItems("create_dd:industrial_fan")
        );
      });
  });

  //SNIFFER EGG
  const sniffer = fan.addChild("sniffer_egg", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:sniffer_egg");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.sniffer_egg.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.sniffer_egg.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_sniffer_egg",
          TRIGGER.hasItems("minecraft:sniffer_egg")
        );
      });
  });

  //Kelp
  sniffer.addChild("kelp", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:kelp");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.kelp.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.kelp.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_kelp", TRIGGER.hasItems("minecraft:kelp"));
      });
  });

  //Bamboo
  sniffer.addChild("bamboo", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("minecraft:bamboo");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.bamboo.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.bamboo.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_bamboo", TRIGGER.hasItems("minecraft:bamboo"));
      });
  });

  //Child Vegan Challenge
  const vegan = sniffer.addChild("vegan", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("vegandelight:wild_soybean");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.soybean.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.soybean.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_soybean",
          TRIGGER.hasItems("vegandelight:soybean")
        );
      })
      .requireParentDone();
  });

  //Child Tofu
  vegan.addChild("tofu", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("vegandelight:tofu");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.tofu.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.tofu.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add("get_tofu", TRIGGER.hasItems("vegandelight:tofu"));
      })
      .requireParentDone();
  });

  //Child Vegan Leather
  vegan.addChild("v_leather", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("vegandelight:leather_substitute");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.leather_substitute.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.leather_substitute.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_leather_substitute",
          TRIGGER.hasItems("vegandelight:leather_substitute")
        );
      });
  });

  //Child MORE HEAT
  const burner = coal.addChild("blaze_burner", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:blaze_burner");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.blaze_burner.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.blaze_burner.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_blaze_burner",
          TRIGGER.hasItems("create:blaze_burner")
        );
      });
  });

  //Child Blaze Cake
  burner.addChild("blaze_cake", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create:blaze_cake");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.blaze_cake.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.blaze_cake.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_blaze_cake",
          TRIGGER.hasItems("create:blaze_cake")
        );
      });
  });

  //Child Infinity Wand
  stargaze.addChild("infinity_wand", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("constructionwand:infinity_wand");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.infinity_wand.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.infinity_wand.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_infinity_wand",
          TRIGGER.hasItems("constructionwand:infinity_wand")
        );
      });
  });

  //Child Creative Tank
  shimmer.addChild("creative_filling_tank", (advBuilder) => {
    advBuilder
      .display((displayBuilder) => {
        displayBuilder.setIcon("create_sa:creative_filling_tank");
        displayBuilder.setTitle({translate: 'cl5.advjs.item.creative_filling_tank.title'});
        displayBuilder.setDescription({translate: 'cl5.advjs.item.creative_filling_tank.description'});
        displayBuilder.setHidden(false);
      })
      .criteria((criteriaBuilder) => {
        criteriaBuilder.add(
          "get_creative_filling_tank",
          TRIGGER.hasItems("create_sa:creative_filling_tank")
        );
      });
  });
});
