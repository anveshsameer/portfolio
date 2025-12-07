import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  icon = false,
  ...props 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'gradient-bg text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105',
    secondary: 'glass text-white hover:bg-white/20 hover:scale-105',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:scale-105',
  }

  const buttonContent = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button

