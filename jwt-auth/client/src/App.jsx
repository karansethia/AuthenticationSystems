import Signin from "./Pages/Signin";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Error from "./Pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {index: true, element: <Home />},
        {
          path: "/signin",
          element: <Signin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
