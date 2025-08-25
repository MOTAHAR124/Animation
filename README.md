# Sidcup Family Golf Website

A fully responsive, modern golf website featuring smooth animations, video backgrounds, and mobile-optimized design.

## 🌟 Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Video Background** - Immersive golf course video with fade-to-black scroll effect
- **Smooth Animations** - GSAP-powered scroll-triggered animations
- **Custom Cursor** - Interactive cursor effects (desktop only)
- **Mobile Touch Support** - Touch-friendly interactions for mobile devices
- **Modern UI/UX** - Clean, professional design with hover effects

## 📱 Device Support

- **Desktop** - Full experience with custom cursor and animations
- **Tablet** (768px - 1024px) - Optimized layout and typography
- **Mobile** (max-width: 768px) - Stacked layout, touch interactions
- **Small Mobile** (max-width: 480px) - Compact design for tiny screens
- **iPhone 12 Pro** (375px - 414px) - Specific optimizations for modern iPhones

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with Flexbox, Grid, and media queries
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP (GreenSock)** - Professional animation library
- **ScrollTrigger** - Scroll-based animation triggers

## 📁 Project Structure

```
Golf/
├── index.html          # Main HTML file
├── style.css           # All CSS styles and responsive design
├── script.js           # JavaScript functionality and animations
├── note.txt            # Project notes
└── README.md           # This file
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **No build process required** - pure HTML/CSS/JS

## 📋 Sections

1. **Hero Section** - "EAT. DRINK. PLAY." with shadow text effect
2. **Navigation** - Sticky navigation with smooth background transition
3. **Scrolling Banner** - Animated text scroller
4. **About Us** - Information with images
5. **Service Cards** - Interactive hover cards with overlays
6. **Call-to-Action** - Green gradient section
7. **Testimonial** - Customer review with quote styling
8. **Gallery** - Image showcase with hover effects
9. **Footer** - Contact information and links

## 🎨 Key Design Elements

### Shadow Text Effect
- Main heading features a layered shadow text effect
- Responsive scaling for different screen sizes
- Green stroke outline with black shadow

### Video Background
- Full-screen golf course video background
- Fade-to-black effect on scroll
- Optimized positioning to prevent overflow

### Interactive Cards
- Hover effects with 3D rotation
- Overlay content with smooth transitions
- Touch support for mobile devices

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media screen and (max-width: 1024px)

/* Mobile */
@media screen and (max-width: 768px)

/* Small Mobile */
@media screen and (max-width: 480px)

/* iPhone 12 Pro */
@media screen and (min-width: 375px) and (max-width: 414px)
```

## ⚡ Performance Optimizations

- **Mobile Detection** - Conditional loading of desktop-only features
- **Reduced Animations** - Faster, lighter animations on mobile
- **Optimized Media Queries** - Efficient responsive design
- **Touch Event Handling** - Native mobile interactions

## 🔧 Customization

### Colors
- Primary: `#95c11e` (Golf green)
- Background: `#000` (Black)
- Text: `#fff` (White)

### Fonts
- Primary: Montserrat
- Headings: Gilroy (fallback available)

### Animation Timing
- Scroll animations: 1-2 seconds
- Hover effects: 0.3-0.6 seconds
- Mobile animations: Reduced for performance

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

**Sidcup Family Golf**
- Address: A20, Sidcup Bypass, Chislehurst, Kent BR7 6RP
- Phone: 0208 309 0181

## 🎯 Services Featured

- TopTracer Range
- Golf Lessons
- Adventure Golf
- Coffee Shop
- Leagues

## 📝 Development Notes

- Video positioning uses `absolute` within main container for proper scrolling
- ScrollTrigger refreshes on window resize for responsive animations
- Custom cursor disabled on mobile for better performance
- Overflow-x hidden removed to restore scrollbar functionality

## 🔄 Recent Updates

- Fixed scroll fade effect and scrollbar functionality
- Added iPhone 12 Pro specific responsive styles
- Optimized shadow text effect for all screen sizes
- Improved mobile touch interactions
- Enhanced navigation responsiveness

---

*Built with ❤️ for Sidcup Family Golf*
