import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import HomePage from "@/routes/HomePage";
import AboutPage from "@/routes/AboutPage";
import TreatmentsPage from "@/routes/TreatmentsPage";
import ResultsPage from "@/routes/ResultsPage";
import TestimonialsPage from "@/routes/TestimonialsPage";
import ContactPage from "@/routes/ContactPage";
import NotFoundPage from "@/routes/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
