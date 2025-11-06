# SmartBuild Construction Template

A professional, responsive construction/architecture website template with Mastercard-inspired theme (red/orange gradient), built with HTML, CSS, JavaScript, jQuery, and Bootstrap 5.

## 🚀 Features

- **Modern Design**: Mastercard-inspired color scheme with red/orange gradients
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and jQuery effects for enhanced user experience
- **AJAX Functionality**: Dynamic content loading and form handling
- **Bootstrap 5**: Latest Bootstrap framework for responsive layouts
- **GitHub Pages Ready**: Optimized for static hosting on GitHub Pages
- **Standard Spacing**: Consistent margins, padding, and typography throughout
- **Justified Content**: Proper text alignment and justification

## 📁 Project Structure

```
/smartbuild-template/
│
├── /assets/
│   ├── /css/
│   │   ├── style.css          # Main stylesheet with Mastercard theme
│   │   ├── responsive.css     # Mobile-first responsive styles
│   │   ├── dark.css           # Dark mode support
│   │   └── rtl.css            # RTL language support
│   │
│   ├── /js/
│   │   ├── main.js            # Core functionality & animations
│   │   ├── ajax.js            # AJAX form handling & dynamic loading
│   │   └── plugins.js         # Third-party plugin integrations
│   │
│   └── /img/                  # Image assets organized by category
│
├── /pages/
│   ├── index.html             # Homepage
│   ├── about.html             # About us page
│   ├── services.html          # Services page
│   ├── projects.html          # Projects portfolio
│   ├── contact.html           # Contact form
│   ├── team.html              # Team members
│   ├── blog.html              # Blog listing
│   └── [other pages]          # Additional pages
│
├── /partials/
│   ├── header.html            # Site header/navigation
│   ├── footer.html            # Site footer
│   └── preloader.html         # Loading screen
│
└── README.md                  # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Red**: `#EB001B` (Mastercard Red)
- **Primary Orange**: `#FF5F00` (Mastercard Orange)
- **Gradient**: Linear gradient from red to orange (135deg)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Roboto (Google Fonts)
- **Standard Sizes**: Responsive font sizes from 12px to 48px

### Spacing Standards
- Consistent padding and margins using CSS variables
- Section spacing: 3.5rem (56px) vertical
- Standardized spacing scale: xs, sm, md, lg, xl, xxl

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables, flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JS for core functionality
- **jQuery**: DOM manipulation and animations
- **Bootstrap 5.3.0**: Responsive framework
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts**: Poppins & Roboto

## 📦 Installation

1. Clone or download this repository
2. Open `pages/index.html` in a browser
3. For GitHub Pages deployment, push to your repository and enable GitHub Pages

## 🌐 GitHub Pages Deployment

1. Push all files to your GitHub repository
2. Go to Repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/smartbuild-template/`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features

### Navigation
- Fixed navbar with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Active link highlighting

### Animations
- Fade-in animations on scroll
- Counter animations for statistics
- Smooth transitions and hover effects
- Preloader animation

### Forms
- Contact form with AJAX submission
- Newsletter subscription
- Login/Register forms
- Form validation

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 992px (desktop), 1200px (large desktop)
- Flexible grid system
- Responsive images and typography

## 📝 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --primary-red: #EB001B;
  --primary-orange: #FF5F00;
}
```

### Content
- Update `partials/header.html` for navigation
- Modify `partials/footer.html` for footer content
- Edit individual page files in `/pages/` directory

### Images
Replace placeholder Pexels images with your own:
- Hero images: `assets/img/hero/`
- Project images: `assets/img/projects/`
- Team photos: `assets/img/team/`

## 📄 License

This template is free to use for personal and commercial projects.

## 🙏 Credits

- **Images**: Pexels (https://www.pexels.com/)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Framework**: Bootstrap

## 📧 Support

For questions or support, please contact us at info@smartbuild.in

---

**Built with ❤️ by SmartBuild Construction Team**

