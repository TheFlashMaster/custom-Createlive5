//priority: 1
//Create Live 5 Custom Recipes
//Author: Blizzor

PlayerEvents.loggedIn((event) => {
    // Get the player object
    const player = event.player;
    const server = event.server;

    // Send a welcome message to the player
    server.runCommand(`title ${player.name.string} title {"text":"Welcome to the Server","color":"gold"}`);
    server.runCommand(`title ${player.name.string} subtitle {"text":"${player.name.string}!","color":"gold"}`);
    player.tell(["",{"text":"/info","clickEvent":{"action":"run_command","value":"/info"}},{"text":" für hilfreiche Informationen"}])
});

BlockEvents.broken((event) => {
  if (
    event.block.id == "create_dd:aethersite" ||
    event.block.id == "create_dd:potassic_cobble" ||
    event.block.id == "create_dd:gabbro" ||
    event.block.id == "create_dd:crimsite_cobble" ||
    event.block.id == "minecraft:dripstone_block" ||
    event.block.id == "create_dd:ochrum_cobble" ||
    event.block.id == "create_dd:veridium_cobble" ||
    event.block.id == "create_dd:asurine_cobble" ||
    event.block.id == "create:scorchia" ||
    event.block.id == "create:scoria" ||
    event.block.id == "minecraft:calcite" ||
    event.block.id == "create:limestone" ||
    event.block.id == "create_bic_bit:crystallised_oil"
  ) {
    event.player.tell("Blockdrop disabled. Reason: To easy ;)");
  }
});
/*
BlockEvents.rightClicked((event) => {
  if (event.item.id == "minecraft:sunflower") {
    event.player.tell("Oh no! It looks like you need to use Sunflower Seeds!");
    event.cancel();
  }
});
BlockEvents.rightClicked("minecraft:sunflower", (event) => {
  event.cancel();
});
*/
ServerEvents.tags("item", (event) => {
  event.add("createbigcannons:ingot_bronze", "create_dd:bronze_ingot");
  event.add("creategoggles:goggle", "kubejs:creator_helmet");
  event.add("forge:oil_seeds", "kubejs:crushed_soybean");
  event.add("forge:oil_seeds", "create_bic_bit:crushed_sunflower_seeds");
  event.add("forge:dead_coral_block", "minecraft:dead_tube_coral_block");
  event.add("forge:dead_coral_block", "minecraft:dead_brain_coral_block");
  event.add("forge:dead_coral_block", "minecraft:dead_bubble_coral_block");
  event.add("forge:dead_coral_block", "minecraft:dead_fire_coral_block");
  event.add("forge:dead_coral_block", "minecraft:dead_horn_coral_block");
});
