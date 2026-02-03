import { useEffect, useState } from "react";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/verify", {
        withCredentials: true,
      })
      .then(() => {
        setAuthorized(true);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "http://localhost:3001/login";
      });
  }, []);

  if (loading) return <h2>Checking authentication...</h2>;

  return authorized ? children : null;
}
