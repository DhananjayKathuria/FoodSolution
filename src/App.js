import { lazy, Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";
import UserContext from "./utils/userContext";

// Loading the AboutUs page via lazy loading method
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "DJ",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact-Us",
        element: <Contact />,
      },
      {
        path: "about-Us",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
