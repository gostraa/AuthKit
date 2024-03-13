import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Radar from "./components/Radar/Radar";
import Letter from "./components/Letter/Letter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/radar" element={<Radar />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="*" element={<h2>not found</h2>} />
    </Routes>
  );
}

export default App;
