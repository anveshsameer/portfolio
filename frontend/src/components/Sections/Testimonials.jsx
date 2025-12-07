import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import AnimatedSection from '../UI/AnimatedSection'
import Card from '../UI/Card'
import { fadeInUp, staggerContainer } from '../../utils/animations'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      company: 'InnovateTech',
      image: '👨‍💼',
      content: 'Outstanding work! The developer delivered a high-quality application that exceeded our expectations. The attention to detail and technical expertise is remarkable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Digital Solutions',
      image: '👩‍💼',
      content: 'Working with this developer was a pleasure. They understood our requirements perfectly and delivered on time. The code quality and documentation were excellent.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'CloudTech Inc.',
      image: '👨‍💻',
      content: 'Exceptional full-stack developer with deep knowledge of modern technologies. The solutions provided were scalable, maintainable, and well-architected.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'StartupHub',
      image: '👩‍🎨',
      content: 'The developer transformed our vision into reality. The user experience is smooth, and the performance is outstanding. Highly recommended!',
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <AnimatedSection id="testimonials" className="relative">
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              What people say about working with me
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className="relative h-96"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Card className="h-full flex flex-col">
                    <div className="flex-1 space-y-6">
                      {/* Quote Icon */}
                      <div className="flex justify-start">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                          className="p-3 rounded-full bg-purple-500/20"
                        >
                          <Quote className="w-8 h-8 text-purple-400" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <p className="text-lg text-gray-300 leading-relaxed italic">
                        "{testimonials[currentIndex].content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="text-yellow-400 text-xl"
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="text-4xl">{testimonials[currentIndex].image}</div>
                        <div>
                          <h4 className="text-xl font-display font-bold text-white">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-400">
                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 glass rounded-full text-white hover:bg-purple-500/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 glass rounded-full text-white hover:bg-purple-500/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 gradient-bg'
                    : 'w-2 glass'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Testimonials

