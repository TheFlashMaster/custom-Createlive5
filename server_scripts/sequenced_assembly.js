//priority: 0
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  //! Custom Adv Wireless Terminal Recipe
  let wireless_terminal = "toms_storage:ts.wireless_terminal";
  event.recipes.create
    .sequenced_assembly("toms_storage:ts.adv_wireless_terminal", "toms_storage:ts.wireless_terminal", [
      event.recipes.createDeploying(wireless_terminal, [
        wireless_terminal,
        "minecraft:netherite_upgrade_smithing_template",
      ]),
      event.recipes.createDeploying(wireless_terminal, [
        wireless_terminal,
        "minecraft:netherite_ingot",
      ]),
      event.recipes.createFilling(wireless_terminal, [
        wireless_terminal,
        Fluid.of("kubejs:better_shimmer_fluid", 1000),
      ]),
    ])
    .transitionalItem(wireless_terminal)
    .loops(1);

  let scrap_scrap = "kubejs:netherite_scrap_scrap";
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("minecraft:netherite_ingot").withChance(6.0),
        Item.of("5x createdeco:netherite_nugget").withChance(4.0),
      ],
      "minecraft:netherite_scrap",
      [
        event.recipes.create.filling(scrap_scrap, [Fluid.lava(), scrap_scrap]),
        event.recipes.createDeploying(scrap_scrap, [
          scrap_scrap,
          "minecraft:gold_nugget",
        ]),
        event.recipes.create.pressing(scrap_scrap, scrap_scrap),
        event.recipes.create.filling(scrap_scrap, [Fluid.water(), scrap_scrap]),
        event.custom({
          type: "vintageimprovements:polishing",
          speed_limits: 1,
          ingredients: [
            {
              item: scrap_scrap,
            },
          ],
          results: [
            {
              item: scrap_scrap,
            },
          ],
          processingTime: 20,
        }),
      ]
    )
    .transitionalItem(scrap_scrap)
    .loops(3);

  let xp_sheet = "create_things_and_misc:experience_sheet";
  event.recipes.create
    .sequenced_assembly(
      "create_things_and_misc:mending_rune",
      "create_things_and_misc:experience_sheet",
      [
        event.recipes.createDeploying(xp_sheet, [
          xp_sheet,
          "create_things_and_misc:rose_quartz_sheet",
        ]),
        event.recipes.createDeploying(xp_sheet, [
          xp_sheet,
          "create_dd:experience_mass",
        ]),
        event.recipes.createDeploying(xp_sheet, [
          xp_sheet,
          "minecraft:emerald",
        ]),
      ]
    )
    .transitionalItem(xp_sheet)
    .loops(8);

  /*
  let deepslate = "minecraft:deepslate_tiles";
  event.recipes.create
    .sequenced_assembly(
      "create_new_age:magnetite_block",
      "minecraft:deepslate_tiles",
      [
        event.recipes.createDeploying(deepslate, [
          deepslate,
          "create_dd:steel_sheet",
        ]),
        event.recipes.create.pressing(deepslate, deepslate),
      ]
    )
    .transitionalItem(deepslate)
    .loops(4);

*/

  let undestructable_scale = "createdeco:netherite_sheet";
  event.recipes.create
    .sequenced_assembly(
      "kubejs:undestructable_scale",
      "createdeco:netherite_sheet",
      [
        event.recipes.createDeploying(undestructable_scale, [
          undestructable_scale,
          "create_dd:industrial_iron_ingot",
        ]),
        event.recipes.create.pressing(
          undestructable_scale,
          undestructable_scale
        ),
        event.recipes.createDeploying(undestructable_scale, [
          undestructable_scale,
          "create_dd:bronze_ingot",
        ]),
        event.recipes.create.pressing(
          undestructable_scale,
          undestructable_scale
        ),
      ]
    )
    .transitionalItem(undestructable_scale)
    .loops(5);

  let shiny_scale = "create_dd:blaze_gold_sheet";
  event.recipes.create
    .sequenced_assembly("kubejs:shiny_scale", "create_dd:blaze_gold_sheet", [
      event.recipes.createDeploying(shiny_scale, [
        shiny_scale,
        "minecraft:gold_ingot",
      ]),
      event.recipes.create.pressing(shiny_scale, shiny_scale),
      event.recipes.createDeploying(shiny_scale, [
        shiny_scale,
        "create:brass_ingot",
      ]),
      event.recipes.create.pressing(shiny_scale, shiny_scale),
    ])
    .transitionalItem(shiny_scale)
    .loops(3);

  let bread = "minecraft:bread";
  event.recipes.create
    .sequenced_assembly("farmersdelight:hamburger", "minecraft:bread", [
      event.recipes.createDeploying(bread, [
        bread,
        ["farmersdelight:beef_patty", "vegandelight:tofu_patty"],
      ]),
      event.recipes.createDeploying(bread, [bread, "#forge:salad_ingredients"]),
      event.recipes.createDeploying(bread, [bread, "farmersdelight:tomato"]),
      event.recipes.createDeploying(bread, [bread, "farmersdelight:onion"]),
    ])
    .transitionalItem(bread)
    .loops(1);

  let bun = "kubejs:burger_bun";
  event.recipes.create
    .sequenced_assembly("kubejs:burgerpommes", "kubejs:burger_bun", [
      event.recipes.createDeploying(bun, [
        bun,
        ["farmersdelight:beef_patty", "vegandelight:tofu_patty"],
      ]),
      event.recipes.createDeploying(bun, [bun, "create_bic_bit:fries"]),

      event.recipes.createFilling(bun, [
        bun,
        Fluid.of("create_bic_bit:ketchup", 250),
      ]),
      event.recipes.createFilling(bun, [
        bun,
        Fluid.of("create_bic_bit:mayonnaise", 250),
      ]),
      event.recipes.createDeploying(bun, [bun, "kubejs:burger_bun"]),
    ])
    .transitionalItem(bun)
    .loops(1);

  let can = "kubejs:empty_can";
  event.recipes.create
    .sequenced_assembly("kubejs:labeled_can", "kubejs:empty_can", [
      event.recipes.createDeploying(can, [can, "handcrafted:orange_sheet"]),
      event.recipes.createDeploying(can, [can, "minecraft:green_dye"]),
    ])
    .transitionalItem(can)
    .loops(1);

  let ravioli = "kubejs:dough_cutout";
  event.recipes.create
    .sequenced_assembly("kubejs:ravioli", "kubejs:dough_cutout", [
      event.recipes.createDeploying(ravioli, [
        ravioli,
        ["farmersdelight:minced_beef", "vegandelight:minced_tofu"],
      ]),
      event.recipes.createDeploying(ravioli, [ravioli, "kubejs:dough_cutout"]),
    ])
    .transitionalItem(ravioli)
    .loops(1);

  let labeled_can = "kubejs:labeled_can";
  event.recipes.create
    .sequenced_assembly("kubejs:ravioli_can", "kubejs:labeled_can", [
      event.recipes.createDeploying(labeled_can, [
        labeled_can,
        "kubejs:ravioli",
      ]),
      event.recipes.createFilling(labeled_can, [
        labeled_can,
        Fluid.of("create_central_kitchen:tomato_sauce", 50),
      ]),
    ])
    .transitionalItem(labeled_can)
    .loops(4);
    //! Removed old crafting for crafting terminal
/*  let terminal = "toms_storage:ts.storage_terminal";
  event.recipes.create
    .sequenced_assembly(
      "toms_storage:ts.crafting_terminal",
      "toms_storage:ts.storage_terminal",
      [
        event.recipes.createDeploying(terminal, [
          terminal,
          "minecraft:netherite_upgrade_smithing_template",
        ]),
        event.recipes.createDeploying(terminal, [
          terminal,
          "travelersbackpack:crafting_upgrade",
        ]),
      ]
    )
    .transitionalItem(terminal)
    .loops(1); */

  let compound = "create_dd:compound_base";
  event.recipes.create
    .sequenced_assembly(
      "create_dd:fallen_stargaze_singularity",
      "create_dd:compound_base",
      [
        event.recipes.createDeploying(compound, [
          compound,
          "create_dd:refined_radiance",
        ]),
        event.recipes.createDeploying(compound, [
          compound,
          "create_dd:shadow_steel",
        ]),
        event.recipes.createDeploying(compound, [
          compound,
          "create_dd:blaze_gold",
        ]),
        event.recipes.createDeploying(compound, [
          compound,
          "create_dd:mithril_ingot",
        ]),
        event.recipes.createDeploying(compound, [
          compound,
          "create_dd:experience_mass",
        ]),
        event.recipes.createFilling(compound, [
          compound,
          Fluid.of("kubejs:better_shimmer_fluid", 1000),
        ]),
      ]
    )
    .transitionalItem(compound)
    .loops(1);
});
