const setup_routes = [
    "setup",
    "organization",
    "department",
    "doctor",
    "employee",
    "lab",
    "package"
];

const lab_routes = [
    "lab",
    "order-dashboard",
    "new-order",
    "lab-test-sample",
    "pathology-dashboard",
    "radiology-dashboard",
    "view-lab-test"
];

const ehr_routes = [
    "patient-management",
    "patient-registration",
    "update-patient"
];

export const ROLE_CONFIG: { [key: string]: string[] } = {
    "admin": ["home", ...lab_routes, ...ehr_routes, ...setup_routes],
    "doctor": [...ehr_routes],
    "lab-technician": ["setup","package",...lab_routes]
};
