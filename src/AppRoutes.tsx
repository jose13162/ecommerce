import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { RequireAuth } from "./Middleware/RequireAuth";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { FinishRegister } from "./Pages/Register/Finish";
import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    fontFamily: "Poppins",
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
              <App />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:key" element={<FinishRegister />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
