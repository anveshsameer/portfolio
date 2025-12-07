import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import AnimatedSection from '../UI/AnimatedSection'
import Card from '../UI/Card'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior SDE',
      company: 'Suventure Services Pvt Ltd',
      location: 'Remote',
      period: 'March 2022 – Present',
      description: 'Suventure specializes in cutting-edge media services, working closely with leading digital adopters in the media industry such as NDTV Profit, Deccan Herald, and The Quint.',
      achievements: [
        'Led frontend revamp for NDTV Profit, reducing Time to Interactive (TTI) by ~40%',
        'Reduced build size by 18% through Webpack optimization and code-splitting',
        'Supported 1M+ monthly active users with 99.99% uptime for critical business content',
        'Improved CLS & LCP scores, leading to better Core Web Vitals and SEO lift',
        'Built React-based authentication dashboard (Logana) with real-time configuration',
        'Delivered automated compliance platform at Saltmine, cutting review time from days to minutes',
        '"Top Contributor" recognition for 3 consecutive quarters',
      ],
      type: 'work',
    },
    {
      title: 'Software Engineer',
      company: 'Sun Icon Systems Pvt. Ltd',
      location: 'Hyderabad',
      period: 'June 2018 – February 2022',
      description: 'Sun Icon delivers custom enterprise software across healthcare, finance, and pharma domains.',
      achievements: [
        'Built responsive dashboards and loan tools for LendingTree',
        'Created SPA frontend with ReactJS and Bootstrap 4',
        'Managed app state with Redux and Redux Saga',
        'Developed authentication flows using JWT',
        'Delivered R&D internal portals for Laurus Labs with robust UI and test coverage',
        'Led UI module development and mentored junior developers',
        'Contributed to reduced code defects and faster UAT approval cycles',
      ],
      type: 'work',
    },
  ]

  return (
    <AnimatedSection id="experience" className="relative bg-[#0f0f0f]">
      <div className="container-custom">
        <motion.div
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
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              A timeline of my professional journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0
                const AnimationVariant = isEven ? fadeInLeft : fadeInRight

                return (
                  <motion.div
                    key={index}
                    variants={AnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: 'spring' }}
                        className="w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0f0f0f] shadow-lg shadow-purple-500/50"
                      />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="relative overflow-hidden group">
                          {/* Gradient Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative space-y-4">
                            {/* Date Badge */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.1 }}
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30"
                            >
                              <Calendar className="w-4 h-4 text-purple-400" />
                              <span className="text-sm font-medium text-purple-300">{exp.period}</span>
                            </motion.div>

                            {/* Title & Company */}
                            <div>
                              <h3 className="text-2xl font-display font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-medium">{exp.company}</span>
                                <span className="mx-2">•</span>
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed">
                              {exp.description}
                            </p>

                            {/* Achievements */}
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.2 + i * 0.1 }}
                                  className="flex items-start gap-2 text-gray-400"
                                >
                                  <span className="text-purple-400 mt-1">▹</span>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Experience
