const STRESSOMETER_SU_NBT_KEY = 'Network.Capacity'; // Example: 'stressCapacity', 'networkStress', etc.
const REQUIRED_SU_FOR_ADVANCEMENT = 5000;

BlockEvents.rightClicked('create:stressometer', event => {
    if (!event.block.entity) return;

    const nbt = event.block.entity.getUpdateTag();
    const currentSU = nbt?.Network?.Capacity ?? 0; // Access nested NBT safely

    event.player.tell(Text.green(`Current Stress Unit (SU): ${currentSU}`));

    const advancementFlag = 'stress_unit_trigger';
    //const playerHasAchieved = event.player.persistentData.getBoolean(advancementFlag);  
    
    if (currentSU >= REQUIRED_SU_FOR_ADVANCEMENT ) {//&& !playerHasAchieved) {
        event.player.tell(Text.green(`You have observed a kinetic network of ${currentSU.toFixed(2)} SU.`));
        
        // Try different methods to trigger advancement
        try {
            // Method 1: Award the full advancement
            event.player.awardAdvancement('cl5:stress_unit');
            event.player.tell(Text.green(`Advancement unlocked! You observed a kinetic network of ${currentSU.toFixed(2)} SU.`));
        } catch (error1) {
            try {
                // Method 2: Award specific criterion
                event.player.awardAdvancementCriterion('cl5:stress_unit', 'get_5000su');
                event.player.tell(Text.green(`Advancement unlocked! You observed a kinetic network of ${currentSU.toFixed(2)} SU.`));
            } catch (error2) {
                console.error('Failed to award advancement:', error1, error2);
                event.player.tell(Text.red('Failed to unlock advancement. Check if advancement exists.'));
            }
        }
        
        //event.player.persistentData.putBoolean(advancementFlag, true);
    } else {
        event.player.tell(Text.red(`This network currently has ${currentSU.toFixed(2)} SU. You need ${REQUIRED_SU_FOR_ADVANCEMENT} SU.`));
    }
});