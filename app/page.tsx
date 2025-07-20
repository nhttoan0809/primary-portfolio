import Header from "./components/header"
import EnhancedHeroSection from "./components/enhanced-hero-section"
import FeaturedWork from "./components/featured-work"
import TechnicalSection from "./components/technical-section"
import Footer from "./components/footer"
import AnimatedBackground from "./components/animated-background"
import ThemeResponsiveIcons from "./components/theme-responsive-icons"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <ThemeResponsiveIcons />
      <div className="relative z-30">
        <Header />
        <main className="relative">
          <EnhancedHeroSection />
          <FeaturedWork />
          <TechnicalSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
