AdvJSEvents.advancement((event) => {
    const { CONDITION, PREDICATE, PROVIDER, TRIGGER } = event;

    // ============================================================================
    // ROOT ADVANCEMENT
    // ============================================================================
    const cl5extra = event
        .create("advjs:cl5extra")
        .display((displayBuilder) => {
            displayBuilder.setIcon("createcasing:creative_casing");
            displayBuilder.setTitle({ translate: 'cl5.advjs.extra.title' });
            displayBuilder.setDescription({ translate: 'cl5.advjs.extra.description' });
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

    // ============================================================================
    // MAIN TECHNOLOGY BRANCH - Power & Automation Pipeline
    // ============================================================================

    const highRpm = cl5extra.addChild("high_rpm", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:speedometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.high_rpm.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.high_rpm.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "high_rpm_trigger",
                    TRIGGER.custom("minecraft:high_rpm_trigger")
                );
            })
            .requireParentDone();
    });

    const stressBasic = highRpm.addChild("stress_basics", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:stressometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.stress.stress_basics.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.stress.stress_basics.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "stress_unit_trigger",
                    TRIGGER.custom("minecraft:stress_basic_trigger")
                );
            })
    });

    const steamGiant = stressBasic.addChild("steam_giant", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:steam_engine");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.steam_giant.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.steam_giant.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "steam_giant_trigger",
                    TRIGGER.custom("minecraft:steam_giant_trigger")
                );
            });
    });

    const highStress = steamGiant.addChild("high_stress", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:stressometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.high_stress.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.high_stress.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "high_stress_trigger",
                    TRIGGER.custom("minecraft:high_stress_trigger")
                );
            })
            .requireParentDone();
    });

    const machinePark = stressBasic.addChild("machine_park", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:mechanical_press");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.machine_park.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.machine_park.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "machine_park_trigger",
                    TRIGGER.custom("minecraft:machine_park_trigger")
                );
            })
            .requireParentDone();
    });

    const mechanismMaster = machinePark.addChild("mechanism_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:precision_mechanism");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.mechanism_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.mechanism_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("vibrating_mechanism", TRIGGER.hasItems(["create_things_and_misc:vibration_mechanism"]));
                criteriaBuilder.add("integrated_mechanism", TRIGGER.hasItems("create_dd:integrated_mechanism"));
                criteriaBuilder.add("calculation_mechanism", TRIGGER.hasItems(["create_dd:calculation_mechanism"]));
                criteriaBuilder.add("logistic_mechanism", TRIGGER.hasItems(["create_dd:inductive_mechanism"]));
                criteriaBuilder.add("infernal_mechanism", TRIGGER.hasItems(["create_dd:infernal_mechanism"]));
                criteriaBuilder.add("sealed_mechanism", TRIGGER.hasItems(["create_dd:sealed_mechanism"]));
                criteriaBuilder.add("precision_mechanism", TRIGGER.hasItems(["create:precision_mechanism"]));
            });
    });

    // TODO: auto_mechanisms - Build a machine to produce mechanisms automatically
    /*
    const autoMechanisms = mechanismMaster.addChild("auto_mechanisms", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:deployer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.auto_mechanisms.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.auto_mechanisms.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });
    */
    //! Fix length implementation/translation
    const longConveyors = cl5extra.addChild("long_conveyors", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:belt_connector");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.long_conveyors.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.long_conveyors.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "long_conveyors_trigger",
                    TRIGGER.custom("minecraft:long_conveyors_trigger")
                );
            })
            .requireParentDone();
    });

    const terminalMaster = cl5extra.addChild("storage_system", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("toms_storage:ts.crafting_terminal");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.terminal_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.terminal_master.description' });
                displayBuilder.setHidden(false);
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "get_c_terminal",
                    TRIGGER.hasItems("toms_storage:ts.crafting_terminal")
                );
            })
            .requireParentDone();
    });
    const wirelessTerminal = terminalMaster.addChild("wireless_terminal", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("toms_storage:ts.wireless_terminal");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.wireless_terminal.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.wireless_terminal.description' });
                displayBuilder.setHidden(false);
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "get_w_terminal",
                    TRIGGER.hasItems("toms_storage:ts.wireless_terminal")
                );
            })
            .requireParentDone();
    });

    const wirelessConnected = wirelessTerminal.addChild("wireless_connected", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("toms_storage:ts.adv_wireless_terminal");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.wireless_connected.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.wireless_connected.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("wireless_terminal_used", TRIGGER.custom("minecraft:wireless_connected"));
            })
            .requireParentDone();
    });

    const crossDimensional = wirelessConnected.addChild("cross_dimensional", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:ender_eye");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.cross_dimensional.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.cross_dimensional.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("wireless_terminal_used", TRIGGER.custom("minecraft:cross_dimension"));
            })
            .requireParentDone();
    });

    const longTrainRide = longConveyors.addChild("long_train_ride", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:controls");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.long_train_ride.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.long_train_ride.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("ride_train", TRIGGER.custom("minecraft:long_train_ride_trigger"))
            })
            .requireParentDone();
    });
    const veryLongTrainRide = longTrainRide.addChild("very_long_train_ride", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:controls");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.very_long_train_ride.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.very_long_train_ride.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "ride_train",
                    TRIGGER.custom("minecraft:very_long_train_ride_trigger")
                );
            })
            .requireParentDone();

    });

    const casingMaster = mechanismMaster.addChild("casing_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:andesite_casing");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.casing_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.casing_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("stone_casing", TRIGGER.hasItems("kubejs:stone_casing"));
                criteriaBuilder.add("mithril_casing", TRIGGER.hasItems("create_dd:mithril_casing"));
                criteriaBuilder.add("bronze_casing", TRIGGER.hasItems("create_dd:bronze_casing"));
                criteriaBuilder.add("zinc_casing", TRIGGER.hasItems("create_dd:zinc_casing"));
                criteriaBuilder.add("tin_casing", TRIGGER.hasItems("create_dd:tin_casing"));
                criteriaBuilder.add("netherite_casing", TRIGGER.hasItems("create_dd:netherite_casing"));
                criteriaBuilder.add("brick_casing", TRIGGER.hasItems("create_dd:brick_casing"));
                criteriaBuilder.add("nether_brick_casing", TRIGGER.hasItems("create_dd:nether_brick_casing"));
                criteriaBuilder.add("mossy_andesite_casing", TRIGGER.hasItems("create_dd:mossy_andesite_casing"));
                criteriaBuilder.add("hydraulic_casing", TRIGGER.hasItems("create_dd:hydraulic_casing"));
                criteriaBuilder.add("industrial_casing", TRIGGER.hasItems("create_dd:industrial_casing"));
                criteriaBuilder.add("overburden_casing", TRIGGER.hasItems("create_dd:overburden_casing"));
                criteriaBuilder.add("steel_casing", TRIGGER.hasItems("create_dd:steel_casing"));

                criteriaBuilder.add("andesite_casing", TRIGGER.hasItems("create:andesite_casing"));
                criteriaBuilder.add("brass_casing", TRIGGER.hasItems("create:brass_casing"));
                criteriaBuilder.add("copper_casing", TRIGGER.hasItems("create:copper_casing"));
                criteriaBuilder.add("shadow_steel_casing", TRIGGER.hasItems("create:shadow_steel_casing"));
                criteriaBuilder.add("refined_radiance_casing", TRIGGER.hasItems("create:refined_radiance_casing"));
                criteriaBuilder.add("train_casing", TRIGGER.hasItems("create:railway_casing"));
            });
    });

    const exoskeleton = cl5extra.addChild("exoskeleton", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:brass_exoskeleton_chestplate");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.exoskeleton.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.exoskeleton.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("exoskeleton", TRIGGER.hasItems([
                    "create_sa:brass_exoskeleton_chestplate",
                    "create_sa:andesite_exoskeleton_chestplate",
                    "create_sa:copper_exoskeleton_chestplate"]));
            });
    });

    //! Currently only one Zombie
    const flamethrowerExpert = exoskeleton.addChild("flamethrower_expert", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:flamethrower");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.flamethrower_expert.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.flamethrower_expert.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("flamethrower_kill", TRIGGER.playerKilledEntity(triggerBuilder => {
                    triggerBuilder.setKillingBlow(damage_builder => {
                        damage_builder.setDirectByType("create_sa:projectile_flamethrower_pr");
                    });
                }));
            })
            .requireParentDone();
    });

    //! Calculation not perfect
    const drillMaster = flamethrowerExpert.addChild("drill_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:portable_drill");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.drill_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.drill_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("drill_mined", TRIGGER.tick(triggerBuilder => triggerBuilder.addStat("create_sa:portable_drill", Stats.ITEM_USED, { min: 1000 })));
            });
    });

    const chunkLoaded = terminalMaster.addChild("chunk_loaded", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_power_loader:andesite_chunk_loader");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.chunk_loaded.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.chunk_loaded.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("chunk_loader_trigger", TRIGGER.custom("minecraft:chunk_loader_trigger"));
            })
            .requireParentDone();
    });
    /*
    // TODO: chunk_master Load 16 Chunks with Chunk Loader
    const chunkMaster = chunkLoaded.addChild("chunk_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_power_loader:brass_chunk_loader");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.chunk_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.chunk_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });
    */
    // TODO: bad_luck Fail 3 Mechanism in a row
    /*
    const badLuck = mechanismMaster.addChild("bad_luck", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:redstone");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.bad_luck.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.bad_luck.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    */
    const stressMaster = stressBasic.addChild("stress_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:stressometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.stress_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.stress_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "stress_master_trigger",
                    TRIGGER.custom("minecraft:stress_master_trigger")
                );
            })
            .requireParentDone();
    });

    // ============================================================================
    // EXPLORATION & WORLD DEVELOPMENT BRANCH
    // ============================================================================

    // TODO: island_hopping - Be 24h on a different island
    /*
    const islandHopping = cl5extra.addChild("island_hopping", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:map");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.island_hopping.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.island_hopping.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    */
    // TODO: caves_cliffs Ride from heigh 0 to 320 with an elevator create
    /*
    const cavesCliffs = islandHopping.addChild("caves_cliffs", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:mechanical_piston");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.caves_cliffs.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.caves_cliffs.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    */
    const higherPossible = exoskeleton.addChild("higher_possible", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:elytra");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.higher_possible.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.higher_possible.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "high_up",
                    TRIGGER.location(triggerBuilder =>
                        triggerBuilder.setLocation(
                            locationBuilder => locationBuilder.setY({ min: 345 })
                        )
                    )
                );
            })
            .requireParentDone();

    });

    // TODO: area_expansion Build a 100x100 Block area
    /*
    const areaExpansion = cavesCliffs.addChild("area_expansion", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:grass_block");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.area_expansion.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.area_expansion.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    */
    // TODO: blueprint_master Build a blueprint with at least 256 blocks
    /*
    const blueprintMaster = areaExpansion.addChild("blueprint_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:schematic");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.blueprint_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.blueprint_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });
    */
    const backpackEnthusiast = cl5extra.addChild("backpack_enthusiast", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("travelersbackpack:standard");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.backpack_enthusiast.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.backpack_enthusiast.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
                displayBuilder.setShowToast(true);
                displayBuilder.setAnnounceToChat(true);
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "has_tier_4_backpack",
                    TRIGGER.tick(triggerBuilder =>
                        triggerBuilder.setNbt("{ForgeCaps:{\"travelersbackpack:travelers_backpack\":{tag:{Tier:4}}}}")
                    )
                );
            })
            .requireParentDone();

    });
    const templateCollector = backpackEnthusiast.addChild("template_collector", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:netherite_upgrade_smithing_template");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.template_collector.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.template_collector.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("upgrade_template", TRIGGER.hasItems("minecraft:netherite_upgrade_smithing_template"));
                criteriaBuilder.add("coast_template", TRIGGER.hasItems("minecraft:coast_armor_trim_smithing_template"));
                criteriaBuilder.add("dune_template", TRIGGER.hasItems("minecraft:dune_armor_trim_smithing_template"));
                criteriaBuilder.add("eye_template", TRIGGER.hasItems("minecraft:eye_armor_trim_smithing_template"));
                criteriaBuilder.add("host_template", TRIGGER.hasItems("minecraft:host_armor_trim_smithing_template"));
                criteriaBuilder.add("raiser_template", TRIGGER.hasItems("minecraft:raiser_armor_trim_smithing_template"));
                criteriaBuilder.add("rib_template", TRIGGER.hasItems("minecraft:rib_armor_trim_smithing_template"));
                criteriaBuilder.add("sentry_template", TRIGGER.hasItems("minecraft:sentry_armor_trim_smithing_template"));
                criteriaBuilder.add("shaper_template", TRIGGER.hasItems("minecraft:shaper_armor_trim_smithing_template"));
                criteriaBuilder.add("silence_template", TRIGGER.hasItems("minecraft:silence_armor_trim_smithing_template"));
                criteriaBuilder.add("snout_template", TRIGGER.hasItems("minecraft:snout_armor_trim_smithing_template"));
                criteriaBuilder.add("spire_template", TRIGGER.hasItems("minecraft:spire_armor_trim_smithing_template"));
                criteriaBuilder.add("tide_template", TRIGGER.hasItems("minecraft:tide_armor_trim_smithing_template"));
                criteriaBuilder.add("vex_template", TRIGGER.hasItems("minecraft:vex_armor_trim_smithing_template"));
                criteriaBuilder.add("ward_template", TRIGGER.hasItems("minecraft:ward_armor_trim_smithing_template"));
                criteriaBuilder.add("wayfinder_template", TRIGGER.hasItems("minecraft:wayfinder_armor_trim_smithing_template"));
                criteriaBuilder.add("wild_template", TRIGGER.hasItems("minecraft:wild_armor_trim_smithing_template"));
            })
    });

    const bucketCollector = templateCollector.addChild("bucket_collector", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:bucket");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.bucket_collector.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.bucket_collector.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                // Basic vanilla buckets
                criteriaBuilder.add("water_bucket", TRIGGER.hasItems("minecraft:water_bucket"));
                criteriaBuilder.add("lava_bucket", TRIGGER.hasItems("minecraft:lava_bucket"));
                criteriaBuilder.add("milk_bucket", TRIGGER.hasItems("minecraft:milk_bucket"));
                criteriaBuilder.add("powder_snow_bucket", TRIGGER.hasItems("minecraft:powder_snow_bucket"));

                // Create mod buckets
                criteriaBuilder.add("chocolate_bucket", TRIGGER.hasItems("create:chocolate_bucket"));
                criteriaBuilder.add("honey_bucket", TRIGGER.hasItems("create:honey_bucket"));

                // Create Enchantment Industry
                criteriaBuilder.add("ink_bucket", TRIGGER.hasItems("create_enchantment_industry:ink_bucket"));

                // Create Mechanical Spawner fluids
                criteriaBuilder.add("spawn_fluid_zombie_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_zombie_bucket"));
                criteriaBuilder.add("spawn_fluid_spider_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_spider_bucket"));
                criteriaBuilder.add("spawn_fluid_slime_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_slime_bucket"));
                criteriaBuilder.add("spawn_fluid_skeleton_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_skeleton_bucket"));
                criteriaBuilder.add("spawn_fluid_magma_cube_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_magma_cube_bucket"));
                criteriaBuilder.add("spawn_fluid_enderman_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_enderman_bucket"));
                criteriaBuilder.add("spawn_fluid_creeper_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_creeper_bucket"));
                criteriaBuilder.add("spawn_fluid_blaze_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_blaze_bucket"));
                criteriaBuilder.add("spawn_fluid_random_bucket", TRIGGER.hasItems("create_mechanical_spawner:spawn_fluid_random_bucket"));

                // Create Central Kitchen
                criteriaBuilder.add("tomato_sauce_bucket", TRIGGER.hasItems("create_central_kitchen:tomato_sauce_bucket"));

                // Slice and Dice
                criteriaBuilder.add("fertilizer_bucket", TRIGGER.hasItems("sliceanddice:fertilizer_bucket"));

                // Vintage Improvements
                criteriaBuilder.add("sulfuric_acid_bucket", TRIGGER.hasItems("vintageimprovements:sulfuric_acid_bucket"));

                // Create BIC BIT
                criteriaBuilder.add("frying_oil_bucket", TRIGGER.hasItems("create_bic_bit:frying_oil_bucket"));
                criteriaBuilder.add("mayonnaise_bucket", TRIGGER.hasItems("create_bic_bit:mayonnaise_bucket"));
                criteriaBuilder.add("ketchup_bucket", TRIGGER.hasItems("create_bic_bit:ketchup_bucket"));
                criteriaBuilder.add("curdled_milk_bucket", TRIGGER.hasItems("create_bic_bit:curdled_milk_bucket"));

                // KubeJS custom fluids
                criteriaBuilder.add("boss_fluid_bucket", TRIGGER.hasItems("kubejs:boss_fluid_bucket"));
                criteriaBuilder.add("bloodmoonshine_fluid_bucket", TRIGGER.hasItems("kubejs:bloodmoonshine_fluid_bucket"));
                criteriaBuilder.add("redstone_fluid_bucket", TRIGGER.hasItems("kubejs:redstone_fluid_bucket"));
                criteriaBuilder.add("molten_iron_bucket", TRIGGER.hasItems("kubejs:molten_iron_bucket"));
                criteriaBuilder.add("spawn_fluid_phantom_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_phantom_bucket"));
                criteriaBuilder.add("spawn_fluid_frog_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_frog_bucket"));
                criteriaBuilder.add("spawn_fluid_cat_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_cat_bucket"));
                criteriaBuilder.add("spawn_fluid_wolf_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_wolf_bucket"));
                criteriaBuilder.add("spawn_fluid_fox_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_fox_bucket"));
                criteriaBuilder.add("spawn_fluid_guardian_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_guardian_bucket"));
                criteriaBuilder.add("spawn_fluid_dolphin_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_dolphin_bucket"));
                criteriaBuilder.add("spawn_fluid_allay_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_allay_bucket"));
                criteriaBuilder.add("spawn_fluid_wither_skeleton_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_wither_skeleton_bucket"));
                criteriaBuilder.add("spawn_fluid_warden_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_warden_bucket"));
                criteriaBuilder.add("spawn_fluid_squid_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_squid_bucket"));
                criteriaBuilder.add("spawn_fluid_ghast_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_ghast_bucket"));
                criteriaBuilder.add("spawn_fluid_chicken_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_chicken_bucket"));
                criteriaBuilder.add("spawn_fluid_cow_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_cow_bucket"));
                criteriaBuilder.add("spawn_fluid_pig_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_pig_bucket"));
                criteriaBuilder.add("spawn_fluid_sheep_bucket", TRIGGER.hasItems("kubejs:spawn_fluid_sheep_bucket"));
                criteriaBuilder.add("kubejs_powder_snow_bucket", TRIGGER.hasItems("kubejs:powder_snow_bucket"));

                // Create Big Cannons
                criteriaBuilder.add("molten_nethersteel_bucket", TRIGGER.hasItems("createbigcannons:molten_nethersteel_bucket"));
                criteriaBuilder.add("molten_steel_bucket", TRIGGER.hasItems("createbigcannons:molten_steel_bucket"));
                criteriaBuilder.add("molten_bronze_bucket", TRIGGER.hasItems("createbigcannons:molten_bronze_bucket"));
                criteriaBuilder.add("molten_cast_iron_bucket", TRIGGER.hasItems("createbigcannons:molten_cast_iron_bucket"));

                // Vegan Delight
                criteriaBuilder.add("applesauce_bucket", TRIGGER.hasItems("vegandelight:applesauce_bucket"));
                criteriaBuilder.add("soymilk_bucket", TRIGGER.hasItems("vegandelight:soymilk_bucket"));

                // Create Dreams & Desires
                criteriaBuilder.add("shimmer_bucket", TRIGGER.hasItems("create_dd:shimmer_bucket"));
                criteriaBuilder.add("sap_bucket", TRIGGER.hasItems("create_dd:sap_bucket"));
                criteriaBuilder.add("chromatic_waste_bucket", TRIGGER.hasItems("create_dd:chromatic_waste_bucket"));
                criteriaBuilder.add("chocolate_milkshake_bucket", TRIGGER.hasItems("create_dd:chocolate_milkshake_bucket"));
                criteriaBuilder.add("hot_chocolate_bucket", TRIGGER.hasItems("create_dd:hot_chocolate_bucket"));
                criteriaBuilder.add("caramel_milkshake_bucket", TRIGGER.hasItems("create_dd:caramel_milkshake_bucket"));
                criteriaBuilder.add("caramel_bucket", TRIGGER.hasItems("create_dd:caramel_bucket"));
                criteriaBuilder.add("glowberry_milkshake_bucket", TRIGGER.hasItems("create_dd:glowberry_milkshake_bucket"));
                criteriaBuilder.add("glowberry_bucket", TRIGGER.hasItems("create_dd:glowberry_bucket"));
                criteriaBuilder.add("strawberry_milkshake_bucket", TRIGGER.hasItems("create_dd:strawberry_milkshake_bucket"));
                criteriaBuilder.add("strawberry_bucket", TRIGGER.hasItems("create_dd:strawberry_bucket"));
                criteriaBuilder.add("vanilla_milkshake_bucket", TRIGGER.hasItems("create_dd:vanilla_milkshake_bucket"));
                criteriaBuilder.add("vanilla_bucket", TRIGGER.hasItems("create_dd:vanilla_bucket"));
                criteriaBuilder.add("cream_bucket", TRIGGER.hasItems("create_dd:cream_bucket"));
                criteriaBuilder.add("condense_milk_bucket", TRIGGER.hasItems("create_dd:condense_milk_bucket"));

                // Create Things and Misc
                criteriaBuilder.add("slime_bucket", TRIGGER.hasItems("create_things_and_misc:slime_bucket"));
            });
    });

    const backpackCollector = templateCollector.addChild("backpack_collector", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("travelersbackpack:standard");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.backpack_collector.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.backpack_collector.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("standard_backpack", TRIGGER.hasItems("travelersbackpack:standard"));
                criteriaBuilder.add("bat_backpack", TRIGGER.hasItems("travelersbackpack:bat"));
                criteriaBuilder.add("bee_backpack", TRIGGER.hasItems("travelersbackpack:bee"));
                criteriaBuilder.add("blaze_backpack", TRIGGER.hasItems("travelersbackpack:blaze"));
                criteriaBuilder.add("chicken_backpack", TRIGGER.hasItems("travelersbackpack:chicken"));
                criteriaBuilder.add("cow_backpack", TRIGGER.hasItems("travelersbackpack:cow"));
                criteriaBuilder.add("creeper_backpack", TRIGGER.hasItems("travelersbackpack:creeper"));
                criteriaBuilder.add("dragon_backpack", TRIGGER.hasItems("travelersbackpack:dragon"));
                criteriaBuilder.add("enderman_backpack", TRIGGER.hasItems("travelersbackpack:enderman"));
                criteriaBuilder.add("ghast_backpack", TRIGGER.hasItems("travelersbackpack:ghast"));
                criteriaBuilder.add("iron_golem_backpack", TRIGGER.hasItems("travelersbackpack:iron_golem"));
                criteriaBuilder.add("magma_cube_backpack", TRIGGER.hasItems("travelersbackpack:magma_cube"));
                criteriaBuilder.add("ocelot_backpack", TRIGGER.hasItems("travelersbackpack:ocelot"));
                criteriaBuilder.add("pig_backpack", TRIGGER.hasItems("travelersbackpack:pig"));
                criteriaBuilder.add("sheep_backpack", TRIGGER.hasItems("travelersbackpack:sheep"));
                criteriaBuilder.add("skeleton_backpack", TRIGGER.hasItems("travelersbackpack:skeleton"));
                criteriaBuilder.add("spider_backpack", TRIGGER.hasItems("travelersbackpack:spider"));
                criteriaBuilder.add("squid_backpack", TRIGGER.hasItems("travelersbackpack:squid"));
                criteriaBuilder.add("villager_backpack", TRIGGER.hasItems("travelersbackpack:villager"));
                criteriaBuilder.add("wolf_backpack", TRIGGER.hasItems("travelersbackpack:wolf"));
                criteriaBuilder.add("cactus_backpack", TRIGGER.hasItems("travelersbackpack:cactus"));
                criteriaBuilder.add("cake_backpack", TRIGGER.hasItems("travelersbackpack:cake"));
                criteriaBuilder.add("coal_backpack", TRIGGER.hasItems("travelersbackpack:coal"));
                criteriaBuilder.add("diamond_backpack", TRIGGER.hasItems("travelersbackpack:diamond"));
                criteriaBuilder.add("emerald_backpack", TRIGGER.hasItems("travelersbackpack:emerald"));
                criteriaBuilder.add("end_backpack", TRIGGER.hasItems("travelersbackpack:end"));
                criteriaBuilder.add("hay_backpack", TRIGGER.hasItems("travelersbackpack:hay"));
                criteriaBuilder.add("lapis_backpack", TRIGGER.hasItems("travelersbackpack:lapis"));
                criteriaBuilder.add("melon_backpack", TRIGGER.hasItems("travelersbackpack:melon"));
                criteriaBuilder.add("nether_backpack", TRIGGER.hasItems("travelersbackpack:nether"));
                criteriaBuilder.add("redstone_backpack", TRIGGER.hasItems("travelersbackpack:redstone"));
                criteriaBuilder.add("snow_backpack", TRIGGER.hasItems("travelersbackpack:snow"));
                criteriaBuilder.add("sponge_backpack", TRIGGER.hasItems("travelersbackpack:sponge"));
                criteriaBuilder.add("wither_backpack", TRIGGER.hasItems("travelersbackpack:wither"));
                criteriaBuilder.add("bookshelf_backpack", TRIGGER.hasItems("travelersbackpack:bookshelf"));

                criteriaBuilder.add("netherite_backpack", TRIGGER.hasItems("travelersbackpack:netherite"));
                criteriaBuilder.add("gold_backpack", TRIGGER.hasItems("travelersbackpack:gold"));
                criteriaBuilder.add("iron_backpack", TRIGGER.hasItems("travelersbackpack:iron"));
                criteriaBuilder.add("quartz_backpack", TRIGGER.hasItems("travelersbackpack:quartz"));
                criteriaBuilder.add("sandstone_backpack", TRIGGER.hasItems("travelersbackpack:sandstone"));
                criteriaBuilder.add("pumpkin_backpack", TRIGGER.hasItems("travelersbackpack:pumpkin"));
                criteriaBuilder.add("fox_backpack", TRIGGER.hasItems("travelersbackpack:fox"));
                criteriaBuilder.add("horse_backpack", TRIGGER.hasItems("travelersbackpack:horse"));

            })
    });

    // TODO: afk_master Be AFK for 4h
    /*
    const afkMaster = islandHopping.addChild("afk_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:clock");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.afk_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.afk_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    */

    // ============================================================================
    // AGRICULTURE & RESOURCE PRODUCTION BRANCH
    // ============================================================================

    //! Fix currently already when right clicking spawner
    const mechanicalSpawner = cl5extra.addChild("mechanical_spawner", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_mechanical_spawner:mechanical_spawner");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.mechanical_spawner.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.mechanical_spawner.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "mechanical_spawner", TRIGGER.custom("minecraft:mechanical_spawner_trigger")
                )
            })
            .requireParentDone();
    });


    // TODO: spawner_plus Fully autonomous Mechanical Spawner for every mob
    /*
    const spawnerPlus = mechanicalSpawner.addChild("spawner_plus", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_mechanical_spawner:mechanical_spawner");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.spawner_plus.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.spawner_plus.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });
    */
    const giantVault = cl5extra.addChild("giant_vault", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:item_vault");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.giant_vault.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.giant_vault.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "giant_vault", TRIGGER.custom("minecraft:giant_vault_trigger")
                );
            });
    });

    const giantTank = giantVault.addChild("giant_tank", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:fluid_tank");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.giant_tank.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.giant_tank.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "giant_tank", TRIGGER.custom("minecraft:giant_tank_trigger")
                );
            });
    });

    const villagerTrade = cl5extra.addChild("villager_trade", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:emerald");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.villager_trade.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.villager_trade.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("trade_armorer",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:armorer\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_butcher",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:butcher\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_cartographer",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:cartographer\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_cleric",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:cleric\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_farmer",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:farmer\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_fisherman",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:fisherman\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_fletcher",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:fletcher\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_leatherworker",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:leatherworker\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_librarian",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:librarian\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_mason",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:mason\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_shepherd",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:shepherd\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_toolsmith",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:toolsmith\"}}");
                            }
                        )
                    )
                );
                criteriaBuilder.add("trade_weaponsmith",
                    TRIGGER.villagerTrade(triggerBuilder =>
                        triggerBuilder.setVillager(
                            villagerBuilder => {
                                villagerBuilder.of("minecraft:villager");
                                villagerBuilder.setNbt("{VillagerData:{profession:\"minecraft:weaponsmith\"}}");
                            }
                        )
                    )
                );
            })
            .requireParentDone();
    });

    const printedKnowledge = villagerTrade.addChild("printed_knowledge", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:book");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.printed_knowledge.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.printed_knowledge.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("printed_knowledge", TRIGGER.custom("minecraft:printed_knowledge_trigger"));
            })
            .requireParentDone();
    });
    const enchantLibrary = printedKnowledge.addChild("enchant_library", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:enchanted_book");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.enchant_library.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.enchant_library.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("got_any_protection_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:protection\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_fire_protection_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_protection\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_feather_falling_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:feather_falling\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_blast_protection_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:blast_protection\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_projectile_protection_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:projectile_protection\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_respiration_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:respiration\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_aqua_affinity_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:aqua_affinity\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_thorns_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:thorns\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_depth_strider_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:depth_strider\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_frost_walker_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:frost_walker\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_binding_curse_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:binding_curse\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_soul_speed_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:soul_speed\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_sharpness_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:sharpness\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_smite_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:smite\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_bane_of_arthropods_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:bane_of_arthropods\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_knockback_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:knockback\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_fire_aspect_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_aspect\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_looting_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:looting\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_sweeping_edge_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:sweeping\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_efficiency_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:efficiency\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_silk_touch_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:silk_touch\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_unbreaking_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_fortune_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:fortune\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_power_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:power\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_punch_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:punch\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_flame_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:flame\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_infinity_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:infinity\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_luck_of_the_sea_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:luck_of_the_sea\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_lure_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:lure\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_loyalty_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:loyalty\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_impaling_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:impaling\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_riptide_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:riptide\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_channeling_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:channeling\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_multishot_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:multishot\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_piercing_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:piercing\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_quick_charge_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:quick_charge\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_mending_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:mending\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_vanishing_curse_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:vanishing_curse\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_swift_sneak_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"minecraft:swift_sneak\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_backstabbing_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"farmersdelight:backstabbing\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_potato_recovery_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create:potato_recovery\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_capacity_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create:capacity\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_gravity_gun_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create_sa:gravity_gun\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_digging_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create_sa:digging\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_impact_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create_sa:impact\"}]}"
                            }
                        ]
                    }
                }));
                criteriaBuilder.add("got_any_hellfire_book", TRIGGER.fromJson({
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:enchanted_book",
                                "nbt": "{StoredEnchantments:[{id:\"create_sa:hellfire\"}]}"
                            }
                        ]
                    }
                }));
            })
            .requireParentDone();
    });
    const xpMillionaire = printedKnowledge.addChild("xp_millionaire", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:experience_bottle");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.xp_millionaire.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.xp_millionaire.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone()
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "high_xp_level",
                    TRIGGER.tick(triggerBuilder =>
                        //! Add minimum instead of exact level
                        triggerBuilder.setNbt("{XpLevel:500}")
                    )
                );
            });
    });

    // ============================================================================
    // ULTIMATE CHALLENGE BRANCH - Boss & Endgame Content
    // ============================================================================

    // TODO: wither_hunter Have a fully automatic wither skeleton farm
    const witherHunter = mechanicalSpawner.addChild("wither_hunter", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:wither_skeleton_skull");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.wither_hunter.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.wither_hunter.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("wither_heads", TRIGGER.hasItems(
                    itemBuilder => {
                        itemBuilder.add("minecraft:wither_skeleton_skull", 12);
                    }
                ));
            })
            .requireParentDone();
    });

    const dragonDominator = witherHunter.addChild("dragon_dominator", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:dragon_head");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.dragon_dominator.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.dragon_dominator.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add("five_dragon_kills",
                    TRIGGER.tick(triggerBuilder => {
                        triggerBuilder.addStat("minecraft:ender_dragon", Stats.ENTITY_KILLED, { min: 5 });
                    })
                );
            })
            .requireParentDone();
    });
});
