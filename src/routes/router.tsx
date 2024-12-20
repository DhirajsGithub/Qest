import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import PricingPage from "../pages/pricingPage/PricingPage";
import SupportPage from "../pages/supportPage/SupportPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/pricing",
      element: <PricingPage />,
    },
    {
        path: "/support",
        element: <SupportPage />,
    },
    
  ]);

export default router;