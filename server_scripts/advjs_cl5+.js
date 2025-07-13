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

    // Entry point: Basic power understanding
    const highRpm = cl5extra.addChild("high_rpm", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:speedometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.high_rpm.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.high_rpm.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
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
                    TRIGGER.custom("minecraft:stress_unit_trigger")
                );
            })
    });

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
            .requireParentDone();
    });

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
            .requireParentDone();
    });

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

    // Convergence Point: Advanced Infrastructure (requires both power and automation)
    const massiveMachinery = cl5extra.addChild("massive_machinery", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:belt_connector");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.massive_machinery.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.massive_machinery.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    const longConveyors = massiveMachinery.addChild("long_conveyors", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:belt_connector");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.long_conveyors.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.long_conveyors.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });

    // Branch 2A: Network & Communication Chain
    const terminalMaster = massiveMachinery.addChild("terminal_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("createaddition:modular_accumulator");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.terminal_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.terminal_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    const wirelessConnected = terminalMaster.addChild("wireless_connected", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:wireless_connector");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.wireless_connected.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.wireless_connected.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
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
            .requireParentDone();
    });

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

    // Branch 2C: Advanced Manufacturing Chain
    const casingMaster = mechanismMaster.addChild("casing_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:andesite_casing");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.casing_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.casing_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });

    // Convergence Point: Creative Technology (requires infrastructure + network)
    const creativePower = casingMaster.addChild("creative_power", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:creative_motor");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.creative_power.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.creative_power.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // Branch 3A: Personal Equipment Chain
    const exoskeleton = massiveMachinery.addChild("exoskeleton", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:exoskeleton_chestplate");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.exoskeleton.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.exoskeleton.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

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

    const drillMaster = flamethrowerExpert.addChild("drill_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create_sa:drill_head");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.drill_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.drill_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

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

    const stressMaster = highStress.addChild("stress_master", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:stressometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.tech.stress_master.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.tech.stress_master.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("challenge");
            })
            .requireParentDone();
    });

    // ============================================================================
    // EXPLORATION & WORLD DEVELOPMENT BRANCH
    // ============================================================================

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

    const higherPossible = cavesCliffs.addChild("higher_possible", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:elytra");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.higher_possible.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.higher_possible.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .requireParentDone();
    });

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

    // Branch 4B: Inventory & Collection Systems
    const backpackEnthusiast = cl5extra.addChild("backpack_enthusiast", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("travelersbackpack:standard");
                displayBuilder.setTitle({ translate: 'cl5.advjs.explore.backpack_enthusiast.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.explore.backpack_enthusiast.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
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
            .requireParentDone();
    });

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
            .requireParentDone();
    });

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

    // Convergence: Ultimate resource management (requires both storage and knowledge)
    const xpMillionaire = enchantLibrary.addChild("xp_millionaire", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("minecraft:experience_bottle");
                displayBuilder.setTitle({ translate: 'cl5.advjs.challenge.xp_millionaire.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.challenge.xp_millionaire.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("task");
            })
            .requireParentDone();
    });

    // ============================================================================
    // ULTIMATE CHALLENGE BRANCH - Boss & Endgame Content
    // ============================================================================

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
