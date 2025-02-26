import { NavLink } from "react-router"

export function Navbar() {
  return (
    <header className="flex h-16 w-full items-center border-b">
      <div className="mx-auto flex w-full max-w-screen-2xl items-baseline px-4 2xl:px-0">
        <NavLink to="/" className="text-2xl font-bold">
          movies<span className="text-violet-700">Nook</span>
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "ml-auto font-semibold text-violet-500"
              : "ml-auto font-semibold"
          }
        >
          Watchlist
        </NavLink>
      </div>
    </header>
  )
}
