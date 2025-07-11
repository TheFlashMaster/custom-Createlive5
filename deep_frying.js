//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "create_bic_bit:deep_frying",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:bamboo",
      },
      {
        amount: 125,
        fluid: "create_dd:caramel",
      },
    ],
    results: [
      {
        item: "minecraft:sugar_cane",
      },
    ],
  });
  event.custom({
    type: "create_bic_bit:deep_frying",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:brick",
      },
      {
        amount: 100,
        fluid: "kubejs:molten_iron",
      },
    ],
    results: [
      {
        item: "minecraft:copper_ingot",
      },
    ],
  });
  event.custom({
    type: "create_bic_bit:deep_frying",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:prismarine",
      },
      {
        amount: 50,
        fluid: "kubejs:molten_iron",
      },
    ],
    results: [
      {
        item: "create:veridium",
      },
    ],
  });
  event.custom({
    type: "create_bic_bit:deep_frying",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "create_things_and_misc:powdered_obsidian_block",
      },
      {
        amount: 200,
        fluid: "kubejs:molten_iron",
      },
    ],
    results: [
      {
        item: "create_dd:potassic",
      },
    ],
  });
});
