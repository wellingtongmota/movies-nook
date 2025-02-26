import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
