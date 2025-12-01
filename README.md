# Ariel Santos TechMentor Website

Professional IT consulting and technology strategy website for Ariel Santos TechMentor, a veteran-owned IT services business.

## 🎯 About

This is the official website for **Ariel Santos TechMentor**, showcasing comprehensive IT solutions including cloud computing, network architecture, web development, and IT support services. Built with modern web technologies to deliver a premium, professional experience.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Montserrat, Poppins, Nunito (Google Fonts)
- **Analytics**: Google Analytics 4 (GA4)
- **Deployment**: Vercel

## ✨ Features

### Professional Design
- 🎨 Dark mode with orange accent colors (#FF9800)
- ✨ Custom light ray animations and visual effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 3D tilt effects and smooth animations
- 🖼️ Optimized images and media

### Key Sections
- **Hero Section**: Dynamic video background with professional branding
- **About**: Military background and professional expertise
- **Services Portfolio**: 6 comprehensive IT service offerings
- **Approach**: Mission-critical mindset and tailored solutions
- **Contact**: Integrated consultation booking and contact forms

### Services Highlighted
1. Cloud Computing - Infrastructure & storage solutions
2. IT Support & Maintenance - Help desk & monitoring
3. Network Architecture - Modern network solutions
4. Web Development - Custom website creation
5. Infrastructure Assessment - IT health checks
6. Ops Resilience - IT optimization & hardening

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd new-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & analytics
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with video background
│   ├── WhoThisIsFor.tsx    # About section
│   ├── ImageSection.tsx    # Approach section with collage
│   ├── Portfolio.tsx       # Services showcase
│   ├── Consulting.tsx      # Why choose us section
│   ├── Footer.tsx          # Footer with contact info
│   ├── Navigation.tsx      # Navigation bar
│   └── LightRays.tsx       # Custom light ray effect
└── lib/
    └── analytics.ts        # Google Analytics utilities
```

## 🎨 Customization

### Colors
The primary brand color is orange (#FF9800). To change it, update references in:
- Component className props: `text-[#FF9800]`, `bg-[#FF9800]`, etc.
- Tailwind config (if needed)

### Content
- **Services**: Edit `src/components/Portfolio.tsx`
- **About Info**: Edit `src/components/WhoThisIsFor.tsx`
- **Approach**: Edit `src/components/ImageSection.tsx`
- **Hero Text**: Edit `src/components/Hero.tsx`

### Analytics
Update Google Analytics ID in `src/app/layout.tsx`:
```tsx
gtag('config', 'G-S5VCYRETYC');
```

## 📊 Analytics

The site includes Google Analytics 4 (GA4) tracking with custom events:
- Button clicks
- External link tracking
- Form submissions
- Video interactions

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

The site will automatically deploy on every push to the main branch.

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

© 2024 Ariel Santos. All rights reserved.

## 🤝 Contact

- **Website**: [arielsantos.space](https://arielsantos.space)
- **Email**: info@arielsantos.space

---

Built with ❤️ by Ariel Santos IT Consulting
