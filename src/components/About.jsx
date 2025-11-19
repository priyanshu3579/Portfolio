import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full px-8 md:px-24 py-24 text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h2>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-gray-300 max-w-2xl leading-relaxed"
      >
        I'm Priyanshu, a passionate{" "}
        <span className="text-purple-400 font-semibold">Frontend Developer </span>  
        who loves building clean, modern and animated web interfaces using  
        <span className="text-purple-400 font-semibold"> React, Tailwind & Framer Motion</span>.
      </motion.p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.07 }}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 shadow-lg 
                     hover:shadow-purple-500/20 transition"
        >
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-400 text-sm">React, HTML, CSS, JS, Tailwind</p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ scale: 1.07 }}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 shadow-lg 
                     hover:shadow-purple-500/20 transition"
        >
          <h3 className="text-xl font-semibold mb-2">UI / UX</h3>
          <p className="text-gray-400 text-sm">Clean, modern & animated UI</p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.07 }}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 shadow-lg np
                     hover:shadow-purple-500/20 transition"
        >
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <p className="text-gray-400 text-sm">VS Code, GitHub</p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
