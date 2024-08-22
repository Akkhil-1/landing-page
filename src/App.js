import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignUpPageAdmin from "./AdminSignUp/AdminSignUp";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminsignup" element={<SignUpPageAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
