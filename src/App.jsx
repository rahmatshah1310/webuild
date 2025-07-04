// src/main.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
