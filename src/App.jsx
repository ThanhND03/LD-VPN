import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const App = () => {
    return <div id="wrapper">
        <RouterProvider router={router} />
    </div>;
};

export default App;
