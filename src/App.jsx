import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RequestQuote from "./components/RequestQuote";
import Chatbot from "./components/Chatbot";

import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Home from "./components/Home";
import ConstructionGuide from "./components/ConstructionGuide";
import CostCalculator from "./components/CostCalculator";
import BOQEstimation from "./components/BOQEstimation";
import NotFound from "./components/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar onOpenQuote={openQuote} />

      <Routes>
        <Route path="/" element={<Home onOpenQuote={openQuote} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About onOpenQuote={openQuote} />} />
        <Route path="/services" element={<Services onOpenQuote={openQuote} />} />
        <Route path="/contact" element={<Contact onOpenQuote={openQuote} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/construction-guide" element={<ConstructionGuide />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
        <Route path="/boq-estimation" element={<BOQEstimation onOpenQuote={openQuote} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer onOpenQuote={openQuote} />

      <RequestQuote isOpen={isQuoteOpen} onClose={closeQuote} />
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
