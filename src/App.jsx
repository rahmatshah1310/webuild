// src/main.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import ProjectDetailPage from "./pages/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="projects" >
            <Route index element={<ProjectPage />} />                 {/* /projects */}
            <Route path=":id" element={<ProjectDetailPage />} />            {/* /projects/:id */}
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
