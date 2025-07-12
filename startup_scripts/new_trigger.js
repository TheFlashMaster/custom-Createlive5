AdvJSEvents.trigger(event => {
    event.create("stress_unit_trigger")
        .match((eventId) => eventId === "get_5000su");
});