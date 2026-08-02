import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AircraftList from "./pages/AircraftList";
import AircraftDetails from "./pages/AircraftDetails";
import Favourite from "./pages/Favourite";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import AppLayout from "./components/layout/AppLayout";
import AircraftForm from "./pages/AircraftForm";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Pages with Layout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aircraft" element={<AircraftDetails />} />
        <Route path="/aircraftlist" element={<AircraftList />} />
        <Route path="/aircraft/add" element={<AircraftForm />} />
        <Route path="/aircraft/edit/:id" element={<AircraftForm />} />
        <Route path="/aircraftdetails/:id" element={<AircraftDetails />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
