/*PlayerEvents.chat(event => {
    const player = event.player;
    const server = event.server;

  if (event.message.startsWith('liege')) {

//    player.tell("test")
    server.runCommand(`title The_FlashMaster subtitle {"text":"BITTE schlafen","color":"gold"}`);
    event.cancel()
  }
})*/

//! Info Command for Server
const message = ["",{"text":"Create Live 5: Wichtige Infos","bold":true,"underlined":true},{"text":"\n\nChunkloader:","bold":true},{"text":" Im Shop erhältlich, aber mit begrenzter Auswahl.\n"},{"text":"Rezepte:","bold":true},{"text":" Einige wurden angepasst. Schau in JEI für Details!\n"},{"text":"Singleplayer:","bold":true},{"text":" Die KubeJS-Konfigurationsdateien mit denselben Einstellungen findest du hier: "},{"text":"https://github.com/TheFlashMaster/custom-CreateLive5","underlined":true,"clickEvent":{"action":"open_url","value":"https://github.com/TheFlashMaster/custom-CreateLive5"}},{"text":"\n"},{"text":"Hilfe:","bold":true},{"text":" Kontaktiere "},{"text":"@","underlined":true},{"text":"BlockworldHD ","underlined":true,"clickEvent":{"action":"suggest_command","value":"/tell BlockworldHD"}},{"text":"oder "},{"text":"@","underlined":true},{"text":"The_FlashMaster","underlined":true,"clickEvent":{"action":"suggest_command","value":"/tell The_FlashMaster"}},{"text":".\n"}]
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
//! Sheduled Restart Command for Server

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
      .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
      .executes((ctx) => {
        // Default to 5 minutes when no argument is provided
        const player = ctx.source.getEntity();
        const server = ctx.source.getServer();
        const minutes = 5;
        return scheduleRestart(player, server, minutes);
      })
  );
});

// Function to handle restart scheduling logic
function scheduleRestart(player, server, minutes) {
  if (restartScheduled) {
    player.tell("§cEin Restart ist bereits geplant. Verwende /cancelrestart um ihn abzubrechen.");
    return 0;
  }
  
  if (minutes <= 0 || minutes > 60) {
    player.tell("§cBitte gib eine gültige Zeit zwischen 1 und 60 Minuten an.");
    return 0;
  }
  
  restartScheduled = true;
  restartCountdown = minutes * 60; // Convert to seconds
  
  player.tell(`§aDu hast einen Server Restart in ${minutes} Minute(n) geplant.`);
  server.tell(`§6§lServer Restart geplant in ${minutes} Minute(n)!`);
  
  // Start countdown
  countdownInterval = setInterval(() => {
    restartCountdown--;
    
    // Announce at specific intervals
    const minutesLeft = Math.floor(restartCountdown / 60);
    const secondsLeft = restartCountdown % 60;
    
    if (restartCountdown === 300) { // 5 minutes
      server.tell("§c§lServer Restart in 5 Minuten!");
    } else if (restartCountdown === 180) { // 3 minutes
      server.tell("§c§lServer Restart in 3 Minuten!");
    } else if (restartCountdown === 60) { // 1 minute
      server.tell("§4§lServer Restart in 1 Minute!");
      server.runCommand("title @a times 20 60 20");
      server.runCommand('title @a title {"text":"Restart in 1 Minute","color":"dark_red","bold":true}');
    } else if (restartCountdown === 30) { // 30 seconds
      server.tell("§4§lServer Restart in 30 Sekunden!");
      server.runCommand("title @a times 20 60 20");
      server.runCommand('title @a title {"text":"Restart in 30 Sekunden","color":"dark_red","bold":true}');
    } else if (restartCountdown <= 10 && restartCountdown > 0) { // Final countdown
      server.tell(`§4§lServer Restart in ${restartCountdown} Sekunde(n)!`);
      server.runCommand("title @a times 10 20 10");
      server.runCommand(`title @a title {"text":"${restartCountdown}","color":"dark_red","bold":true}`);
    } else if (restartCountdown === 0) {
      // Execute restart
      clearInterval(countdownInterval);
      restartScheduled = false;
      countdownInterval = null;
      
      server.tell("§4§lServer wird jetzt neu gestartet!");
      server.runCommand("title @a times 20 60 20");
      server.runCommand('title @a title {"text":"Restart!","color":"dark_red","bold":true}');
      server.runCommand('title @a subtitle {"text":"Bis gleich...","color":"yellow"}');
      
      // Wait a moment then restart
      setTimeout(() => {
        server.runCommand("stop");
      }, 3000);
    }
  }, 1000);
  
  return 1;
}

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
        player.tell("§aRestart erfolgreich abgebrochen.");
        return 1;
      } else {
        player.tell("§cKein Restart geplant.");
        return 0;
      }
    })
  );
});
