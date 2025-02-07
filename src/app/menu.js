let MENU_ITEMS = [
    {
        "name": "Home",
        "link": "/app/home",
        "icon": "home",
        "visible": true,
        "key": "home"
    },
    {
        "name": "Patient Management",
        "link": "/ehr",
        "icon": "person",
        "visible": true,
        "key": "patient-management",
        "children": [
            {
                "name": "Patient Registration",
                "link": "/app/ehr/patient-registration",
                "icon": "person_add",
                "visible": true,
                "key": "patient-registration"
            },
            {
                "name": "Update Patient",
                "link": "/app/ehr/update-patient",
                "icon": "edit",
                "visible": true,
                "key": "update-patient"
            }
        ]
    },
    {
        "name": "Lab",
        "icon": "biotech",
        "link": "/lab",
        "visible": true,
        "key": "lab",
        "children": [
            {
                "name": "Order Dashboard",
                "link": "/app/lab/order-dashboard",
                "icon": "dashboard",
                "visible": true,
                "key": "order-dashboard"
            },
            {
                "name": "New Order",
                "link": "/app/lab/new-order",
                "icon": "today",
                "visible": true,
                "key": "new-order"
            },
            {
                "name": "Lab Test Sample",
                "link": "/app/lab/lab-test-sample",
                "icon": "science",
                "visible": true,
                "key": "lab-test-sample"
            },
            {
                "name": "Pathology Dashboard",
                "link": "/app/lab/pathology-dashboard",
                "icon": "biotech",
                "visible": true,
                "key": "pathology-dashboard"
            },
            {
                "name": "Radiology Dashboard",
                "link": "/app/lab/radiology-dashboard",
                "icon": "personal_injury",
                "visible": true,
                "key": "radiology-dashboard"
            },
            {
                "name": "View Lab Test",
                "link": "/app/lab/view-lab-test",
                "icon": "description",
                "visible": true,
                "key": "view-lab-test"
            }
        ]
    },
    {
        "name": "Setups",
        "link": "/app/setup",
        "icon": "settings",
        "visible": true,
        "key": "setup"
    }
];

// Export for Angular usage
export default MENU_ITEMS;
