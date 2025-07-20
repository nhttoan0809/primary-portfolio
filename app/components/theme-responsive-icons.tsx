"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Star, Heart, Sparkles, Zap } from "lucide-react"

const decorativeIcons = [
  { Icon: Star, id: 1 },
  { Icon: Heart, id: 2 },
  { Icon: Sparkles, id: 3 },
  { Icon: Zap, id: 4 },
]

export default function ThemeResponsiveIcons() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {decorativeIcons.map((item, index) => {
        const Icon = item.Icon
        return (
          <motion.div
            key={item.id}
            className={`absolute transition-all duration-1000 ${
              isDark
                ? "text-yellow-400/45 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]"
                : "text-blue-600/60 drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]" // Slightly reduced shadow blur
            }`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${15 + index * 15}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 1.5,
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        )
      })}

      {/* Additional scattered icons for better coverage */}
      {Array.from({ length: 4 }).map((_, index) => {
        // Reduced from 6 to 4
        const IconComponent = decorativeIcons[index % decorativeIcons.length].Icon
        return (
          <motion.div
            key={`extra-${index}`}
            className={`absolute transition-all duration-1000 ${
              isDark
                ? "text-purple-400/30 drop-shadow-[0_0_6px_rgba(168,85,247,0.2)]"
                : "text-indigo-600/45 drop-shadow-[0_2px_8px_rgba(99,102,241,0.2)]" // Slightly reduced shadow blur
            }`}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              rotate: [0, -360],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + index * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 2,
            }}
          >
            <IconComponent className="w-6 h-6" />
          </motion.div>
        )
      })}

      {/* Corner decorations */}
      <motion.div
        className={`absolute top-4 right-4 transition-colors duration-1000 ${
          isDark ? "text-purple-400/35" : "text-indigo-600/50 drop-shadow-[0_2px_6px_rgba(99,102,241,0.2)]" // Slightly reduced shadow blur
        }`}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        className={`absolute bottom-4 left-4 transition-colors duration-1000 ${
          isDark ? "text-green-400/35" : "text-emerald-600/50 drop-shadow-[0_2px_6px_rgba(5,150,105,0.2)]" // Slightly reduced shadow blur
        }`}
        animate={{
          rotate: [360, 180, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-6 h-6" />
      </motion.div>

      <motion.div
        className={`absolute top-1/2 left-4 transition-colors duration-1000 ${
          isDark ? "text-cyan-400/30" : "text-teal-600/45 drop-shadow-[0_2px_6px_rgba(13,148,136,0.2)]" // Slightly reduced shadow blur
        }`}
        animate={{
          rotate: [0, 360],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-5 h-5" />
      </motion.div>

      <motion.div
        className={`absolute top-1/3 right-8 transition-colors duration-1000 ${
          isDark ? "text-pink-400/30" : "text-rose-600/45 drop-shadow-[0_2px_6px_rgba(225,29,72,0.2)]" // Slightly reduced shadow blur
        }`}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Star className="w-5 h-5" />
      </motion.div>
    </div>
  )
}
