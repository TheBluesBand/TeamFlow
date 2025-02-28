import { Route } from "react-router-dom";
import SignUp from "./auth/sign-up"; // Make sure to import the SignUp component
import Home from "./pages/home";
import SignIn from "./auth/sign-in";

export const routes = (
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
  </Route>
);
