(() => {
    ItemEvents.rightClicked(event => {
        if (event.item.id === 'toms_storage:ts.adv_wireless_terminal') {
            
            // Check if item has bind coordinates in NBT
            if (event.item.nbt && event.item.nbt.contains('BindX')) {
                let bindX = event.item.nbt.getInt('BindX');
                let bindY = event.item.nbt.getInt('BindY');
                let bindZ = event.item.nbt.getInt('BindZ');
                
                let playerX = event.player.x;
                let playerY = event.player.y;
                let playerZ = event.player.z;
                
                // Calculate distance
                let distance = Math.sqrt(
                    Math.pow(bindX - playerX, 2) + 
                    Math.pow(bindY - playerY, 2) + 
                    Math.pow(bindZ - playerZ, 2)
                );
                if (distance > 120) {
                    // Trigger custom advancement
                }

                if(event.item.nbt.contains('BindDim')) {
                    let bindDimension = event.item.nbt.getString('BindDim');
                    if( bindDimension === event.player.nbt.getString("Dimension")) {
                        return;
                    }
                    CustomTriggers.of("minecraft:cross_dimension").trigger(event.player);
                }
                else
                {
                }
            }
        }
    });
})();