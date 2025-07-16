
AdvJSEvents.trigger(event => {
    // Register all custom advancement triggers for Create Live 5
    event.create("stress_unit_trigger");           // Legacy trigger (keep for compatibility)
    event.create("stress_basic_trigger");          // Basic stress capacity (1,000 SU)
    event.create("high_stress_trigger");           // High stress capacity (10,000 SU)
    event.create("stress_master_trigger");         // Master stress capacity (50,000 SU)
    event.create("high_rpm_trigger");              // High RPM detection (256 RPM)
    event.create("long_conveyors_trigger");        // Long belt connector systems (100 length)
    event.create("steam_giant_trigger");           // Steam giant boiler (3x8x18, 180 supply)
    event.create("giant_vault_trigger");           // Giant vault (3x9)
    event.create("giant_tank_trigger");            // Giant fluid tank (3x32)
    event.create("printed_knowledge_trigger");     // Printed knowledge (depot with items)
    event.create("long_train_ride_trigger"); // Long train ride (over 100m)
    event.create("very_long_train_ride_trigger"); // Very long train ride (over 1km)
    event.create("mechanical_spawner_trigger");    // Mechanical spawner
    event.create("chunk_loader_trigger");      // Chunk loader (mechanical)

    event.create("wireless_connected");            // Wireless terminal connected
    event.create("cross_dimension");               // Cross dimension wireless terminal

    event.create("machine_park_trigger");          // Machine park (1000+ components in a single network)
});
