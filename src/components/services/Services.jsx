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

const Services = () => {
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
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/nyear.JPG" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Why</motion.b> Am I
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Your</motion.b> Choice?
          </h1>
          <img src="/people.jpg" alt="" />
        </div>
      </motion.div>
      <div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Content development</h2>
          <p>
            I have ability to curate, create, and share engaging content for
            social media, websites, and other platforms that reflect the
            company's client-centric positioning
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Innovative thinking </h2>
          <p>
            I foster a creative and forward-thinking approach to problem-solving
            and decision-making. I am capable of generating innovative ideas and
            building content that showcases the company's strengths and values
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Employer branding</h2>
          <p>
            I am ready to enhance the company's local employer brand through
            various initiatives like events, PR articles, and campaigns
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project management </h2>
          <p>
            I have strong organizational and project management skills and I can
            handle multiple initiatives simultaneously
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Growth mindset</h2>
          <p>
            I have ability and willingness to continuously learn, adapt, and
            evolve in the face of new opportunities, resilience in the face of
            setbacks
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
