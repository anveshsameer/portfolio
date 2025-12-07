import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import ParticleBackground from '../UI/ParticleBackground'
import Button from '../UI/Button'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    let timeout
    let currentIndex = 0
    let isDeleting = false
    let typingSpeed = 100
    const currentRole = roles[currentRoleIndex]

    const type = () => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, currentIndex + 1))
        currentIndex++
        typingSpeed = 100
        timeout = setTimeout(type, typingSpeed)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentRole.substring(0, currentIndex - 1))
        currentIndex--
        typingSpeed = 50
        timeout = setTimeout(type, typingSpeed)
      } else if (currentIndex === currentRole.length) {
        // Wait before deleting
        timeout = setTimeout(() => {
          isDeleting = true
          type()
        }, 2000)
      } else if (currentIndex === 0 && isDeleting) {
        // Move to next role after deleting
        isDeleting = false
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    // Start typing when role changes
    timeout = setTimeout(type, 500)

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentRoleIndex])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 animate-gradient" />
      
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-purple-400 font-medium text-lg"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold">
              <span className="gradient-text">KUSUMA ANVESH SAMEER</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium">
              <span className="text-white">I'm a </span>
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Senior Software Development Engineer specializing in React, Node.js, and modern web technologies.
            Passionate about performance optimization, scalable architectures, and delivering exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              variant="primary"
              icon
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="secondary"
            >
              Get In Touch
            </Button>
            <Button
              href="/resume.pdf"
              variant="outline"
              className="group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

