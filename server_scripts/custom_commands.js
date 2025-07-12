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

// Global variables for restart scheduling
let restartScheduled = false;
let restartCountdown = 0;
let countdownInterval = null;

ServerEvents.commandRegistry((event) => {
  //command registry event
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    //register a new command
    Commands.literal("restart")
      .then(Commands.argument("minutes", Arguments.INTEGER.create(1, 60)))
      .executes((ctx) => {
        const player = ctx.source.getEntity();
        const server = ctx.source.getServer();
        const minutes = Arguments.INTEGER.getResult(ctx, "minutes");
        
        // Check if player has permission (you can adjust this check)
        if (!player.hasPermissions(2)) {
          player.tell("§cDu hast keine Berechtigung für diesen Befehl!");
          return 0;
        }
        
        // If restart already scheduled, cancel it first
        if (restartScheduled && countdownInterval) {
          clearInterval(countdownInterval);
          server.tell("§6Geplanter Restart wurde abgebrochen!");
        }
        
        restartScheduled = true;
        restartCountdown = minutes * 60; // Convert to seconds
        
        // Announce restart
        server.tell(`§6§lServer Restart geplant in ${minutes} Minute(n)!`);
        server.tell("§eSpeichere deine Fortschritte und bereite dich vor!");
        
        // Start countdown
        countdownInterval = setInterval(() => {
          restartCountdown--;
          
          // Announce at specific intervals
          if (restartCountdown === 300) { // 5 minutes
            server.tell("§c§lServer Restart in 5 Minuten!");
            server.runCommand("title @a times 20 60 20");
            server.runCommand('title @a title {"text":"Server Restart","color":"red","bold":true}');
            server.runCommand('title @a subtitle {"text":"in 5 Minuten","color":"yellow"}');
          } else if (restartCountdown === 180) { // 3 minutes
            server.tell("§c§lServer Restart in 3 Minuten!");
            server.runCommand("title @a times 20 60 20");
            server.runCommand('title @a title {"text":"Server Restart","color":"red","bold":true}');
            server.runCommand('title @a subtitle {"text":"in 3 Minuten","color":"yellow"}');
          } else if (restartCountdown === 60) { // 1 minute
            server.tell("§4§lServer Restart in 1 Minute!");
            server.runCommand("title @a times 20 60 20");
            server.runCommand('title @a title {"text":"Server Restart","color":"dark_red","bold":true}');
            server.runCommand('title @a subtitle {"text":"in 1 Minute","color":"red"}');
          } else if (restartCountdown === 30) { // 30 seconds
            server.tell("§4§lServer Restart in 30 Sekunden!");
            server.runCommand("title @a times 20 60 20");
            server.runCommand('title @a title {"text":"Server Restart","color":"dark_red","bold":true}');
            server.runCommand('title @a subtitle {"text":"in 30 Sekunden","color":"red"}');
          } else if (restartCountdown <= 10 && restartCountdown > 0) { // Last 10 seconds
            server.tell(`§4§l${restartCountdown} Sekunde(n) bis zum Restart!`);
            server.runCommand("title @a times 10 20 10");
            server.runCommand(`title @a title {"text":"${restartCountdown}","color":"dark_red","bold":true}`);
            server.runCommand('title @a subtitle {"text":"Sekunden","color":"red"}');
          } else if (restartCountdown === 0) {
            // Restart the server
            server.tell("§4§lServer wird neu gestartet...");
            server.runCommand("title @a times 20 100 20");
            server.runCommand('title @a title {"text":"Restart","color":"dark_red","bold":true}');
            server.runCommand('title @a subtitle {"text":"Bis gleich!","color":"yellow"}');
            
            clearInterval(countdownInterval);
            restartScheduled = false;
            
            // Stop the server (this will trigger a restart if configured)
            setTimeout(() => {
              server.runCommand("stop");
            }, 3000); // Give 3 seconds for the message to display
          }
        }, 1000); // Update every second
        
        player.tell(`§aRestart geplant in ${minutes} Minute(n).`);
        return 1;
      })
  );
});

ServerEvents.commandRegistry((event) => {
  //command registry event
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    //register a new command
    Commands.literal("cancelrestart").executes((ctx) => {
      const player = ctx.source.getEntity();
      const server = ctx.source.getServer();
      
      // Check if player has permission
      if (!player.hasPermissions(2)) {
        player.tell("§cDu hast keine Berechtigung für diesen Befehl!");
        return 0;
      }
      
      if (restartScheduled && countdownInterval) {
        clearInterval(countdownInterval);
        restartScheduled = false;
        countdownInterval = null;
        
        server.tell("§a§lGeplanter Server Restart wurde abgebrochen!");
        server.runCommand("title @a times 20 60 20");
        server.runCommand('title @a title {"text":"Restart Abgebrochen","color":"green","bold":true}');
        server.runCommand('title @a subtitle {"text":"Weiterspielen!","color":"yellow"}');
        
        player.tell("§aRestart erfolgreich abgebrochen.");
        return 1;
      } else {
        player.tell("§cKein Restart geplant.");
        return 0;
      }
    })
  );
});

