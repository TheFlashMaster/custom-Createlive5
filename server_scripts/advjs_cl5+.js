AdvJSEvents.advancement((event) => {
    const { CONDITION, PREDICATE, PROVIDER, TRIGGER } = event;
    //Root erstellen
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
    //Child Stress Unit Monitor
    cl5extra.addChild("stress_unit", (advBuilder) => {
        advBuilder
            .display((displayBuilder) => {
                displayBuilder.setIcon("create:stressometer");
                displayBuilder.setTitle({ translate: 'cl5.advjs.stress.stress_unit.title' });
                displayBuilder.setDescription({ translate: 'cl5.advjs.stress.stress_unit.description' });
                displayBuilder.setHidden(false);
                displayBuilder.setFrameType("goal");
            })
            .criteria((criteriaBuilder) => {
                criteriaBuilder.add(
                    "stress_unit_trigger",
                    TRIGGER.custom("minecraft:stress_unit_trigger")
                );
            })
            .requireParentDone();
    });
});