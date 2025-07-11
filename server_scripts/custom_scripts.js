//priority: 1
PlayerEvents.tick((event) => {
  if (event.player.age % 20 != 0) return;
  const { player } = event;
  if (
    (player.headArmorItem == "kubejs:creator_helmet" &&
      player.chestArmorItem == "kubejs:creator_chestplate" &&
      player.legsArmorItem == "kubejs:creator_leggings" &&
      player.feetArmorItem == "kubejs:creator_boots") ||
    player.isCreative() ||
    player.isSpectator()
  ) {
    player.abilities.mayfly = true;
  } else {
    player.abilities.mayfly = false;
    player.abilities.flying = false;
  }
  player.onUpdateAbilities();
});
