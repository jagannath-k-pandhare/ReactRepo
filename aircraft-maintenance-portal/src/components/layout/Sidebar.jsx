import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-64 h-full border-r p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "block w-full rounded bg-blue-600 p-2 text-white"
              : "block w-full rounded p-2 hover:bg-gray-200"}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/aircraft" className={({ isActive }) => isActive ? "block w-full rounded bg-blue-600 p-2 text-white"
              : "block w-full rounded p-2 hover:bg-gray-200"}>
              Aircraft
            </NavLink>
          </li>
          <li>
            <NavLink to="/aircraftList" className={({ isActive }) => isActive ? "block w-full rounded bg-blue-600 p-2 text-white"
              : "block w-full rounded p-2 hover:bg-gray-200"}>
              Aircraft List
            </NavLink>
          </li>

          <li>
             <NavLink to="/favourite" className={({ isActive }) => isActive ? "block w-full rounded bg-blue-600 p-2 text-white"
              : "block w-full rounded p-2 hover:bg-gray-200"}>
              Favourite
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "block w-full rounded bg-blue-600 p-2 text-white"
              : "block w-full rounded p-2 hover:bg-gray-200"}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;