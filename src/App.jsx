import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Mission from "./pages/mission.jsx";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollRestorer from "./components/ScrollRestorer.jsx";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <ScrollRestorer />
        <ScrollToTop />
        <Footer />
      </BrowserRouter>  
    </HelmetProvider>
  );
}