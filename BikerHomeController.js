({
    init : function(component, event, helper) {
        component.set('v.mapMarkers', [
            {
                location: {
                    Street: 'General Roxas Ave, Cubao',
                    City: 'Quezon'
                }
            },
            {
                location:{
                    Street:'41 Lantana St, Cubao',
                    City:'Quezon'
                }
            },
            {
                location:{
                    Street:'New York Ave, Cubao',
                    City:'Quezon'
                }
            },
            {
                location:{
                    Street:'Maryland, Cubao',
                    City:'Quezon'
                }
            },
            {
                location:{
                    Street:'Judge Jimenez St',
                    City:'Quezon'
                }
            }
            
        ]);
        component.set('v.zoomLevel', 16);
    }
})
