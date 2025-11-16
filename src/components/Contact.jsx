import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // -------------------------------------
  // SEND TO WHATSAPP LOGIC
  // -------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload

    const { name, email, message } = form;

    const text = `New message from Portfolio:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/917042032263?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="px-8 md:px-24 py-24 text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Contact <span className="text-purple-500">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Feel free to contact me for projects, collaborations or any opportunities.
          </p>

          <div className="flex gap-6 mt-8">
            <a 
              href="https://github.com/priyanshu3579" 
              target="_blank"
              className="text-2xl hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/917042032263" 
              target="_blank"
              className="text-2xl hover:text-green-400 transition"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp"
                className="w-7 h-7"
              />
            </a>

            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshu35790@gmail.com"
              target="_blank"
              className="text-2xl hover:text-red-400 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Gmail"
                className="w-7 h-7"
              />
            </a>




          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          onSubmit={handleSubmit}  // WORKING FORM SUBMIT LOGIC
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-purple-500 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-purple-500 transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-purple-500 transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="px-6 py-3 bg-purple-600 rounded-xl"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
