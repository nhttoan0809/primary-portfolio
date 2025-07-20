"use client"

import { motion, Variants } from "framer-motion"
import { Facebook, Phone, Mail, Github, ExternalLink } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="border-t relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-muted/30 backdrop-blur-[0.5px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-evenly items-start md:items-center space-y-8 md:space-y-0"
          variants={containerVariants}
        >
          {/* Social Media Section */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <motion.div className="flex flex-col space-y-3" variants={containerVariants}>
              <motion.a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={linkVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={linkVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                <span>+123-456-7890</span>
              </motion.a>
              <motion.a
                href="mailto:info@example.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={linkVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <span>info@example.com</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Links</h3>
            <motion.div className="flex flex-col space-y-3" variants={containerVariants}>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={linkVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="#home"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={linkVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Portfolio</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 pt-6 border-t text-center" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">© 2024 Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
