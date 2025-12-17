# 🚀 Quick Start Guide

## Installation & Setup

```bash
# 1. Navigate to project directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customize Your Portfolio

### 1. Update Personal Information

**Name & Title** (`src/components/Navbar.jsx`):
```jsx
<span className="font-bold text-sm tracking-wide hidden sm:block">Your Name</span>
```

**Hero Section** (`src/components/Hero.jsx`):
```jsx
<h1 className="...">
  Crafting <br />
  <span className="text-gradient">Digital</span> <br />
  Experiences
</h1>
```

**Profile Card** (`src/components/ProfileCard.jsx`):
```jsx
<h3 className="text-2xl font-bold text-white">Your Name</h3>
<p className="text-primary font-medium">Your Title</p>
```

### 2. Update Profile Image

Replace the image URL in `src/components/ProfileCard.jsx`:
```jsx
<img
  alt="Your description"
  src="YOUR_IMAGE_URL_HERE"
  loading="lazy"
/>
```

### 3. Update Stats

Edit the stats in `src/components/ProfileCard.jsx`:
```jsx
<p className="text-white font-bold text-lg">5+</p>
<p className="text-gray-500 text-xs">Years Exp.</p>
```

### 4. Update Social Links

Edit `src/components/SocialLinks.jsx`:
```jsx
const socialLinks = [
  { icon: Code, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  { icon: Terminal, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
]
```

### 5. Update Navigation Links

Edit `src/components/Navbar.jsx`:
```jsx
const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#notes', label: 'Notes' },
]
```

### 6. Change Color Scheme

Edit `tailwind.config.js`:
```js
colors: {
  "primary": "#YOUR_COLOR",  // Your brand color
  // ... other colors
}
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

## 📦 Build for Static Hosting

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

## 🎨 Add More Sections

Create new components in `src/components/` and import them in `App.jsx`:

```jsx
import NewSection from './components/NewSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewSection />  {/* Add your section */}
    </div>
  )
}
```

## 🛠️ Add Contact Form (EmailJS)

1. Install EmailJS:
```bash
npm install @emailjs/browser
```

2. Create `src/components/ContactForm.jsx`:
```jsx
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Error sending message'))
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Your form fields */}
    </form>
  )
}
```

## 📱 Test Responsiveness

- Desktop: 1920px+
- Tablet: 768px - 1024px
- Mobile: 320px - 767px

Use browser DevTools to test different screen sizes.

---

Need help? Check the main [README.md](./README.md) for more details!
