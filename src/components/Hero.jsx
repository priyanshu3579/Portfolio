import { motion } from "framer-motion";
import photo from '../assets/img.png'
const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-32">

      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-purple-500">Priyanshu</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          A Frontend Developer who builds clean, modern and animated web experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-8">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg"
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-xl"
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-0"
      >
        <motion.img
          src={photo}
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover object-[center_top] rounded-full border-4 border-purple-500 shadow-[0_0_40px_rgba(150,50,255,0.6)]"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
