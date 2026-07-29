import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AircraftList from './pages/AircraftList'
import AircraftDetails from './pages/AircraftDetails'
import Favourite from './pages/Favourite'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <h1>Aircraft Maintenance Portal</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aircraftlist" element={<AircraftList />} />
        <Route path="/aircraftdetails/:id" element={<AircraftDetails />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
