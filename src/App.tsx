import React from "react";
import { NavBar } from "./components/common";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardTable, Login, Registration } from "./pages";
import AuthRoute from "./components/AuthRoute";
import { useAppDispatch } from "./hooks/storeHooks";
import { clearUserData } from "./store/auth/authSlilce";
import { isValidToken } from "./utils/isValidToken";
import { Container } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const isValid = isValidToken(token);
    if (!isValid) {
      dispatch(clearUserData());
      window.localStorage.removeItem("token");
    }
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<DashboardTable />} />
          <Route
            path="/sign-in"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/sing-up"
            element={
              <AuthRoute>
                <Registration />
              </AuthRoute>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
