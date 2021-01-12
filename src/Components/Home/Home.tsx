import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { slideLeft, slideRight, slideTransition } from "../Transitions";
import { Link } from "react-router-dom";

export const Home: React.FC<any> = () => {
  return (
    <div id="Home">
      <h1>Welcome to Floofer</h1>
      <motion.div
        className="cat"
        initial="initial"
        exit="out"
        animate="in"
        variants={slideLeft}
        transition={slideTransition}
      >
        <Link to="/login">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1927&q=80"
            alt="Cat"
          />
          <p>Login</p>
        </Link>
      </motion.div>
      <motion.div
        className="dog"
        initial="initial"
        exit="out"
        animate="in"
        variants={slideRight}
        transition={slideTransition}
      >
        <Link to="/register">
          <img
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"
            alt="Dog"
          />
          <p>Register</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
