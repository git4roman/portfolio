import { Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "../pages";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
const AppRoutes = () => {
  return (
    <div>
      <AnimatedRoutes />
    </div>
  );
};
export default AppRoutes;
