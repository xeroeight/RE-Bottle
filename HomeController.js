({
    init : function(component, event, helper) {
        
        component.set('v.mapMarkers', [
            {
                //make location dynamic
                location: {
                    Street: 'General Roxas Ave, Cubao',
                    City: 'Quezon',
                },
            }
        ]);
        component.set('v.zoomLevel', 16);
    }
})
