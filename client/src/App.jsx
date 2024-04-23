import Navbar from "./components/Navbar/Navbar";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <UserTable />
    </div>
  );
}

export default App;
