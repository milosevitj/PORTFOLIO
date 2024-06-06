import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div>
          <img src="/logo.png" alt="" id="logo" />
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.facebook.com/kaca.milosevic/" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/milosevitj/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/katarinamilosevitj/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
