import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'

const AnimatedSection = ({ 
  children, 
  className = '',
  id,
  ...props 
}) => {
  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className={`section-padding ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

