"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { smoothScrollWithBounce } from "../utils/smoothScroll"
import Image from "next/image"

export default function HeroSection() {
  const handleScrollTo = (elementId: string) => {
    smoothScrollWithBounce(elementId, 80) // 80px offset for fixed header
  }

  return (
    <section
      id="home"
      className="pt-16 py-20 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-muted gradient-transition"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Avatar Section - 3 parts */}
          <motion.div
            className="w-full lg:w-3/10 flex justify-center pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl theme-transition"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg"
                width={300}
                height={300}
                priority
                alt="Your Name - Professional Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Section - 7 parts */}
          <div className="w-full lg:w-7/10 text-center lg:text-left">
            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to <span className="text-primary">Your Name</span>
            </motion.h1>

            {/* Detailed Description */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Building innovative solutions with modern technologies and creative problem-solving
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                I&nbsp;m a passionate developer with expertise in full-stack development, specializing in creating scalable
                web applications and user-centric digital experiences. With a strong foundation in modern frameworks and
                a keen eye for design, I transform complex ideas into elegant, functional solutions.
              </p>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 py-3" onClick={() => handleScrollTo("#projects")}>
                  View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 bg-transparent"
                  onClick={() => handleScrollTo("#contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
