import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./data/ProjectDetails";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/projects/sams",
            element: <ProjectPage project={ProjectDetail.sams}/>,
        },
        {
            path: "/projects/redstream",
            element: <ProjectPage project={ProjectDetail.redstream}/>,
        },
        {
            path: "/projects/gdsc",
            element: <ProjectPage project={ProjectDetail.gdscPortfolio}/>,
        },
        {
            path: "/projects/selfremind",
            element: <ProjectPage project={ProjectDetail.selfremind}/>,
        },
        {
            path: "/projects/jackyfan",
            element: <ProjectPage project={ProjectDetail.jackyfan}/>,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
