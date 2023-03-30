import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import { Content } from "./pages/Content";


const Routes = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/content",
            element: <Content/>
        }
   ]);


export default Routes;