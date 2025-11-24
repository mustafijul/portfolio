import {
  FiHome,
  FiFileText,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function BottomNav() {
  
  // ✅ Move this OUTSIDE JSX
  const hoverMotion = {
    scale: 1.35,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 8,
    },
  };

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-20">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="flex items-center gap-6 px-6 py-3 bg-white/70 border backdrop-blur-xl shadow-xl rounded-full"
      >

        <motion.a whileHover={hoverMotion} href="#">
          <FiHome size={20} />
        </motion.a>

        <div className="w-px h-6 bg-gray-300"></div>

        <motion.a whileHover={hoverMotion}>
          <FiFileText size={20} />
        </motion.a>

        <motion.a whileHover={hoverMotion}>
          <FiGithub size={20} />
        </motion.a>

        <motion.a whileHover={hoverMotion}>
          <FiLinkedin size={20} />
        </motion.a>

        <motion.a whileHover={hoverMotion}>
          <FaXTwitter size={19} />
        </motion.a>

      </motion.div>
    </div>
  );
}
