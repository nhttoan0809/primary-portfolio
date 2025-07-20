"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { smoothScrollWithBounce, smoothScrollSimple } from "../utils/smoothScroll"

const themes = [
  { name: "light", label: "Light", icon: Sun },
  { name: "dark", label: "Dark", icon: Moon },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  const currentTheme = theme === "dark" ? ({
    name: "dark",
    label: "Dark Mode",
    icon: Moon,
  }) : ({
    name: "light",
    label: "Light Mode",
    icon: Sun,
  })

  // const getCurrentTheme = () => {
  //   return themes.find((t) => t.name === theme) || themes[0]
  // }

  const navItems = [
    { name: "Home", href: "#home", noBounce: true },
    { name: "Projects", href: "#projects", noBounce: false },
    { name: "Technical", href: "#technical", noBounce: false },
    { name: "Contact", href: "#contact", noBounce: true },
  ]

  const handleNavClick = (elementId: string, noBounce: boolean) => {
    if (noBounce) {
      smoothScrollSimple(elementId, 80)
    } else {
      smoothScrollWithBounce(elementId, 80, true)
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              className="text-xl font-bold text-foreground cursor-pointer"
              onClick={() => smoothScrollSimple("#home", 80)}
            >
              Your Name
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.noBounce)}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </motion.nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {mounted && <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden md:flex relative"
                title={`Current: ${currentTheme.label}. Click to switch themes.`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <currentTheme.icon className="h-5 w-5" />
                </motion.div>
              </Button>}
            </motion.div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.noBounce)}
                    className="text-foreground hover:text-primary transition-colors duration-200 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Theme Selector */}
                <motion.div
                  className="pt-2 border-t border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <p className="text-sm font-medium text-muted-foreground mb-3">Theme</p>
                  <div className="flex flex-col space-y-2">
                    {themes.map((themeOption) => {
                      const IconComponent = themeOption.icon
                      const isActive = theme === themeOption.name
                      return (
                        <motion.button
                          key={themeOption.name}
                          onClick={() => setTheme(themeOption.name)}
                          className={`flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {mounted && <IconComponent className="h-4 w-4" />}
                          <span className="text-sm">{themeOption.label}</span>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 bg-primary rounded-full ml-auto"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
