import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full mt-20 py-8 border-t border-white/10 bg-[#0e0e14]/70 backdrop-blur-xl"
    >
      <div className="px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 text-white">

        {/* LEFT TEXT */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Priyanshu — All Rights Reserved
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <a 
            href="https://github.com/priyanshu3579"
            target="_blank"
            className="text-2xl hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          {/* Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshu35790@gmail.com"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              className="w-7 h-7"
            />
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/917042032263"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-7 h-7"
            />
          </a>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
