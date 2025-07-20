"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Code, Zap, Cpu, Globe, Database, Layers, GitBranch, Smartphone } from "lucide-react"

const floatingIcons = [
  { Icon: Code, id: 1 },
  { Icon: Zap, id: 2 },
  { Icon: Cpu, id: 3 },
  { Icon: Globe, id: 4 },
  { Icon: Database, id: 5 },
  { Icon: Layers, id: 6 },
  { Icon: GitBranch, id: 7 },
  { Icon: Smartphone, id: 8 },
]

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>
  delay: number
  x: number
  y: number
  theme: string | undefined
}

function FloatingIcon({ Icon, delay, x, y, theme }: FloatingIconProps) {
  const isDark = theme === "dark"

  return (
    <motion.div
      className={`absolute pointer-events-none transition-colors duration-500 ${
        isDark ? "text-primary/25" : "text-primary/40"
      }`}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 180, 360],
        y: [-20, -40, -60, -80],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Icon className={`w-6 h-6 ${isDark ? "drop-shadow-lg" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"}`} />
    </motion.div>
  )
}

export default function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full blur-3xl transition-colors duration-1000 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-500/12 to-purple-500/12"
            : "bg-gradient-to-r from-blue-500/15 to-purple-500/15"
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      <motion.div
        className={`absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-1000 ${
          theme === "dark"
            ? "bg-gradient-to-r from-green-500/12 to-cyan-500/12"
            : "bg-gradient-to-r from-green-500/15 to-cyan-500/15"
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "60%", right: "15%" }}
      />

      <motion.div
        className={`absolute w-72 h-72 rounded-full blur-3xl transition-colors duration-1000 ${
          theme === "dark"
            ? "bg-gradient-to-r from-pink-500/12 to-orange-500/12"
            : "bg-gradient-to-r from-pink-500/15 to-orange-500/15"
        }`}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", left: "20%" }}
      />

      {/* Additional orbs for better coverage */}
      <motion.div
        className={`absolute w-64 h-64 rounded-full blur-3xl transition-colors duration-1000 ${
          theme === "dark"
            ? "bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
            : "bg-gradient-to-r from-violet-500/12 to-indigo-500/12"
        }`}
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "40%", left: "60%" }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={item.id}
          Icon={item.Icon}
          delay={index * 1.5}
          x={Math.random() * 80 + 10}
          y={Math.random() * 80 + 10}
          theme={theme}
        />
      ))}

      {/* More animated particles for better coverage */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute w-1 h-1 rounded-full transition-colors duration-500 ${
            theme === "dark" ? "bg-primary/35" : "bg-primary/50"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 6,
            delay: index * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Additional geometric shapes */}
      <motion.div
        className={`absolute w-20 h-20 border transition-colors duration-500 ${
          theme === "dark" ? "border-primary/25" : "border-primary/35"
        }`}
        style={{ top: "30%", left: "80%" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className={`absolute w-16 h-16 rounded-full border-2 transition-colors duration-500 ${
          theme === "dark" ? "border-primary/30" : "border-primary/40"
        }`}
        style={{ top: "70%", left: "70%" }}
        animate={{
          rotate: [360, 0],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute w-12 h-12 rotate-45 border transition-colors duration-500 ${
          theme === "dark" ? "border-primary/20" : "border-primary/30"
        }`}
        style={{ top: "15%", right: "25%" }}
        animate={{
          rotate: [45, 405],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
