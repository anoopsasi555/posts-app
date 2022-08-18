import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AddPost from "./components/AddEditPost";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/editPost/:id" element={<AddPost type='Edit Post' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
