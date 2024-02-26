import Signin from "./Pages/Signin";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Error from "./Pages/Error";
import Account from "./Pages/Account";
import InfoForm from "./Pages/InfoForm";
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
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/settings",
          element: <InfoForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
