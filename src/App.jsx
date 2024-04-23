import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";



import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.sass"


const Layout = (children) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: "/write",
        element: <Write />,
      }, {
        path: "/post/",
        element: <Single />,
      },
    ],
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/register",
    element: <Register />,
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
