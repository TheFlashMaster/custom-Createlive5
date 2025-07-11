/*PlayerEvents.chat(event => {
    const player = event.player;
    const server = event.server;

  if (event.message.startsWith('liege')) {

//    player.tell("test")
    server.runCommand(`title The_FlashMaster subtitle {"text":"BITTE schlafen","color":"gold"}`);
    event.cancel()
  }
})*/

const message = ["",{"text":"Serverinformationen \u2013 Create Live 5","bold":true,"underlined":true},{"text":"\n\n"},{"text":"Chunkloader & Rezeptänderungen","bold":true},{"text":"\n\nChunkloader sind im Shop erhältlich. Es gibt nur ein begrenztes Sortiment.\n\nEinige Rezepte wurden im Vergleich zum Originalmodpack angepasst. Schau in JEI für alle neuen Crafting-Details!\n\nDu willst dieselben Einstellungen im Singleplayer? Lade dir einfach die KubeJS-Konfigurationsdatei vom Server herunter und integriere sie lokal.\n\nWenn du Hilfe brauchst kontaktiere @BlockworldHD oder @The_FlashMaster.\n\nViel Spaß beim Spielen\n"}]
ServerEvents.commandRegistry((event) => {
  //command registry event
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    //register a new command
    Commands.literal("info").executes((ctx) => {
      const player = ctx.source.getEntity();
      //run the command
      //console.info();

      player.tell(
        message
      );
      return 0; // always return something
    })
  );
});

ServerEvents.commandRegistry((event) => {
  //command registry event
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    //register a new command
    Commands.literal("reset_shredder_points").executes((ctx) => {
      const player = ctx.source.getEntity();
      //run the command
      //console.info();

      AmazingTrading.setPlayerRP(player, 0);
      player.tell(
        "Deine Punkte wurden erfolgreich resettet. Logge dich erneut ein, damit deine Punkte korrekt angezeigt werden!"
      );
      return 0; // always return something
    })
  );
});

