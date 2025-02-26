import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router"
import RootLayout from "@/pages/root-layout.tsx"
import HomePage from "@/pages/home/index.tsx"
import WatchlistPage from "@/pages/watchlist/index.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="watchlist" element={<WatchlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
