# Blake Morgan Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This site showcases Blake Morgan's work as a professional performer, music director, and musician.

## 🌟 Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Customizable Colors**: Easy-to-modify color scheme using CSS variables
- **Professional Layout**: Clean sections for About, Experience, Gallery, and Contact
- **SEO Optimized**: Proper meta tags and OpenGraph support
- **Fast Performance**: Optimized images and modern web practices
- **Accessibility**: ARIA labels and keyboard navigation support

## 🎨 Color Scheme

The website uses a customizable three-color system:
- **Primary (Blue)**: Main brand color for CTAs and highlights
- **Secondary (Green)**: Supporting color for variety and accents  
- **Accent (Orange)**: Special highlights and calls-to-action

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and color system
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with profile
│   ├── About.tsx        # About section with bio and skills
│   ├── Experience.tsx   # Theatre and music credits
│   ├── Gallery.tsx      # Photo gallery with lightbox
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Site footer
└── config/
    └── portfolio.ts     # Configuration file for easy customization
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your assets**
   - Place your photos in the `public/` directory
   - Update the resume file as `public/Resume.pdf`
   - Modify image references in `src/config/portfolio.ts`

4. **Customize content**
   - Edit `src/config/portfolio.ts` to update personal information, experience, and skills
   - Modify colors in `src/app/globals.css` by changing CSS variable values

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Customizing Colors

To change the color scheme, modify the CSS variables in `src/app/globals.css`:

```css
:root {
  /* Primary Colors - Change these hex values */
  --color-primary-500: #3b82f6;  /* Main blue */
  --color-primary-600: #2563eb;  /* Darker blue */
  
  /* Secondary Colors - Change these hex values */
  --color-secondary-500: #22c55e; /* Main green */
  --color-secondary-600: #16a34a; /* Darker green */
  
  /* Accent Colors - Change these hex values */
  --color-accent-500: #f97316;    /* Main orange */
  --color-accent-600: #ea580c;    /* Darker orange */
}
```

## 📝 Customizing Content

All content is centralized in `src/config/portfolio.ts`. Update the following sections:

- **Personal Information**: Name, title, bio, physical stats
- **Contact Information**: Email, phone, social media links
- **Experience**: Theatre and music credits
- **Skills**: Musical, technical, athletic, and other abilities
- **Education**: Degrees, workshops, and training
- **Assets**: Photo gallery and resume path

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Optimized touch interactions
- Collapsible mobile navigation
- Responsive images and typography

## 🔧 Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 SEO & Performance

- Optimized meta tags and OpenGraph data
- Semantic HTML structure
- Lazy-loaded images with Next.js Image component
- Fast loading with Turbopack in development
- Lighthouse-optimized performance

## 🎭 Using as a Template

This portfolio can easily be adapted for other performers:

1. **Update Configuration**: Modify `src/config/portfolio.ts` with new performer's information
2. **Replace Assets**: Add new photos and resume to the `public/` directory
3. **Customize Colors**: Change the color scheme in `globals.css` to match brand preferences
4. **Modify Sections**: Adjust or add new sections in the component files as needed

## 📄 License

This project is created for Blake Morgan's professional portfolio. For template usage rights, please contact the developer.

## 🤝 Support

For questions about customization or using this as a template for other performers, please reach out through the contact information provided on the website.