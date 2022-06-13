import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { RequireAuth } from "./Middleware/RequireAuth";
import { Login } from "./Pages/Login";
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;
