import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/generateData", {
        region: "Germany",
      })
      .then((response) => {
        console.log(response.data.tableData);
        setData(response.data.tableData);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <UserTable users={data} />
    </div>
  );
}

export default App;
