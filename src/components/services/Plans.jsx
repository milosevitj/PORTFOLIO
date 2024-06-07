import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Plans = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <motion.div className="titleContainer" variants={variants}>
      
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Plans</motion.b> 
          </h1>
          
        </div>
      </motion.div>
      <div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>SPORTS</h1>
          <br />
          <ul>
            <li><p>SymphOlympics</p></li>
            <li><p>UEFA Euro 2024</p></li>
            <li><p>Tournaments</p></li>
          </ul>
          
         
          <h2>Establish more hobbies</h2>
          <p>In addition to free climbing and football, we'll be introducing paddle tennis, fulfilling the desire expressed by our employees.</p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>FAMILY EVENTS</h1>
          <br />
          
         
          <ul>
            <li><p>Dads and kids </p></li>
            <li><p>Family Pool Day</p></li>
            <li> <p>Ice Cream Day</p></li>
            <li><p>Back to School Day</p></li>
            <li><p>NY Kids Party</p></li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>EMPLOYER BRANINDG</h2>
          <ul>
            <li><p>International Women in Engineering Day</p></li>
            <li><p>Attendance at IT conferences</p></li>
            <li><p>Establish Sponzorships</p></li>
            <li><p>Business run</p></li>
            <li><p>Woman's health month</p></li>
            <li><p>Man's health month</p></li>
          </ul>

          <h2>BENEFITS</h2>
<p>Establish more benefits such as:</p>
<ul>
  <li>Massage day</li>
  <li>Cultural events (cinemas, theaters)</li>
</ul>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>COMMUNITY INITIATIVES</h1>
          <br />
          <ul>
            <li>Halloween</li>
            <li>Oktoberfest</li>
            <li>Hub Anniversary Celebrations</li>
            </ul>
            <br />
          <p>Mystery Menu and Vegetarian day </p>
        
          <p>Employee engagment</p>
          <ul>
            <li>"Meditate & Elevate Mondays with Tijana Kamšek"</li>
            <li>Mental Health Workshop with Ana Borisavljević ana Vanja Medić</li>
            <li>Hike with Katarina Milošević</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>CSR</h1>
          <ul>
  <li>
    Participation in the <a href="https://empple.rs/empple-dodela-nagrada/" target="_blank" rel="noopener noreferrer">Empple Festival</a> in the category of Best employer branding activity focused on CSR.
  </li>
  <li>Humanitarian open-air cinema</li>
  <li>Lice Ulice newspaper selling with their vendor</li>
</ul>


      
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default Plans;
