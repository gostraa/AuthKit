import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<h2>not found</h2>} />
    </Routes>
  );
}

export default App;
