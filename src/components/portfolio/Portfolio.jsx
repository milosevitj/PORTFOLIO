import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Planinarski savetnik",
    img: "public/plsavetnik.png",
    desc: (
      <p>
        I've orchestrated a vibrant community of almost 8000 adventure
        enthusiasts on Instagram, where I not only share the thrill of
        exploration and the art of hiking but have also united individuals into
        a close-knit community. In addition, I created the website{" "}
        <a
          href="https://www.planinarskisavetnik.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "orange" }}
        >
          planinarskisavetnik.com
        </a>
        , providing a virtual sanctuary for mountain lovers seeking wisdom about
        peaks and trails.
      </p>
    ),
  },
  {
    id: 2,
    title: "Humanitarni bioskop na Savi",
    img: "public/humbioskop.jpg",
    desc: "One of my standout innovations is the Humanitarian Bioscope, where cultural enlightenment meets philanthropy. Beyond just providing cinematic insights, we embarked on a unique journey, raising funds for children in need. A cinema ticket? Just one simple SMS of support.",
  },
  {
    id: 3,
    title: "Brand whisperer",
    img: "public/secondlife.png",
    desc: " In my previous role, I conducted a sustainability revolution, implementing transformative projects and molding Decathlon into an eco-friendly beacon. I shaped it into a company proudly declaring itself as ECO. Leading a major project, Second Life, I breathed new life into sustainability initiatives.",
  },
  {
    id: 4,
    title: "Zapisuj Daruj",
    img: "public/zapisujdaruj.png",
    desc: "To illustrate my passion for ideas, this year I couldn't resist entering the Social Impact Award (SIA) with the 'Zapisuj daruj' project. From this initiative, the idea of creating mountain diaries was born. These diaries have now found a place on bookstore shelves, where their sales will fund excursions for children from marginalized communities. ",
  },
  {
    id: 5,
    title: "Team building",
    img: "public/teambuilding.jpg",
    desc: "I organized nature tours for our employees, providing them with an opportunity to unwind and connect with the beauty of the outdoors. Creating a balance between work and nature, these excursions fostered team bonding and well-being among our team members.",
  },
  {
    id: 6,
    title: "Medenjacyyy",
    img: "public/medenjacy.jpg",
    desc: "Well, I recently whipped up 194 gingerbread delights, shattering my own record. And here's the best part – I'm ready to bake double  that next year. But the real magic? I didn't do it alone.  ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
