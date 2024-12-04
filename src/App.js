import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HeaderMain, AppRoutes } from "./components";
import { Footer } from "./pages";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import ScrollToTopButton from "./utils/ScrollToTopButton ";

const ScrollToTop = ({ children }) => {
  const location = useLocation(); // Get the location object directly from the hook

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on location change
  }, [location]); // Dependency on location object

  return children; // Return wrapped children to maintain component structure
};

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animation only once
    });

    // Refresh AOS on route change or updates
    AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <HeaderMain />
        <AppRoutes />
        <ScrollToTopButton />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
