JEIEvents.information((event) => {
  //!Custom JEI information
  event.addItem("create_power_loader:empty_andesite_chunk_loader", "Look at the Shop at Spawn");
  event.addItem("create_power_loader:empty_brass_chunk_loader", "Look at the Shop at Spawn");

  event.addItem("minecraft:echo_shard", "§oMaybe a Warden will drop it?");
  event.addItem("minecraft:elytra", [
    "§oWait... there are no Dungeons?",
    "§oI should look, if the Ender Dragon has one!",
  ]);
  event.addItem("minecraft:nether_star", "Dropped by the Wither");
  event.addItem(
    "travelersbackpack:dragon",
    "Dropped rarely from the Enderdragon"
  );
  event.addItem("create_bic_bit:sunflower_seeds", [
    "A Sniffer can find it!",
    "It also grows when using bonemeal on grass.",
  ]);
  event.addItem(
    "minecraft:sunflower",
    "It grows when using bonemeal on grass."
  );
  event.addItem(
    "kubejs:lost_template",
    "You should be suspicious if you can gravel it out!"
  );
  event.addItem(
    "minecraft:eye_armor_trim_smithing_template",
    "A Dragon can drop it!"
  );
  event.addItem(
    "minecraft:silence_armor_trim_smithing_template",
    "A Warden can drop it!"
  );
  event.addItem(
    "minecraft:ward_armor_trim_smithing_template",
    "A Warden can drop it!"
  );

  event.addItem(
    [
      "minecraft:kelp",
      "minecraft:pitcher_pod",
      "minecraft:torchflower_seeds",
      "minecraft:oak_sapling",
      "minecraft:spruce_sapling",
      "minecraft:birch_sapling",
      "minecraft:jungle_sapling",
      "minecraft:acacia_sapling",
      "minecraft:dark_oak_sapling",
      "minecraft:cherry_sapling",
      "minecraft:pumpkin_seeds",
      "minecraft:melon_seeds",
      "minecraft:beetroot_seeds",
      "farmersdelight:cabbage_seeds",
      "farmersdelight:tomato_seeds",
      "create_dd:rubber_sapling",
      "minecraft:mangrove_propagule",
      "minecraft:cocoa_beans",
      "minecraft:sea_pickle",
      "minecraft:sweet_berries",
      "vegandelight:soybean",
      "minecraft:bamboo",
      "farmersdelight:wild_rice",
      "farmersdelight:onion",
      "minecraft:turtle_egg",
    ],
    "A Sniffer can find it!"
  );
});
