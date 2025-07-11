StartupEvents.registry("fluid", (event) => {
  event
    .create("spawn_fluid_sheep")
    .thinTexture(0xececec)
    .bucketColor(0xececec)
    .displayName("Spawn Fluid Sheep")
    .noBlock();
  event
    .create("spawn_fluid_pig")
    .thinTexture(0xeea5a4)
    .bucketColor(0xeea5a4)
    .displayName("Spawn Fluid Pig")
    .noBlock();
  event
    .create("spawn_fluid_cow")
    .thinTexture(0x443626)
    .bucketColor(0x443626)
    .displayName("Spawn Fluid Cow")
    .noBlock();
  event
    .create("spawn_fluid_chicken")
    .thinTexture(0xe2e2e2)
    .bucketColor(0xe2e2e2)
    .displayName("Spawn Fluid Chicken")
    .noBlock();
  event
    .create("spawn_fluid_squid")
    .thinTexture(0x122737)
    .bucketColor(0x122737)
    .displayName("Spawn Fluid Squid")
    .noBlock();
  event
    .create("spawn_fluid_ghast")
    .thinTexture(0xf0f0f0)
    .bucketColor(0xf0f0f0)
    .displayName("Spawn Fluid Ghast")
    .noBlock();
  event
    .create("spawn_fluid_warden")
    .thinTexture(0x05625d)
    .bucketColor(0x05625d)
    .displayName("Spawn Fluid Warden")
    .noBlock();
  event
    .create("spawn_fluid_wither_skeleton")
    .thinTexture(0x343434)
    .bucketColor(0x343434)
    .displayName("Spawn Fluid Wither Skeleton")
    .noBlock();
  event
    .create("spawn_fluid_allay")
    .thinTexture(0x3de0f7)
    .bucketColor(0x3de0f7)
    .displayName("Spawn Fluid Allay")
    .noBlock();
  event
    .create("spawn_fluid_dolphin")
    .thinTexture(0xb0c4d9)
    .bucketColor(0xb0c4d9)
    .displayName("Spawn Fluid Dolphin")
    .noBlock();
  event
    .create("spawn_fluid_guardian")
    .thinTexture(0x6a9583)
    .bucketColor(0x6a9583)
    .displayName("Spawn Fluid Guardian")
    .noBlock();
  event
    .create("spawn_fluid_fox")
    .thinTexture(0xe27c21)
    .bucketColor(0xe27c21)
    .displayName("Spawn Fluid Fox")
    .noBlock();
  event
    .create("spawn_fluid_wolf")
    .thinTexture(0xd5d2d3)
    .bucketColor(0xd5d2d3)
    .displayName("Spawn Fluid Wolf")
    .noBlock();
  event
    .create("spawn_fluid_cat")
    .thinTexture(0xfbbe70)
    .bucketColor(0xfbbe70)
    .displayName("Spawn Fluid Cat")
    .noBlock();
  event
    .create("spawn_fluid_frog")
    .thinTexture(0xe3b373)
    .bucketColor(0xe3b373)
    .displayName("Spawn Fluid Frog")
    .noBlock();
  event
    .create("spawn_fluid_phantom")
    .thinTexture(0x415087)
    .bucketColor(0x415087)
    .displayName("Spawn Fluid Phantom")
    .noBlock();
  event
    .create("powder_snow")
    .thinTexture(0xbceded)
    .bucketColor(0xbceded)
    .displayName("Powder Snow")
    .noBlock();
  //.noBucket();
  event
    .create("molten_iron")
    .thickTexture(0xdc0000)
    .bucketColor(0xdc0000)
    .displayName("Molten Iron")
    .noBlock();
  event
    .create("redstone_fluid")
    .thickTexture(0x720600)
    .bucketColor(0x720600)
    .displayName("Redstone Fluid")
    .noBlock();
  event
    .create("bloodmoonshine_fluid")
    .thickTexture(0xee7b26)
    .bucketColor(0xee7b26)
    .displayName("Bloodmoonshine Fluid")
    .noBlock();
  event
    .create("boss_fluid")
    .thickTexture(0x8a00ff)
    .bucketColor(0x8a00ff)
    .displayName("Boss Fluid")
    .noBlock();
  event
    .create("better_shimmer_fluid")
    .stillTexture("kubejs:fluid/better_shimmer_still")
    .flowingTexture("kubejs:fluid/better_shimmer_flow")
    //.thickTexture(0x9065bf)
    //.bucketColor(0x9065bf)
    .displayName("Better Shimmer")
    .noBucket()
    .noBlock();
});
