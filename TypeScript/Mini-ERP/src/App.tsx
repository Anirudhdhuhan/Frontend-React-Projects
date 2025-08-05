import { Outlet } from "react-router";
import AppSideBar from "./components/Elements/common/AppSideBar";

function App() {
  return (
    <div className="flex h-screen w-auto">
    {/* Sidebar on the left */}
    <div> 

    <AppSideBar />
    </div>

    {/* Main content on the right */}
    <main className="flex-1 overflow-auto p-4 ml-6">
      <Outlet />
    </main>
  </div>
  );
}

export default App;
