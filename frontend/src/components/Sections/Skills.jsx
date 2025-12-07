import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiFirebase,
} from 'react-icons/si'
import AnimatedSection from '../UI/AnimatedSection'
import Card from '../UI/Card'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 95, color: 'from-blue-400 to-cyan-400' },
        { name: 'Next.js', icon: null, level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: 'from-yellow-400 to-orange-400' },
        { name: 'Redux', icon: SiRedux, level: 90, color: 'from-purple-400 to-pink-400' },
        { name: 'HTML5', icon: SiHtml5, level: 95, color: 'from-orange-400 to-red-400' },
        { name: 'CSS3', icon: SiCss3, level: 92, color: 'from-blue-400 to-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Bootstrap', icon: null, level: 85, color: 'from-purple-500 to-pink-500' },
      ],
    },
    backend: {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Express', icon: SiExpress, level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'from-green-500 to-green-700' },
        { name: 'REST APIs', icon: null, level: 92, color: 'from-purple-400 to-purple-600' },
        { name: 'AWS Lambda', icon: SiAmazon, level: 80, color: 'from-orange-400 to-yellow-400' },
        { name: 'JWT', icon: null, level: 88, color: 'from-pink-400 to-pink-600' },
      ],
    },
    tools: {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: SiGit, level: 90, color: 'from-orange-400 to-red-400' },
        { name: 'Webpack', icon: null, level: 85, color: 'from-blue-400 to-cyan-400' },
        { name: 'Docker', icon: SiDocker, level: 80, color: 'from-blue-400 to-cyan-400' },
        { name: 'Kubernetes', icon: null, level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', icon: SiAmazon, level: 80, color: 'from-orange-400 to-yellow-400' },
        { name: 'CI/CD', icon: null, level: 85, color: 'from-green-400 to-green-600' },
        { name: 'GTM/GA4', icon: null, level: 85, color: 'from-purple-400 to-pink-400' },
      ],
    },
  }

  const SkillBar = ({ skill, index }) => {
    const Icon = skill.icon

    return (
      <motion.div
        variants={staggerItem}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Icon && (
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl"
              >
                <Icon />
              </motion.div>
            )}
            <span className="font-medium text-white">{skill.name}</span>
          </div>
          <span className="text-sm text-gray-400">{skill.level}%</span>
        </div>
        <div className="relative h-2 glass rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1, duration: 1, ease: 'easeOut' }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatedSection id="skills" className="relative bg-[#0f0f0f]">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'gradient-bg text-white shadow-lg shadow-purple-500/50'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {skillCategories[category].name}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </Card>
          </motion.div>

          {/* Icon Grid - All Skills */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <h3 className="text-2xl font-display font-bold text-center mb-8">
              All <span className="gradient-text">Technologies</span>
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {Object.values(skillCategories).flatMap(category =>
                category.skills
                  .filter(skill => skill.icon)
                  .map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={`${category.name}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="flex flex-col items-center gap-2 p-4 glass rounded-xl group cursor-default"
                      >
                        <Icon className="text-4xl text-gray-400 group-hover:text-purple-400 transition-colors" />
                        <span className="text-xs text-gray-500 text-center">{skill.name}</span>
                      </motion.div>
                    )
                  })
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Skills

