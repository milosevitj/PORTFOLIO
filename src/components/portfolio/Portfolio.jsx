import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mountain Guide",
    img: "public/plsavetnik.png",
    desc: (
      <p>
        As the founder, I've curated a vibrant community of nearly 8000 adventure enthusiasts on Instagram. Here, I not only share the exhilaration of exploration and the art of hiking but also foster a close-knit community. Additionally, I established the website{" "}
        <a
          href="https://www.planinarskisavetnik.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFBE3D" }}
        >
          planinarskisavetnik.com
        </a>
        , providing a virtual sanctuary for mountain lovers seeking wisdom about peaks and trails. Through our platform, adventurers find valuable resources, connect with like-minded individuals, and discover new trails, enhancing their outdoor experiences.
      </p>
    ),
  },
  {
    id: 2,
    title: "Humanitarian Cinema",
    img: "public/humbioskop.jpg",
    desc: (
      <p>
        Created the Humanitarian Cinema, merging cultural enlightenment with philanthropy. Raised funds for children in need through cinematic events, where a ticket was just one simple SMS of support. Through{" "}
        <a
          href="https://www.budihuman.rs/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFBE3D" }}
        >
          Budi Human
        </a>
        , an organization dedicated to helping those in need through various humanitarian initiatives, we have made a significant impact. Our events not only entertain but also inspire action, fostering a culture of giving and compassion within our community.
      </p>
    ),
  },
  
  
  {
    id: 3,
    title: "Sustainability Innovator",
    img: "public/secondlife.png",
    desc: (
      <p>
        Led a sustainability revolution, implementing transformative projects and molding{" "}
        <a
          href="https://www.decathlon.rs/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFBE3D" }}
        >
          Decathlon
        </a>{" "}
        
        into an eco-friendly beacon. Spearheaded the 'Second Life' project, breathing new life into sustainability initiatives. Through our efforts, we tackled three major issues: reducing excessive clothing waste and thus preserving the environment making new products more affordable for people, and increasing the company's income. Our initiatives not only reduce environmental impact but also inspire other companies to follow suit, creating a ripple effect of positive change.
      </p>
    ),
  },
  
  
   
  
  {
    id: 3,
    title: "Eco-Action Maestro",
    img: "public/sustainability.jpeg",
    desc: (
      <p>
        As the Sustainability Manager, I orchestrated a series of impactful events, including 
          large-scale tree planting drives and city clean-ups for <span style={{ color: "#FFBE3D" }} > Earth day</span>. Through these engaging initiatives, we not only contributed to environmental conservation but also made sustainability an exciting and accessible goal for everyone. Our efforts have inspired the community to embrace eco-friendly practices and take proactive steps towards a greener future.
      </p>
    ),
  },
  
  {
    id: 5,
    title: "Zapisuj & Daruj",
    img: "public/zapisujdaruj.png",
    desc: (
      <p>
        Participated in the <a
          href="https://serbia.socialimpactaward.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFBE3D" }}
        >
          Social Impact Award (SIA)
        </a> with the 'Record & Gift' project. Created mountain diaries now sold in bookstores, funding excursions for children from marginalized communities. With each purchase, buyers not only gain a valuable keepsake but also contribute to meaningful experiences for underprivileged children, spreading joy and hope.
      </p>
    ),
  },
  
  {
    id: 6,
    title: "Team Building",
    img: "public/teambuilding.jpg",
    desc: "Organized nature tours for employees, providing opportunities to unwind and connect with the beauty of the outdoors. These excursions fostered team bonding and well-being. By immersing in nature together, teams strengthen relationships, improve communication, and boost morale, leading to greater productivity and cohesion in the workplace.",
  },
  {
    id: 7,
    title: "Gingerbread Magic",
    img: "public/medenjacy.jpg",
    desc: (
      <p>
        For the <a
          href="https://symphony.is/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFBE3D" }}
        >
          Symphony's
        </a> New Year event, I baked 194 gingerbread delights, breaking my own record. And the real magic? I didn't do it alone. Through our baking adventures, we not only create delicious treats but also foster camaraderie and teamwork, making every celebration sweeter.
      </p>
    ),
  },
  
  {
    id: 8,
    title: "NY Party",
    img: "public/NYparty.jpg",
    desc: "As part of the organizing team for last year's employee party, I scouted the best band, ensured the dance floor was rocking, and kept the energy high all night long! From finding the perfect tunes to keeping the drinks flowing, it was all hands on deck to create an unforgettable night of celebration and fun for our team.",
  },
  {
    id: 9,
    title: "NY Kids Party",
    img: "public/NYkidsparty.jpg",
    desc: "And let's not forget, a delightful party was also organized for our youngest guests! The fairy tale characters, Little Thumbelina and the Snow Queen, delighted our little ones, followed by a magical photo session with Santa Claus himself, creating cherished memories for all!",
  },
  {
    id: 10,
    title: "Zvuci srca",
    img: "public/NYkidsparty.jpg",
    desc: (
    <p>
    In addition to the standard New Year's gifts for our employees, we provided them with T-shirts from the charitable organization <a href="https://zvucisrca.rs/o-nama/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFBE3D" }}>Zvuci srca</a>, thereby offering support to individuals with developmental disabilities and their families.
    </p>
    ),
  },
  {
    id: 11,
    title: "Ice skating",
    img: "public/iceskating.jpg",
    desc: "As part of the organizing team, we organized thrilling ice skating sessions for employees, providing them with an opportunity to showcase their talents on the ice. These events not only fostered team spirit but also provided a fun and exhilarating experience for all participants, creating lasting memories and strengthening bonds within the team.",
  },
  {
    id: 12,
    title: "Bouldering Sessions",
    img: "public/bouldering.jpg",
    desc: "Organized bouldering sessions twice a month with colleagues, providing unique bonding opportunities outside the office. These sessions enhance teamwork, communication, and trust, fostering camaraderie and mutual support. By conquering challenges together, teams build resilience and cohesion, leading to greater collaboration and success in the workplace.",
  },
  {
    id: 13,
    title: "Rock Climbing",
    img: "public/rockclimbing.jpg",
    desc:  <p>
    Our team has taken our bouldering skills to new heights — literally! We've ventured into the world of rock climbing, pushing past our limits like never before. What once seemed like an impossible feat — scaling towering cliffs — is now our latest thrill.
   
    <br />
    Who knows what heights we'll reach next? The sky's the limit — or should we say, the cliff's edge? Rock climbing isn't just about conquering peaks; it's about pushing boundaries, building confidence, and fostering teamwork. Each climb is a metaphor for overcoming challenges in both our personal and professional lives, making us stronger and more resilient individuals.
  </p>
  },
  
  {
    id: 14,
    title: "Lice Ulice Salesman Visit",
    img: "public/liceulice.jpg",
    desc: (
    <p>
    As the organizer of the <a href="https://liceulice.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFBE3D" }}>Lice Ulice</a> salesman visit, I coordinated a special visit from a salesman representing the Lice Ulice organization at our hub. We took pride in supporting their milestone 100th-anniversary issue by encouraging our employees to purchase copies. By spearheading this initiative, we've actively contributed to the impactful work of 'Lice Ulice' in our community, showcasing our commitment to social responsibility and making a positive difference in the lives of those around us.
    </p>
    ),
    },
    {
      id: 15,
      title: "Initiative Digital Serbia",
      img: "public/digitalserbia.jpg",
      desc: (
        <p>
          As a part of the organizing team, we hosted 40 talented students from the <a href="https://www.dsi.rs/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFBE3D" }}>Digital Serbia Initiative</a>! Our team spent valuable time with them, shedding light on diverse roles within the IT industry. From Service Delivery Management to QA Testing and Design, our employees shared their expertise and experiences, inspiring the next generation of tech enthusiasts. It was a fantastic opportunity to showcase the myriad of career paths available in IT.
        </p>
      ),
    },
    
  
{
  id: 16,
  title: "Walk&Run 4BELhospice",
  img: "public/runwalk.jpg",
  desc: (
  <p>
  As the organizer of the Walk & Run event, I facilitated a month-long initiative where employees tracked kilometers walked or run using the Pacer mobile app, contributing to a collective effort. The top 5 performers were recognized and awarded prizes for their achievements. Through this action, we supported <a href="https://belhospice.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFBE3D" }}>BELhospice</a> - a center for palliative care and support for individuals suffering from malignant diseases, demonstrating our commitment to community involvement and corporate social responsibility.
  </p>
  ),
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
            {/* <button>More</button> */}
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
