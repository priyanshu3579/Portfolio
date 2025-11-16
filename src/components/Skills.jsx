import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaTools } from "react-icons/fa";
import { SiTailwindcss,  SiFirebase, SiSupabase, SiFramer,SiAuth0 , SiGithub,  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="skills" className="px-8 md:px-24 py-24 text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        My <span className="text-purple-500">Skills</span>
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Skill Items */}
        {[
          { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
          { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
          { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
          { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
          { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
          { name: "Framer Motion", icon: <SiFramer size={40} className="text-purple-400" /> },
          { name: "Auth0", icon: <SiAuth0 size={40} className="text-orange-400" /> },
          { name: "Firebase", icon: <SiFirebase size={40} className="text-orange-500" /> },
          { name: "Supabase", icon: <SiSupabase size={40} className="text-green-400" /> },
          { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
          { name: "GitHub", icon: <SiGithub size={40} className="text-gray-300" /> },
          { name: "VS Code", icon: <VscVscode size={40} className="text-blue-400" /> },
          { name: "AI Tools", icon: <FaTools size={40} className="text-gray-300" /> },
        ].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center p-6 bg-white/5 
                       backdrop-blur-xl rounded-xl border border-white/10
                       shadow hover:shadow-purple-500/20"
          >
            {skill.icon}
            <p className="mt-3 text-sm">{skill.name}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
