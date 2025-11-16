import { motion } from "framer-motion";
import note_share from '../assets/Note-share.png'  
import kapish from '../assets/Kapish.png'  
import portfolio from '../assets/portfolio.png'  
import first from '../assets/first.png'  
import secound from '../assets/secound.png'  
import third from '../assets/third.png'  

const projects = [
  {
    title: "Note Share App",
    desc: "A real-time note sharing app with Auth0 and Supabase.",
    tech: ["React", "Supabase", "Auth0"],
    img: note_share,
    live: "https://resplendent-sorbet-e6fba6.netlify.app/",
    github: "https://github.com/priyanshu3579/Note-Share",
  },
  {
    title: "Portfolio Website",
    desc: "Clean, modern animated portfolio built with React + Tailwind.",
    tech: ["React", "Tailwind"],
    img: portfolio,
    live: "#",
    github: "#",
  },
  {
    title: "Kapish Holidayss",
    desc: "A responsive travel website displaying curated tour packages, beautiful destination photos, and day-wise itineraries, with direct agent contact for booking queries.",
    tech: ["React", "Recharts"],
    img: kapish,
    live: "https://kapishholidayss.netlify.app/",
    github: "https://github.com/priyanshu3579/Note-Share",
  },
    {
    title: "Clone Website 1",
    desc: "A simple UI-clone of the Sidcup Family Golf website created using pure HTML, CSS, and JavaScript.",
    tech: ["HTML", "JS"],
    img: first,
    live: "https://kapishholidayss.netlify.app/",
    github: "#",
  },
      {
    title: "Clone Website 2",
    desc: "A UI-focused clone of the Agency.ai website built using React.",
    tech: ["React" , "Tailwind Css"],
    img: secound,
    live: "https://kapishholidayss.netlify.app/",
    github: "#",
  },      {
    title: "Clone Website 3",
    desc: "A fully responsive clone of the Edusity education website, built using React and Tailwind CSS",
    tech: ["React" , "Tailwind Css"],
    img: third,
    live: "https://kapishholidayss.netlify.app/",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-8 md:px-24 py-24 text-white">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        My <span className="text-purple-500">Projects</span>
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05, translateY: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 
                       p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 
                       transition-all duration-300"
          >
            {/* IMAGE */}
            <motion.img
              src={p.img}
              alt={p.title}
              className="rounded-xl h-40 w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* TITLE */}
            <h3 className="text-xl font-semibold mt-4">{p.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

            {/* TECH BADGES */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-purple-600/30 
                             border border-purple-500/40 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-5">
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                href={p.live}
                className="text-sm px-4 py-2 bg-purple-600 rounded-lg"
              >
                Live
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                href={p.github}
                className="text-sm px-4 py-2 border border-purple-500 rounded-lg"
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
