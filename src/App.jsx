import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}