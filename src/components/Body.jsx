import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
           path:"/browser",
           element:<Browser/>
        },
    ]);

    return (
        <>
           <RouterProvider router={appRouter}>
               <Login />
               <Browser />
           </RouterProvider>
        </>
    )
}
export default Body;
