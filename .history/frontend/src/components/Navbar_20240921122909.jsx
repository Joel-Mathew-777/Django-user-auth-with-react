import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/home/profile">Profile</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
