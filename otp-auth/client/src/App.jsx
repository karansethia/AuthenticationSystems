import React from "react";
import InfoForm from "./Pages/InfoForm";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import SignIn from "./Pages/SignIn";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Pages/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {index: true, element: <Home />},
        {path: "/signin", element: <SignIn />},
        {path: "/account", element: <Account />},
        {path: "/settings", element: <InfoForm />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
