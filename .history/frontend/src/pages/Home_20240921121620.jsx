import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      <h2>Welcome, {user ? user.username : "Guest"}!</h2>
      {user && <p>Your email: {user.email}</p>}
    </div>
  );
};

export default Home;
