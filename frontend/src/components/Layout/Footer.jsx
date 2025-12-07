import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/anveshsameer', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anveshsameer/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kusumaanvesh@gmail.com', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a]">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full glass hover:bg-purple-500/20 transition-colors group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </motion.a>
              )
            })}
          </div>

          {/* Made with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            Made with <span className="text-red-500">❤️</span> using React
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

