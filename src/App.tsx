import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/Preloader";
import { CursorTrail } from "./components/CursorTrail";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Preloader />
      <CursorTrail />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
