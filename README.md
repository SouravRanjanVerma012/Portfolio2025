# 🚀 Sourav Verma - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my skills, projects, and professional experience as a MERN Stack Developer.

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme Toggle** - Switch between themes with a click
- **Smooth Animations** - Beautiful transitions and hover effects
- **Professional UI** - Clean, modern interface using shadcn/ui components

### 📧 **Contact Form**
- **EmailJS Integration** - Direct email sending to your inbox
- **Form Validation** - Complete form validation and error handling
- **Loading States** - Professional loading animations
- **Success/Error Messages** - Clear user feedback

### 📱 **Interactive Elements**
- **Download Resume** - One-click resume download
- **Project Links** - Direct links to GitHub repositories
- **Social Media Integration** - Connected to all your social profiles
- **Smooth Scrolling** - Navigation between sections

### 🛠 **Technical Features**
- **TypeScript** - Type-safe development
- **Vite** - Fast development and building
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components

## 🎯 **Sections**

1. **Hero Section** - Introduction and call-to-action
2. **Skills** - Technical skills with progress bars
3. **Projects** - Featured projects with GitHub links
4. **Education** - Academic background and achievements
5. **Services** - Services offered
6. **Contact** - Contact form and social links

## 🚀 **Live Demo**

Visit the live portfolio: [Coming Soon - Deploy to Vercel]

## 🛠 **Technologies Used**

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Deployment**: Vercel (Ready)

## 📦 **Installation & Setup**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/SouravRanjanVerma012/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 **Configuration**

### EmailJS Setup
The contact form uses EmailJS for email functionality:

1. **Service ID**: `service_v1opc3j`
2. **Template ID**: `template_ugby5n8`
3. **Public Key**: `TJU0mrJeeCHZ6auvq`

### Customization
- Update personal information in component files
- Modify colors in `tailwind.config.ts`
- Add/remove projects in `Projects.tsx`
- Update social links in `Contact.tsx`

## 📁 **Project Structure**

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with theme toggle
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── Skills.tsx         # Skills with progress bars
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Education.tsx      # Education timeline
│   │   ├── Services.tsx       # Services offered
│   │   └── Contact.tsx        # Contact form with EmailJS
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── favicon.svg            # Custom favicon
│   └── Sourav_Verma_CV.pdf   # Resume file
├── package.json
└── README.md
```

## 🎨 **Customization Guide**

### Adding New Projects
Edit `src/components/Projects.tsx`:
```typescript
{
  title: "Your Project",
  description: "Project description",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/your-repo",
  type: "Web Application"
}
```

### Updating Skills
Edit `src/components/Skills.tsx`:
```typescript
{ name: "Your Skill", level: 85 }
```

### Changing Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "your-color",
  accent: "your-accent-color"
}
```

## 🚀 **Deployment**

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Get live URL

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Deploy automatically on push

## 📧 **Contact Form Features**

- **Real-time validation**
- **Loading states**
- **Success/error messages**
- **Direct email delivery**
- **Professional email template**

## 🌟 **Key Features Implemented**

✅ **Dark/Light Theme Toggle**
✅ **EmailJS Contact Form**
✅ **Download Resume Functionality**
✅ **GitHub Project Links**
✅ **Social Media Integration**
✅ **Responsive Design**
✅ **Smooth Animations**
✅ **Professional UI/UX**
✅ **TypeScript Support**
✅ **Vite Build System**

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 **Developer**

**Sourav Verma**
- **Email**: sourav2000ranjan@gmail.com
- **LinkedIn**: [Sourav Ranjan Verma](https://www.linkedin.com/in/sourav-ranjan-verma/)
- **GitHub**: [SouravRanjanVerma012](https://github.com/SouravRanjanVerma012)
- **Portfolio**: [Live Demo Coming Soon]

---

⭐ **Star this repository if you found it helpful!**
