import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from '../UI/AnimatedSection'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kusumaanvesh@gmail.com',
      href: 'mailto:kusumaanvesh@gmail.com',
      copy: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7075828994',
      href: 'tel:+917075828994',
      copy: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: null,
      copy: false,
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' })
      }, 5000)
    }, 1500)
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus({
        type: 'success',
        message: 'Copied to clipboard!',
      })
      setTimeout(() => {
        setStatus({ type: null, message: '' })
      }, 2000)
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Failed to copy',
      })
    }
  }

  return (
    <AnimatedSection id="contact" className="relative bg-[#0f0f0f]">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Have a project in mind? Let's work together to bring it to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <Card>
                <h3 className="text-2xl font-display font-bold mb-6">
                  Contact <span className="gradient-text">Information</span>
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={info.label}
                        variants={staggerItem}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 p-4 glass rounded-lg group cursor-pointer"
                        onClick={() => {
                          if (info.copy) {
                            copyToClipboard(info.value)
                          }
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-purple-400" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white hover:text-purple-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <h3 className="text-xl font-display font-bold mb-4">
                  Follow <span className="gradient-text">Me</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Connect with me on social media
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/anveshsameer"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 glass rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anveshsameer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 glass rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
            >
              <Card>
                <h3 className="text-2xl font-display font-bold mb-6">
                  Send a <span className="gradient-text">Message</span>
                </h3>

                {/* Status Message */}
                <AnimatePresence>
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${
                        status.type === 'success'
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      icon
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Contact

