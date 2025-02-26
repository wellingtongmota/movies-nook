import { NavLink } from "react-router"

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center border-b bg-background 2xl:h-16">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center px-4 2xl:px-0">
        <NavLink to="/" className="text-2xl font-bold">
          movies<span className="text-primary">Nook</span>
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "ml-auto font-semibold text-primary/80"
              : "ml-auto font-semibold"
          }
        >
          Watchlist
        </NavLink>
      </div>
    </header>
  )
}
