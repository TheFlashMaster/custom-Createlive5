LevelEvents.loaded((event) => {
  event.server.runCommandSilent(`skyblock manage teams clear`);
  event.server.runCommandSilent(`gamerule doFireTick false`);
});
