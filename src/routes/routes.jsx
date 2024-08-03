import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import Login from "../pages/Account/Login/Login";
import Resgister from "../pages/Account/Resgister/Resgister";

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
                element: <Account />,
            },
            {
                path: 'login',
                element: <Login title="Login" />
            },
            {
                path: 'resgister',
                element: <Resgister title="Resgister" />
            }
        ]
    }
]);


export default router;