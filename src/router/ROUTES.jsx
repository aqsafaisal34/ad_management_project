import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import CreatePlan from "../pages/create-plan";
import PlanDetails from "../pages/plan-details";
import PlanList from "../pages/plan-list";


const ROUTES = [
    { key: 1, protected: false, path: "/", element: <Login/> },
    { key: 2, protected: true, path: "/dashboard", element: <Dashboard/> },
    { key: 3, protected: true, path: "/create-plan", element: <CreatePlan/> },
    { key: 4, protected: true, path: "/plan-details", element: <PlanDetails/> },
    { key: 4, protected: true, path: "/plan-list", element: <PlanList/> },
]

export default ROUTES;