"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image" // Import next/image

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js, featuring payment integration and inventory management.",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, built using Vue.js and Firebase.",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for data visualization using D3.js and Python, helping businesses make data-driven decisions.",
    image: "/placeholder.svg",
    link: "#",
  },
]

const containerVariants = {
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
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
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

export default function FeaturedWork() {
  return (
    <motion.section
      id="projects"
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-muted/20 backdrop-blur-[0.5px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 theme-transition h-full bg-card/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  {" "}
                  {/* Added relative */}
                  <Image // Use next/image
                    src={`${process.env.HOST_ENV}${project.image}`}
                    alt={project.title}
                    // priority
                    // width={200}
                    // height={300}
                    // layout="fill" // Use fill to cover the parent div
                    fill
                    // objectFit="cover"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl lg:text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4 line-clamp-3">{project.description}</CardDescription>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full group bg-transparent">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
