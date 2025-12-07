import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../UI/AnimatedSection'
import Card from '../UI/Card'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [stats, setStats] = useState([
    { label: 'Years Experience', value: 0, target: 6, suffix: '+' },
    { label: 'Projects Delivered', value: 0, target: 25, suffix: '+' },
    { label: 'Monthly Active Users', value: 0, target: 1, suffix: 'M+' },
    { label: 'Uptime', value: 0, target: 99.99, suffix: '%' },
  ])

  useEffect(() => {
    if (isInView) {
      const timers = []
      const initialStats = [
        { label: 'Years Experience', value: 0, target: 6, suffix: '+' },
        { label: 'Projects Delivered', value: 0, target: 25, suffix: '+' },
        { label: 'Monthly Active Users', value: 0, target: 1, suffix: 'M+' },
        { label: 'Uptime', value: 0, target: 99.99, suffix: '%' },
      ]

      initialStats.forEach((stat, index) => {
        const duration = 2000
        const steps = 60
        const increment = stat.target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            setStats(prev => {
              const newStats = [...prev]
              newStats[index].value = stat.target
              return newStats
            })
            clearInterval(timer)
          } else {
            setStats(prev => {
              const newStats = [...prev]
              newStats[index].value = Math.floor(current)
              return newStats
            })
          }
        }, duration / steps)
        
        timers.push(timer)
      })

      return () => {
        timers.forEach(timer => clearInterval(timer))
      }
    }
  }, [isInView])

  const skills = [
    'React', 'Next.js', 'Node.js', 'Express', 'JavaScript', 'Redux',
    'Redux Saga', 'MongoDB', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    'Webpack', 'Git', 'REST APIs', 'AWS', 'Docker', 'Kubernetes'
  ]

  return (
    <AnimatedSection id="about" className="relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Get to know more about my journey and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image & Info */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative glass rounded-2xl p-2">
                  <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </motion.div>

              <Card className="space-y-4">
                <h3 className="text-2xl font-display font-bold gradient-text">
                  Professional Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Senior Software Development Engineer with 6+ years of experience building 
                  scalable web applications. I specialize in React, Node.js, and modern JavaScript 
                  frameworks, with a strong focus on performance optimization and user experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently working at Suventure Services, I've led frontend revamps for major media 
                  platforms like NDTV Profit, supporting 1M+ monthly active users with 99.99% uptime. 
                  I'm passionate about reducing build sizes, optimizing Core Web Vitals, and delivering 
                  exceptional digital experiences.
                </p>
              </Card>
            </motion.div>

            {/* Stats & Skills */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-6 text-center"
                  >
                    <motion.div
                      className="text-4xl font-display font-bold gradient-text"
                    >
                      {stat.value}{stat.suffix}
                    </motion.div>
                    <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Skills */}
              <Card>
                <h3 className="text-xl font-display font-bold mb-4">
                  Core <span className="gradient-text">Skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default About

