import { Routes, Route } from "react-router-dom"
import './App.css';
import Issueslist from "./Screen/ListIssues";
import ListProjects from "./Screen/ListProject";
import Login from "./Screen/LoginScreen";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    // <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="ListProjects" element={<ListProjects />} />
        <Route path="Issues/:id/" element={<Issueslist />} />
      </Routes>

  );
}

export default App;
