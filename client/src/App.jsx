import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import UserTable from "./components/UserTable";
import axios from "axios";

function App() {
  const [region, setRegion] = useState("USA");
  const [errorValue, setErrorValue] = useState(0);
  const [seed, setSeed] = useState(20);
  const [data, setData] = useState([]);

  console.log(region, seed);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/generateData?${Date.now()", {
        region: region,
        seed: seed,
      })
      .then((response) => {
        setData(response.data.body);
        console.log(response.data.body);
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, [region, seed]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        region={region}
        setRegion={setRegion}
        errorValue={errorValue}
        setErrorValue={setErrorValue}
        seed={seed}
        setSeed={setSeed}
      />
      <UserTable users={data} />
    </div>
  );
}

export default App;
