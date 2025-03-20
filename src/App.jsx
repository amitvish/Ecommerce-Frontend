import { Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
