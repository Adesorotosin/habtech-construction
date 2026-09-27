import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Home from "./components/Home";
import ConstructionGuide from "./components/ConstructionGuide";
import CostCalculator from "./components/CostCalculator";
import BOQEstimation from "./components/BOQEstimation";

import BidModal from "./components/BidModal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  const openBidModal = () => setIsBidModalOpen(true);
  const closeBidModal = () => setIsBidModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar onOpenBidModal={openBidModal} />

      <Routes>
        <Route path="/" element={<Home onOpenBidModal={openBidModal} />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/about"
          element={<About onOpenBidModal={openBidModal} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/construction-guide" element={<ConstructionGuide />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
        <Route path="/boq-estimation" element={<BOQEstimation />} />
      </Routes>

      <Footer />

      <BidModal isOpen={isBidModalOpen} onClose={closeBidModal} />
    </BrowserRouter>
  );
}

export default App;
