import Signin from "./Pages/Signin";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Pages/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Signin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
