"use client"

import { motion, Variants } from "framer-motion"
import { Code, GitBranch, Smartphone, Globe, Server, Cpu, Container, Wrench, Database, Cloud } from "lucide-react"

const technologies = {
  frameworks: [
    { name: "React", icon: Code },
    { name: "Angular", icon: Globe },
    { name: "Vue", icon: Smartphone },
  ],
  languages: [
    { name: "JavaScript", icon: Code },
    { name: "Python", icon: Server },
    { name: "Java", icon: Cpu },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "Jenkins", icon: Wrench },
  ],
  other: [
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "PostgreSQL", icon: Database },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const categoryVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

const techItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function TechnicalSection() {
  return (
    <motion.section
      id="technical"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div className="space-y-12" variants={containerVariants}>
          {Object.entries(technologies).map(([category, items]) => (
            <motion.div key={category} className="text-center" variants={categoryVariants}>
              <motion.h3 className="text-2xl font-semibold text-foreground mb-8 capitalize" variants={techItemVariants}>
                {category}
              </motion.h3>
              <motion.div className="flex flex-wrap justify-center gap-6 md:gap-8" variants={categoryVariants}>
                {items.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center group"
                      variants={techItemVariants}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 border border-border/50 theme-transition backdrop-blur-sm"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </motion.div>
                      <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
