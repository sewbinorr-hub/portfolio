# Personal Portfolio Hero

A modern, responsive portfolio website with stunning 3D effects, glassmorphism, and smooth animations. Built with React + Vite, Tailwind CSS, and vanilla JavaScript for optimal performance.

## ✨ Features

- **3D Interactive Card** - Tilt effect on hover with smooth transforms
- **Glassmorphism Design** - Modern glass-like UI elements with backdrop blur
- **Dark Theme** - Beautiful dark color scheme with ambient glows
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessibility** - ARIA labels, keyboard navigation, reduced motion support
- **Performance Optimized** - Lazy loading, CSS-only animations, minimal JavaScript
- **Modern Stack** - React 18, Vite, Tailwind CSS 3

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── AmbientGlows.jsx
│   │   └── SocialLinks.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  "primary": "#46ec13",        // Your brand color
  "background-dark": "#050805", // Dark background
  // ... more colors
}
```

### Content

- **Name/Title**: Edit `src/components/Navbar.jsx` and `src/components/Hero.jsx`
- **Profile Image**: Update the image URL in `src/components/ProfileCard.jsx`
- **Stats**: Modify the stats in `ProfileCard.jsx`
- **Social Links**: Update links in `src/components/SocialLinks.jsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build: `npm run build`
2. Deploy `dist` folder to Netlify

### InfinityFree (Static HTML)

1. Build: `npm run build`
2. Upload contents of `dist` folder to your hosting
3. Ensure `.htaccess` is configured for SPA routing (if needed)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Vanilla JS** - 3D tilt effects (no heavy libraries)

## 📝 Optional Enhancements

### Add Framer Motion

```bash
npm install framer-motion
```

### Add Contact Form (EmailJS)

```bash
npm install @emailjs/browser
```

### Add Analytics (Supabase)

```bash
npm install @supabase/supabase-js
```

## 🎯 Performance Tips

- Images are lazy-loaded by default
- CSS animations respect `prefers-reduced-motion`
- Minimal JavaScript for 3D effects
- Optimized build output with Vite

## 📄 License

MIT License - feel free to use this template for your portfolio!

## 🙏 Credits

- Design inspired by modern portfolio trends
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Made with ❤️ using React + Vite + Tailwind CSS
