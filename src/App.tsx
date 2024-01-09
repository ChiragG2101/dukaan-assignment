import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Others from "./pages/Others";
import { sidebarMenuOptions } from "./lib/sidebar-items";
import Payments from "./pages/Payments";

function App() {
  return (
    <div className="flex min-h-screen bg-zinc-100 ">
      <div className="hidden xl:flex w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Routes>
          {sidebarMenuOptions.map((option) =>
            option.label === "Payments" ? (
              <Route
                key={option.id}
                path={option.navigateTo}
                element={<Payments />}
              />
            ) : (
              <Route
                key={option.id}
                path={option.navigateTo}
                element={<Others pageTitle={option.label} />}
              />
            )
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
