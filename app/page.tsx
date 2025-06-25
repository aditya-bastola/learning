"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Globe, Twitter, Code, Database, Rocket, ChevronDown, Play } from "lucide-react"
import Image from "next/image"

const skills = [
  { number: "01.", name: "Python" },
  { number: "02.", name: "Java" },
  { number: "03.", name: "HTML + CSS" },
  { number: "04.", name: "JavaScript" },
  { number: "05.", name: "React" },
  { number: "06.", name: "Node.js" },
  { number: "07.", name: "Git & GitHub" },
  { number: "08.", name: "Problem Solving" },
  { number: "09.", name: "Data Structures" },
  { number: "10.", name: "Algorithms" },
]

const positions = [
  {
    icon: Code,
    title: "Software Development",
    description: "Building scalable web applications and systems",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Rocket,
    title: "Startup Enthusiast",
    description: "Passionate about entrepreneurship and innovation",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Full Stack Development",
    description: "Creating end-to-end solutions from frontend to backend",
    gradient: "from-purple-500 to-pink-600",
  },
]

export default function HomePage() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <Navigation />

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-8">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Welcome, I'm</h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Aditya Bastola
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-6">
                Computer Science Student & Aspiring Entrepreneur
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                Incoming Computer Science major at Purdue University with a passion for building innovative solutions.
                I'm fascinated by the startup ecosystem and love creating technology that makes a difference.
              </p>

              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg mb-8 md:mb-12 shadow-lg shadow-indigo-500/25 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95 touch-manipulation"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect!
                  <span className="group-hover:translate-x-1 group-active:scale-110 transition-transform duration-300">
                    🚀
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              </Button>

              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  {
                    icon: Github,
                    href: "#",
                    color: "from-indigo-500 to-purple-600",
                    hoverColor: "from-purple-600 to-indigo-500",
                  },
                  {
                    icon: Linkedin,
                    href: "#",
                    color: "from-cyan-500 to-blue-600",
                    hoverColor: "from-blue-600 to-cyan-500",
                  },
                  {
                    icon: Globe,
                    href: "#",
                    color: "from-purple-500 to-pink-600",
                    hoverColor: "from-pink-600 to-purple-500",
                  },
                  {
                    icon: Twitter,
                    href: "#",
                    color: "from-blue-500 to-cyan-600",
                    hoverColor: "from-cyan-600 to-blue-500",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${social.color} hover:scale-110 active:scale-95 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden touch-manipulation`}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white z-10 group-hover:rotate-12 group-active:rotate-45 transition-transform duration-300" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:block">
              <div className="relative">
                {/* Hexagonal frame with gradient border */}
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 transform rotate-45 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/25 p-3 md:p-4">
                  <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Profile Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center transform -rotate-45 scale-125"
                      style={{
                        objectPosition: "center 20%",
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 transform rotate-45 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="group text-cyan-400 hover:text-cyan-300 active:text-cyan-500 transition-colors p-2 rounded-full hover:bg-cyan-400/10 active:bg-cyan-400/20 touch-manipulation"
          >
            <ChevronDown className="w-8 h-8 group-hover:translate-y-1 group-active:translate-y-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-10rem)] gap-8">
            <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Hexagonal frame with gradient border */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 transform rotate-45 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/25 p-3">
                  <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Profile Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center transform -rotate-45 scale-125"
                      style={{
                        objectPosition: "center 20%",
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 transform rotate-45 rounded-3xl blur-xl"></div>
              </div>
            </div>

            <div className="flex-1 max-w-2xl text-center lg:text-left lg:pl-16 order-1 lg:order-2">
              <p className="text-cyan-400 text-lg mb-4 font-medium">My Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                About Me
              </h1>

              <div className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                <p className="mb-4">
                  👋 Hey! I'm Aditya, an incoming Computer Science major at Purdue University. I'm passionate about
                  technology and entrepreneurship, always looking for ways to solve real-world problems through code.
                </p>
                <p className="mb-4">
                  My journey in tech started with curiosity and has grown into a deep love for building things that
                  matter. I'm particularly interested in the startup ecosystem and dream of creating my own company
                  someday.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, reading about successful
                  entrepreneurs, or brainstorming the next big idea!
                </p>
              </div>

              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg shadow-lg shadow-indigo-500/25 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95 touch-manipulation"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <span className="group-hover:translate-x-1 group-active:scale-110 transition-transform duration-300">
                    📧
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills Section */}
          <div className="mb-32">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              <div className="flex-1 max-w-md text-center lg:text-left">
                <p className="text-cyan-400 text-lg mb-4 font-medium">Technical Skills</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                  My Skills
                </h1>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  Programming languages and technologies I've been learning and working with during my journey into
                  computer science.
                </p>
                <Button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg shadow-lg shadow-indigo-500/25 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95 touch-manipulation"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <span className="group-hover:translate-x-1 group-active:scale-110 transition-transform duration-300">
                      💻
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </Button>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer p-2 rounded-lg hover:bg-slate-800/30 active:bg-slate-800/50 transition-all duration-300 touch-manipulation"
                  >
                    <span className="text-cyan-400 font-bold text-base md:text-lg group-hover:text-indigo-400 group-active:text-purple-400 transition-colors group-hover:scale-110 group-active:scale-125 duration-300">
                      {skill.number}
                    </span>
                    <span className="text-white text-base md:text-lg group-hover:text-cyan-300 group-active:text-cyan-200 transition-colors group-hover:translate-x-2 group-active:translate-x-3 duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div>
            <div className="text-center mb-16">
              <p className="text-cyan-400 text-lg mb-4 font-medium">My Interests</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                What I Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {positions.map((position, index) => (
                <Card
                  key={index}
                  className="group bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 active:border-indigo-500/70 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-110 hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-2xl active:shadow-indigo-500/30 cursor-pointer touch-manipulation"
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${position.gradient} rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-active:scale-125 group-hover:rotate-6 group-active:rotate-12 transition-all duration-300`}
                    >
                      <position.icon className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 group-active:scale-125 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-cyan-300 group-active:text-cyan-200 transition-colors duration-300">
                      {position.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-200 group-active:text-gray-100 transition-colors duration-300">
                      {position.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-lg mb-4 font-medium">My Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12">
              Projects
            </h1>
          </div>

          <div className="flex justify-center">
            <div className="group relative w-full max-w-md cursor-pointer touch-manipulation">
              {/* Wild Run Project Card */}
              <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/25 transition-all duration-500 group-hover:scale-105 group-active:scale-110 group-hover:shadow-3xl group-hover:shadow-green-500/40">
                {/* Clear Still Jungle Background */}
                <div className="absolute inset-0">
                  {/* Sky gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-green-300/20 via-green-500/30 to-green-800/50"></div>

                  {/* Tree silhouettes */}
                  <div className="absolute bottom-0 left-0 w-full h-3/4">
                    {/* Large trees */}
                    <div className="absolute bottom-0 left-4 w-8 h-32 bg-green-900/60 rounded-t-full"></div>
                    <div className="absolute bottom-0 left-8 w-12 h-40 bg-green-800/70 rounded-t-full"></div>
                    <div className="absolute bottom-0 right-8 w-10 h-36 bg-green-900/60 rounded-t-full"></div>
                    <div className="absolute bottom-0 right-4 w-6 h-28 bg-green-800/50 rounded-t-full"></div>

                    {/* Medium trees */}
                    <div className="absolute bottom-0 left-16 w-6 h-24 bg-green-900/50 rounded-t-full"></div>
                    <div className="absolute bottom-0 right-16 w-8 h-30 bg-green-800/60 rounded-t-full"></div>
                    <div className="absolute bottom-0 left-1/3 w-7 h-26 bg-green-900/55 rounded-t-full"></div>
                    <div className="absolute bottom-0 right-1/3 w-9 h-32 bg-green-800/65 rounded-t-full"></div>

                    {/* Tree canopies */}
                    <div className="absolute bottom-24 left-2 w-16 h-16 bg-green-700/40 rounded-full"></div>
                    <div className="absolute bottom-28 left-6 w-20 h-20 bg-green-600/50 rounded-full"></div>
                    <div className="absolute bottom-26 right-6 w-18 h-18 bg-green-700/45 rounded-full"></div>
                    <div className="absolute bottom-20 right-2 w-14 h-14 bg-green-800/40 rounded-full"></div>

                    {/* Vines and foliage */}
                    <div className="absolute top-8 left-12 w-2 h-20 bg-green-600/30 rounded-full transform rotate-12"></div>
                    <div className="absolute top-12 right-12 w-1 h-16 bg-green-700/35 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-16 left-1/2 w-1 h-12 bg-green-600/25 rounded-full transform rotate-6"></div>

                    {/* Ground vegetation */}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                  </div>

                  {/* Sunlight filtering through */}
                  <div className="absolute top-4 right-8 w-16 h-16 bg-yellow-300/10 rounded-full blur-sm"></div>
                  <div className="absolute top-12 left-16 w-12 h-12 bg-yellow-200/8 rounded-full blur-sm"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Pixelcraft title */}
                  <h2 className="text-4xl md:text-5xl pixelcraft-title mb-6">WILD RUN</h2>

                  {/* Play button */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 group-hover:bg-white/30 group-active:bg-white/40 transition-all duration-300 group-hover:scale-110 group-active:scale-125">
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Description overlay */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 group-hover:bg-black/60 transition-all duration-300">
                    <p className="text-white text-lg font-medium mb-2">Platformer Game</p>
                    <p className="text-green-200 text-sm">Coded with Java Swing</p>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-6 flex gap-3 justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-lg border border-white/30 text-white text-base font-medium transition-all duration-300 hover:scale-105 active:scale-110 touch-manipulation">
                      <Github className="w-5 h-5" />
                      View Code
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-lg mb-4 font-medium">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12">
              Contact Me
            </h1>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
            <form className="relative space-y-6 max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Enter your name"
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 h-12 md:h-14 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 hover:border-indigo-400/50 active:border-indigo-500 touch-manipulation"
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 h-12 md:h-14 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-400/50 active:border-cyan-500 touch-manipulation"
                />
              </div>

              <Textarea
                placeholder="Enter your message"
                rows={6}
                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 resize-none focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 hover:border-purple-400/50 active:border-purple-500 touch-manipulation"
              />

              <div className="text-center pt-6">
                <Button className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg shadow-lg shadow-indigo-500/25 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95 touch-manipulation">
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <span className="group-hover:translate-x-1 group-hover:rotate-12 group-active:translate-x-2 group-active:rotate-45 transition-all duration-300">
                      ✈️
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
