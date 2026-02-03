import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {

    axios.get(
      "http://localhost:3002/api/verify", // backend port
      { withCredentials: true }
    )
    .catch(() => {
      window.location.href = "http://localhost:5173/login"; 
      // your landing page login route
    });

  }, []);

  return <h1>Dashboard</h1>;
}

export default App;
