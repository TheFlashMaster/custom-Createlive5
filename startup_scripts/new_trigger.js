
AdvJSEvents.trigger(event => {
    // Register all custom advancement triggers for Create Live 5
    event.create("stress_unit_trigger");           // Legacy trigger (keep for compatibility)
    event.create("stress_basic_trigger");          // Basic stress capacity (1,000 SU)
    event.create("high_stress_trigger");           // High stress capacity (10,000 SU)
    event.create("stress_master_trigger");         // Master stress capacity (50,000 SU)
    event.create("high_rpm_trigger");              // High RPM detection (256 RPM)
    event.create("long_conveyors_trigger");        // Long belt connector systems (100 length)
});
