//! Custom Advancement Trigger for Create Live 5
const STRESSOMETER_SU_NBT_KEY = 'Network.Capacity';
const REQUIRED_SU_FOR_ADVANCEMENT = 5000;

BlockEvents.rightClicked('create:stressometer', event => {
    if (!event.block.entity) {
        return;
    }

    const nbt = event.block.entity.getUpdateTag();
    const currentSU = nbt?.Network?.Capacity ?? 0; // Access nested NBT safely

    if (currentSU >= REQUIRED_SU_FOR_ADVANCEMENT) {
        CustomTriggers.of("minecraft:stress_unit_trigger").trigger(event.player);
    }
});