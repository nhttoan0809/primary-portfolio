"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { smoothScrollWithBounce } from "../utils/smoothScroll"

interface ScrollIndicatorProps {
  targetSection: string
  className?: string
}

export default function ScrollIndicator({ targetSection, className = "" }: ScrollIndicatorProps) {
  const handleClick = () => {
    smoothScrollWithBounce(targetSection, 80, true) // Subtle bounce for scroll indicator
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <span className="text-sm font-medium">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.button>
  )
}
