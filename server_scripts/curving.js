//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

ServerEvents.recipes((event) => {
  event.custom({
    type: "vintageimprovements:curving",
    ingredients: [
      {
        item: "kubejs:netherrack_plate",
      },
    ],
    results: [
      {
        item: "kubejs:smithing_template",
      },
    ],
  });
  event.custom({
    type: "vintageimprovements:curving",
    ingredients: [
      {
        item: "vintageimprovements:cast_iron_sheet",
      },
    ],
    results: [
      {
        item: "kubejs:empty_can",
      },
    ],
  });
});
