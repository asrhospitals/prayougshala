let MENU_ITEMS = [
    {
        "name": "Home",
        "link": "/app/home",
        "icon": "home",
        "visible": true
    },
    {
        "name": "Patient Management",
        "link": "/ehr",
        "icon": "person",
        "visible": true,
        "children": [
            {
                "name": "Patient Registration",
                "link": "/app/ehr/patient-registration",
                "icon": "person_add",
                "visible": true
            },
            {
                "name": "Update Patient",
                "link": "/app/ehr/update-patient",
                "icon": "edit",
                "visible": true
            }
        ]
    },
    {
        "name": "Lab",
        "icon": "biotech",
        "link": "/lab",
        "visible": true,
        "children": [
            {
                "name": "Order Dashboard",
                "link": "/app/lab/order-dashboard",
                "icon": "dashboard",
                "visible": true
            },
            {
                "name": "New Order",
                "link": "/app/lab/new-order",
                "icon": "today",
                "visible": true
            },
            {
                "name": "Lab Test Sample",
                "link": "/app/lab/lab-test-sample",
                "icon": "science",
                "visible": true
            },
            {
                "name": "Pathology Dashboard",
                "link": "/app/lab/pathology-dashboard",
                "icon": "biotech",
                "visible": true
            },
            {
                "name": "Radiology Dashboard",
                "link": "/app/lab/radiology-dashboard",
                "icon": "personal_injury",
                "visible": true
            },
            {
                "name": "View Lab Test",
                "link": "/app/lab/view-lab-test",
                "icon": "description",
                "visible": true
            }
        ]
    },
    {
        "name": "Setups",
        "link": "/app/setup",
        "icon": "settings",
        "visible": true
    },
];

// Export for Angular usage
export default MENU_ITEMS;
