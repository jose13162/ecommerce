import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Middleware/RequireAuth";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { ChangePassword } from "./Pages/ForgotPassword/Change";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { CreateAccount } from "./Pages/Register/CreateAccount";
import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    fontFamily: "Poppins",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
});

function AppRoutes() {
  globalStyles();

  return (
    <Router>
      <Routes>
        <Route path="/redirect" element={<RequireAuth />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:key" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/:key" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
