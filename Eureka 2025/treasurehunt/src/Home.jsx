import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const correctPassword = "i solemnly swear that i am up to no good"; // Set your password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === correctPassword) {
      navigate("/protected");
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <div className="container">
      <h2 className="head1">Enter Password to Proceed</h2>
      <form className="input1" onSubmit={handleSubmit}>
        <input
          type="password"
          className="field1"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
