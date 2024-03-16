import Signin from "./Pages/Signin";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Error from "./Pages/Error";
import Account from "./Pages/Account";
import InfoForm from "./Pages/InfoForm";
import AuthContextProvider from "./context/AuthContextProvider";
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

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  );
}

export default App;
