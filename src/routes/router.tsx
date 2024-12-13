import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/LoginPage";
import SignUp from "../pages/SignupPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
export default router;
