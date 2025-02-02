let MENU_ITEMS = [
    {
        "name": "Home",
        "link": "/home",
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
                "link": "/ehr/patient-registration",
                "icon": "person_add",
                "visible": true
            },
            {
                "name": "Update Patient",
                "link": "/ehr/update-patient",
                "icon": "edit",
                "visible": true
            }
        ]
    },    
    {
        "name": "Lab",
        "icon": "biotech",
        "visible": true,
        "children": [
            {
                "name": "Order Dashboard",
                "link": "/lab/order-dashboard",
                "icon": "dashboard",
                "visible": true
            },
            {
                "name": "New Order",
                "link": "/lab/new-order",
                "icon": "today",
                "visible": true
            },
            {
                "name": "Lab Test Sample",
                "link": "/lab/lab-test-sample",
                "icon": "science",
                "visible": true
            },
            {
                "name": "Pathology Dashboard",
                "link": "/lab/pathology-dashboard",
                "icon": "biotech",
                "visible": true
            },
            {
                "name": "Radiology Dashboard",
                "link": "/lab/radiology-dashboard",
                "icon": "personal_injury",
                "visible": true
            },
            {
                "name": "View Lab Test",
                "link": "/lab/view-lab-test",
                "icon": "description",
                "visible": true
            }
        ]
    },
    {
        "name": "Pharmacy",
        "link": "/pharma",
        "icon": "medical_services",
        "visible": true,
        "children": [
            {
                "name": "Dashboard",
                "link": "/pharma/dashboard",
                "icon": "dashboard",
                "visible": true
            },
            {
                "name": "New Order",
                "link": "/pharma/new-order",
                "icon": "today",
                "visible": true
            },
            {
                "name": "View Order",
                "link": "/pharma/view-order",
                "icon": "visibility",
                "visible": true
            },
            {
                "name": "Return",
                "link": "/pharma/return",
                "icon": "arrow_back",
                "visible": true
            },
            {
                "name": "Print Bill",
                "link": "/pharma/print-bill",
                "icon": "print",
                "visible": true
            }
        ]
    },
    {
        "name": "Setups",
        "link": "/setup",
        "icon": "settings",
        "visible": true
    },
];

// Export for Angular usage
export default MENU_ITEMS;
