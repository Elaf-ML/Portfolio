# Fullstack Developer Portfolio

A modern, responsive developer portfolio built with React.js, Tailwind CSS, and Framer Motion. This portfolio showcases skills, projects, and experience with smooth animations and a beautiful dark-themed UI.

## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Dark Theme**: Sleek dark-themed UI with vibrant accent colors
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and effects
- **Interactive Elements**: Hover animations and interactive UI components
- **Modern Layout**: Right-side navbar and section-based content flow
- **Filterable Projects**: Sort projects by category
- **Contact Form**: Functional contact form (needs backend implementation)

## Project Structure

```
portfolio/
│
├── public/               # Public assets
│   ├── index.html        # HTML template
│   ├── profile-image.jpg # Hero section profile image
│   └── project*.jpg      # Project thumbnail images
│
├── src/
│   ├── assets/           # Images, icons, and other assets
│   ├── components/
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── sections/     # Page sections (Hero, About, Projects, etc.)
│   ├── App.tsx           # Main App component
│   ├── index.tsx         # Entry point
│   └── index.css         # Global styles and Tailwind directives
│
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Required Images

This project uses several placeholder images that need to be added to the `/public` directory:

- `profile-image.jpg` - Profile photo for the hero section (500x500px recommended)
- `project1.jpg` through `project6.jpg` - Project thumbnails (800x500px recommended)

## Customization

### Personal Information

Update the following files to add your personal information:

- `src/components/sections/Hero.tsx` - Name, title, and introduction
- `src/components/sections/About.tsx` - Skills and bio
- `src/components/sections/Projects.tsx` - Project details
- `src/components/sections/Experience.tsx` - Work history and education
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/layout/Footer.tsx` - Social media links

### Theme Colors

The color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6', // Vibrant purple
      secondary: '#EC4899', // Pink
      accent: '#06B6D4', // Cyan
      dark: '#111827', // Very dark blue/gray
      light: '#F9FAFB', // Very light gray
    },
    // ...
  }
}
```

## Adding Backend Functionality

The contact form is currently set up to simulate a submission process. To implement actual functionality:

1. Create a server endpoint to receive form data
2. Update the `handleSubmit` function in `src/components/sections/Contact.tsx`
3. Implement email sending or database storage on your backend

## Deployment

This project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Scroll](https://github.com/fisshy/react-scroll)
