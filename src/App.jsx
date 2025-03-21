import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";

function App() {
  console.log("🚀 App.jsx loaded!"); // Debugging log

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8081/api/users/")
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Users fetched:", data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>🔥 Debug: App Loaded</h1> {/* Visible Debugging */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <Routes>
          <Route path="/" element={<UsersList users={users} />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
