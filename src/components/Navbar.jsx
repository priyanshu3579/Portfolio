import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id, name) => {
    setActive(name);
    setOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 
          w-[90%] md:w-[75%] 
          bg-[#0d0d12]/70 backdrop-blur-xl
          border border-white/10 rounded-2xl 
          shadow-[0_0_25px_rgba(100,100,255,0.1)]
          z-[99999]
        "
      >
        <div className="flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <h1 className="text-white text-xl font-semibold tracking-wide">
            Priyanshu
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-white">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => handleScroll(link.id, link.name)}
                className="cursor-pointer font-medium relative transition-all duration-300"
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="underline"
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-full 
                      bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full
                    "
                  />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU ICON */}
          <div 
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </motion.nav>

      {/* MOBILE SLIDE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="
            fixed top-20 left-1/2 -translate-x-1/2
            bg-[#0d0d12]/90 backdrop-blur-xl
            w-[90%] rounded-xl p-6 border border-white/10
            shadow-xl md:hidden text-white z-50
          "
        >
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => handleScroll(link.id, link.name)}
                className="cursor-pointer text-lg hover:text-purple-400 transition"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
