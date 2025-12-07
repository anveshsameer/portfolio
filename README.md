# Modern MERN Developer Portfolio

A stunning, modern personal portfolio website built with React, featuring jaw-dropping animations, fluid design, and a rich UI. Perfect for showcasing your professional experience and journey as a MERN stack developer.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Smooth Animations**: Powered by Framer Motion for fluid, eye-catching transitions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive UI**: Hover effects, scroll animations, and micro-interactions
- **Sections**:
  - Hero section with typing animation and particle effects
  - About section with animated stats
  - Experience timeline with alternating animations
  - Projects showcase with 3D hover effects and modals
  - Skills section with animated progress bars
  - Testimonials carousel with auto-play
  - Contact form with validation

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📦 Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Layout/        # Navbar, Footer
│   │   ├── Sections/      # Hero, About, Experience, etc.
│   │   └── UI/            # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles and animations
├── public/                # Static assets
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Sections/Hero.jsx`
   - Update name, title, and description

2. **About Section**: Edit `src/components/Sections/About.jsx`
   - Update bio, stats, and skills

3. **Experience**: Edit `src/components/Sections/Experience.jsx`
   - Update work experience entries

4. **Projects**: Edit `src/components/Sections/Projects.jsx`
   - Add your projects with details

5. **Skills**: Edit `src/components/Sections/Skills.jsx`
   - Update skill categories and proficiency levels

6. **Contact**: Edit `src/components/Sections/Contact.jsx`
   - Update contact information and social links

7. **Footer**: Edit `src/components/Layout/Footer.jsx`
   - Update social media links

### Colors & Theme

Edit `tailwind.config.js` to customize colors and theme:
- Primary colors
- Gradient colors
- Background colors

### SEO

Update `index.html` with your personal information:
- Meta tags
- Open Graph tags
- Twitter cards

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

Made with ❤️ using React and Framer Motion

