/*
 * ============================================================================
 * ADVANCEMENT IMPLEMENTATION TODO SUMMARY
 * ============================================================================
 * 
 * This file contains advancement definitions that require implementation of 
 * criteria triggers to function properly. Below is a summary of required implementations:
 * 
 * IMMEDIATE ACTIONS NEEDED:
 * 1. Review custom_advancement_triggers.js to ensure custom triggers are registered
 * 2. Add missing criteria to advancements that currently have no criteria defined
 * 3. Implement custom triggers for complex conditions (stress levels, distances, etc.)
 * 4. Test advancement progression in-game
 * 
 * CUSTOM TRIGGERS TO IMPLEMENT:
 * - stress_unit_trigger: Monitor stress capacity levels ✓ IMPLEMENTED
 * - kinetic_impact: Detect high RPM kinetic networks ✓ IMPLEMENTED (uses stress_unit_trigger)
 * - distance_traveled: Track train/transportation distances
 * - fluid_capacity: Monitor fluid tank sizes
 * - spawner_count: Track mechanical spawner quantities
 * - chunk_loading: Monitor chunk loader usage
 * - automation_detection: Detect automated production systems
 * - long_conveyor_trigger: Detect long belt systems ✓ IMPLEMENTED (uses stress_unit_trigger)
 * 
 * CATEGORIES REQUIRING CRITERIA:
 * - Technology Branch: Most advancements need stress/power/automation detection
 * - Exploration Branch: Need travel distance, elevation, and area coverage detection
 * - Agriculture Branch: Need production quantity and automation detection
 * - Challenge Branch: Need boss kills, high-level achievements
 * 
 * NOTE: Search for "TODO:" comments throughout this file for specific implementation details
 * ============================================================================
 */

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

    // TODO: steam_giant - Build large steam engine setup
    // Implementation: Add criteria to detect steam engines with high capacity
    // Suggested: TRIGGER.hasItems(["create:steam_engine"]) + stress capacity check
    // Branch 1A: Steam Power Chain
    const steamGiant = stressBasic.addChild("steam_giant", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:steam_engine");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.steam_giant.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.steam_giant.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
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

    // TODO: machine_park - Build variety of Create machines
    // Implementation: Add criteria to detect multiple different Create machines
    // Suggested: TRIGGER.hasItems with array of mechanical machines
    // Branch 1B: Automation & Manufacturing Chain
    const machinePark = stressBasic.addChild("machine_park", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:mechanical_press");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.machine_park.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.machine_park.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
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

    // TODO: auto_mechanisms - Automate precision mechanism production
    // Implementation: Add criteria to detect automated precision mechanism crafting
    // Suggested: Custom trigger for automated production or sequence assembly
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


    // TODO: wireless_connected - Establish wireless connections
    // Implementation: Add criteria to detect wireless connector usage
    // Suggested: TRIGGER.hasItems(["create:wireless_connector"]) or custom connection trigger
    const wirelessConnected = wirelessTerminal.addChild("wireless_connected", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("toms_storage:ts.adv_wireless_terminal");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.wireless_connected.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.wireless_connected.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });

    // TODO: cross_dimensional - Connect across dimensions
    // Implementation: Add criteria to detect cross-dimensional connections
    // Suggested: Custom trigger for dimensional travel or ender eye usage
    const crossDimensional = wirelessConnected.addChild("cross_dimensional", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:ender_eye");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.cross_dimensional.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.cross_dimensional.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // TODO: long_train_ride - Build and operate trains
    // Implementation: Add criteria to detect train travel distance
    // Suggested: Custom trigger for train distance traveled or track length
    // Branch 2B: Transportation Chain
    const longTrainRide = longConveyors.addChild("long_train_ride", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:train_controls");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.long_train_ride.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.long_train_ride.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });

    // TODO: reverse_gear - Master train controls
    // Implementation: Add criteria to detect advanced train maneuvering
    // Suggested: Custom trigger for reversing trains or complex scheduling
    const reverseGear = longTrainRide.addChild("reverse_gear", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:train_controls");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.reverse_gear.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.reverse_gear.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
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

    // TODO: flamethrower_expert - Use flamethrower effectively
    // Implementation: Add criteria to detect flamethrower usage or entity kills
    // Suggested: TRIGGER.hasItems(["create_sa:flamethrower"]) + kill count trigger
    const flamethrowerExpert = exoskeleton.addChild("flamethrower_expert", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:flamethrower");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.flamethrower_expert.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.flamethrower_expert.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
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
                criteriaBuilder.add("drill_mined", TRIGGER.tick(triggerBuilder => triggerBuilder.addStat("create_sa:portable_drill", Stats.ITEM_USED, { min: 10000 })));
            });
    });

    // TODO: chunk_loaded - Set up chunk loading
    // Implementation: Add criteria to detect chunk loader placement
    // Suggested: TRIGGER.hasItems(["chunkloaders:chunk_loader"]) or placement trigger
    // Branch 3B: Infrastructure Management Chain
    const chunkLoaded = terminalMaster.addChild("chunk_loaded", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("chunkloaders:chunk_loader");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.chunk_loaded.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.chunk_loaded.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // TODO: chunk_master - Master chunk loading systems
    // Implementation: Add criteria to detect multiple chunk loaders or large loaded areas
    // Suggested: Custom trigger for chunk loader count or loaded chunk area
    const chunkMaster = chunkLoaded.addChild("chunk_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("chunkloaders:chunk_loader");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.chunk_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.chunk_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // TODO: bad_luck - Overcome difficult challenges
    // Implementation: Add criteria to detect specific challenging situations
    // Suggested: Custom trigger for deaths, failures, or specific events
    // Challenge Branch: Difficulty spikes
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

    // TODO: island_hopping - Explore multiple locations
    // Implementation: Add criteria to detect travel distance or biome visits
    // Suggested: Custom trigger for distance traveled or dimension visits
    // Entry: Basic exploration and mobility
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

    // TODO: caves_cliffs - Explore vertical terrain
    // Implementation: Add criteria to detect mining or elevation changes
    // Suggested: TRIGGER.hasItems(["create:mechanical_piston"]) + position/mining triggers
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

    // TODO: area_expansion - Expand base or territory
    // Implementation: Add criteria to detect large building projects or area claims
    // Suggested: Custom trigger for placed blocks count or area coverage
    // Branch 4A: Territory & Construction
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

    // TODO: blueprint_master - Master Create schematic system
    // Implementation: Add criteria to detect schematic usage and large builds
    // Suggested: TRIGGER.hasItems(["create:schematic"]) + schematic usage trigger
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

    const backpackCollector = backpackEnthusiast.addChild("backpack_collector", (advBuilder) => {
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

    // TODO: bucket_collector - Collect various fluid buckets
    // Implementation: Add criteria to detect multiple bucket types
    // Suggested: TRIGGER.hasItems with array of filled buckets
    const bucketCollector = backpackCollector.addChild("bucket_collector", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:bucket");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.bucket_collector.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.bucket_collector.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    const templateCollector = bucketCollector.addChild("template_collector", (advBuilder) => {
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

    // TODO: afk_master - Master AFK automation
    // Implementation: Add criteria to detect long idle times with production
    // Suggested: Custom trigger for time-based automation or idle production
    // Convergence: Long-term exploration projects (requires equipment from tech tree)
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

    // ============================================================================
    // AGRICULTURE & RESOURCE PRODUCTION BRANCH
    // ============================================================================

    // TODO: mechanical_spawner - Build mob farming systems
    // Implementation: Add criteria to detect mechanical spawner usage
    // Suggested: TRIGGER.hasItems(["create:mechanical_spawner"]) or mob kill count trigger
    // Entry: Automated resource generation
    const mechanicalSpawner = cl5extra.addChild("mechanical_spawner", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:mechanical_spawner");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.mechanical_spawner.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.mechanical_spawner.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // TODO: spawner_plus - Advanced spawner configurations
    // Implementation: Add criteria to detect multiple spawners or high spawn rates
    // Suggested: Custom trigger for spawner count or mob generation rate
    const spawnerPlus = mechanicalSpawner.addChild("spawner_plus", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:mechanical_spawner");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.spawner_plus.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.spawner_plus.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // TODO: fluid_farm - Set up fluid production systems
    // Implementation: Add criteria to detect fluid tanks and fluid generation
    // Suggested: TRIGGER.hasItems(["create:fluid_tank"]) + fluid amount trigger
    // Branch 5A: Fluid & Storage Systems
    const fluidFarm = mechanicalSpawner.addChild("fluid_farm", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:fluid_tank");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.fluid_farm.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.fluid_farm.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // TODO: giant_tank - Build massive fluid storage
    // Implementation: Add criteria to detect large fluid tank structures
    // Suggested: Custom trigger for fluid tank multiblock size or capacity
    const giantTank = fluidFarm.addChild("giant_tank", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:fluid_tank");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.giant_tank.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.giant_tank.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // TODO: giant_vault - Build massive item storage
    // Implementation: Add criteria to detect large item vault structures
    // Suggested: Custom trigger for item vault multiblock size or capacity
    const giantVault = giantTank.addChild("giant_vault", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:item_vault");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.giant_vault.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.giant_vault.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // TODO: villager_trade - Establish villager trading systems
    // Implementation: Add criteria to detect emerald accumulation or villager trading
    // Suggested: TRIGGER.hasItems(["minecraft:emerald"]) with quantity threshold + trading trigger
    // Branch 5B: Trading & Knowledge Systems
    const villagerTrade = cl5extra.addChild("villager_trade", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:emerald");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.villager_trade.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.villager_trade.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // TODO: printed_knowledge - Collect books and knowledge
    // Implementation: Add criteria to detect book collection or library building
    // Suggested: TRIGGER.hasItems(["minecraft:book"]) with quantity or enchanted book trigger
    const printedKnowledge = villagerTrade.addChild("printed_knowledge", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:book");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.printed_knowledge.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.printed_knowledge.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });
    // TODO: Fix
    const enchantLibrary = printedKnowledge.addChild("enchant_library", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:enchanted_book");
                displayBuilder.setTitle({ translate: 'cl5.advjs.agri.enchant_library.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.agri.enchant_library.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    const xpMillionaire = enchantLibrary.addChild("xp_millionaire", (advBuilder) => {
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
                        triggerBuilder.setNbt("{XpLevel:100}")
                    )
                );
            });
    });

    // ============================================================================
    // ULTIMATE CHALLENGE BRANCH - Boss & Endgame Content
    // ============================================================================

    // TODO: wither_hunter - Defeat wither bosses
    // Implementation: Add criteria to detect wither kills or wither skulls
    // Suggested: TRIGGER.entityKilled("minecraft:wither") or TRIGGER.hasItems(["minecraft:wither_skeleton_skull"])
    // Entry: Combat preparation (requires personal equipment from tech branch)
    const witherHunter = mechanicalSpawner.addChild("wither_hunter", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:wither_skeleton_skull");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.wither_hunter.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.wither_hunter.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // TODO: dragon_dominator - Defeat the Ender Dragon
    // Implementation: Add criteria to detect ender dragon kill or dragon egg
    // Suggested: TRIGGER.entityKilled("minecraft:ender_dragon") or TRIGGER.hasItems(["minecraft:dragon_egg"])
    // Final Boss Challenge (requires infrastructure, exploration, and combat preparation)
    const dragonDominator = witherHunter.addChild("dragon_dominator", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:dragon_head");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.dragon_dominator.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.dragon_dominator.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });
});
