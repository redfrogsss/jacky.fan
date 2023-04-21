import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import SASProjectPage from "./pages/SASProjectPage";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
        {
            path: "/projects/sas",
            element: <SASProjectPage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
