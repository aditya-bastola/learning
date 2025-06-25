"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <button onClick={() => scrollToSection("#home")} className="flex items-center space-x-2 touch-manipulation">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">
              Aditya <span className="text-indigo-400">Bastola</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors touch-manipulation",
                    activeSection === item.href.substring(1) ? "text-cyan-400" : "text-gray-300 hover:text-white",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white active:text-cyan-400 transition-colors touch-manipulation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-sm border-b border-slate-700 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-3 py-3 text-base font-medium transition-colors touch-manipulation rounded-lg active:bg-slate-800/50",
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400 bg-slate-800/30"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/20",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
