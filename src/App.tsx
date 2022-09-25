import React from "react";
import { NavBar } from "./components/common";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardTable, Login, Registration } from "./pages";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { clearUserData } from "./store/auth/authSlilce";
import { isValidToken } from "./utils/isValidToken";

const AuthRoute: React.FC<any> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.auth);
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

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
      <main>
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
      </main>
    </div>
  );
}

export default App;
