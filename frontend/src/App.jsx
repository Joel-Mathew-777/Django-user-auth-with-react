import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainHome from "./pages/MainHome"; // Import the new MainHome component
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />}>
          <Route index element={<MainHome />} /> {/* Main dashboard as default for /home */}
          <Route path="profile" element={<Profile />} /> {/* Profile page */}
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
