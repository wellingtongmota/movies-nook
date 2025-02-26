import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-screen-2xl flex-col px-4 py-4 2xl:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
