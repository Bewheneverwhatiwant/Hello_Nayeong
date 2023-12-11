import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import SubPage from "./pages/SubPage/SubPage";

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/subpage",
                element: <SubPage />
            }
        ]
    }
])