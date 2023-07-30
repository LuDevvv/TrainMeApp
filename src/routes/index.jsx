import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { LoginPage } from "../components/pages/LoginPage";
import { SingupPage } from "../components/pages/SingupPage";
import { TrainersPage } from "../components/pages/TrainersPage";
import { SchedulePage } from "../components/pages/SchedulePage";
import { TrainerListPage } from "../components/pages/TrainerListPage";
import { AuthProvider } from "../context/AuthContext";
import { CitasProvider } from "../context/CitasContext";
import { TrainerProvider } from "../context/TrainersContext";
import { PrivateRoute } from "../components/common/PrivateRoute";

const AppRouter = () => {
  return (
    <AuthProvider>
      <TrainerProvider>
        <CitasProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/singUp" element={<SingupPage />} />

            <Route
              path="/trainers"
              element={
                <PrivateRoute>
                  <TrainerListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <PrivateRoute>
                  <SchedulePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/homePresentation"
              element={
                <PrivateRoute>
                  <TrainersPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </CitasProvider>
      </TrainerProvider>
    </AuthProvider>
  );
};

export default AppRouter;
