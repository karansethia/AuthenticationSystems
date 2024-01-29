import React from "react";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {path: "/sigin", element: <Signin />},
        {path: "/route1", element: <Dashboard />},
        {path: "/route2", element: <Account />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
