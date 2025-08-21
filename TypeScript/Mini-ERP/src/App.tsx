import { Outlet } from "react-router";
import AppSideBar from "./components/Elements/common/AppSideBar";
import { ThemeProvider } from "./components/Elements/common/Dark Theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full">
        {/* Sidebar on the left */}
        <div>
          <div>
            <AppSideBar />
          </div>
        </div>

        {/* Main content on the right */}
        <main className="flex-1 overflow-auto p-4 ">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
