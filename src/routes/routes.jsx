import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";

const router = createBrowserRouter([
    {
        path: "",
        children: [
            {
                path:"",
                element: <Home />
            }
        ]
    },
    {
        path: "account",
        children: [
            {
                path: "",
                element: <Account />
            }
        ]
    }
]);


export default router;