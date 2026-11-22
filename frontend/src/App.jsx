
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Backend connection failed!");
      });
  }, []);

  return (
    <div>
      <h1>Event House</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
