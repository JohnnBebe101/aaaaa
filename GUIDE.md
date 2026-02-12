UI Developer Onboarding Prompt
Canaan International Hotel Website
________________________________________
PROJECT OVERVIEW
Build a complete professional UI redesign/enhancement for Canaan International Hotel, a hospitality website built with Next.js 16, TypeScript, and Tailwind CSS. The website serves two audiences: hotel guests exploring rooms/services, and administrators managing bookings.
Brand Identity:
•	Name: Canaan International Hotel
•	Location: Adigrat, Tigray, Ethiopia
•	Vibe: Warm Ethiopian hospitality, historical significance, modern comfort
•	Primary Color: use your colour in this project
•	Secondary: Earth tones, warm beiges, deep greens
________________________________________
CURRENT STATE SUMMARY
What's Working
•	✅ Core navigation (header/footer)
•	✅ Room listings and booking flow
•	✅ Admin panel structure
•	✅ Dark mode support
•	✅ Responsive layouts
What Needs UI Enhancement
•	⚠️ Visual appeal could be elevated
•	⚠️ Hero sections need more impact
•	⚠️ Cards and content blocks feel basic
•	⚠️ Mobile experience needs polish
•	⚠️ Visual hierarchy unclear in places
________________________________________
TECHNICAL CONTEXT
Tech Stack
Framework: Next.js 16.1.0
Language: TypeScript
Styling: Tailwind CSS + Material Symbols Icons
Backend: Supabase (PostgreSQL)
State: Hybrid (Supabase + offline storage)
Key Files for UI Work
src/components/
├── Header.tsx              # Main navigation
├── Footer.tsx              # Footer
├── Hero.tsx               # Homepage hero with booking
├── HeroSlider.tsx         # Image carousel
├── BookingCard.tsx        # Booking form widget
├── RoomCard.tsx           # Room display
├── OptimizedImage.tsx     # Image wrapper
└── admin/
    ├── AdminSidebar.tsx   # Admin navigation
    └── AdminHeader.tsx    # Admin top bar
Global Styles
src/styles/globals.css
- Tailwind directives
- Custom color palette
- Material Symbols font import
________________________________________
DESIGN REQUIREMENTS
1. BRAND GUIDELINES
use the Color Palette (Implement in tailwind.config.js) in your  project and report for later use for the app developer
--color-primary: 
--color-primary-dark: 
--color-secondary: 
--color-accent: 
--color-background-light: 
--color-background-dark: 
--color-text-primary: 
--color-text-secondary: 
--color-border: 
Typography
•	Headings: 
•	Body: 
•	Icons: 
2. LAYOUT SYSTEM
Container Widths
Max-width: 
Padding: 
Responsive Breakpoints
Mobile: 
Tablet: 
Desktop: 
3. COMPONENT SPECIFICATIONS
Header
•	Height: 
•	Behavior: 
•	Mobile: 
Hero Section
•	Homepage: 
•	Subpages: 
•	Content: 
Cards (Rooms, Blogs, Attractions)
•	Border Radius: 
•	Shadow: shadow-sm (default), shadow-md (hover)
•	Image Aspect Ratio: 
•	Padding: 
Buttons
Primary: 
Secondary: 
Outline: 
________________________________________
NAVIGATION STRUCTURE
Public Routes (for guests)
/
├── Home (hero, featured rooms, blog preview, attractions)
├── /rooms
│   ├── Listing grid
│   └── [id] detail page
├── /services (single static page)
├── /gallery (photo grid with filter)
├── /attractions (static content cards)
├── /blog
│   ├── Listing grid
│   └── [slug] article
├── /about (team, story, badges)
└── /contact (form + info)
Admin Routes (for staff)
/admin/
├── /dashboard (stats overview)
/admin/rooms (CRUD)
/admin/bookings (management)
/admin/attractions (read-only)
/admin/blogs (read-only)
________________________________________
CURRENT IMAGE ASSETS
Images Folder Structure
public/images/
├── heroes/              (hotel exterior, compound, gate)
├── rooms/               (room photos)
├── ui/                  (icons, logos)
└── content/            (blog images)
Guidelines:
•	Use WebP format (preferred)
•	SVGs for icons/logo only
•	Optimize all images before adding
•	Consistent aspect ratios within categories
________________________________________
UI IMPROVEMENT PRIORITIES
High Priority
1.	Hero Sections - Make more impactful with better typography, gradients, and visual hierarchy
2.	Room Cards - Add hover effects, better badges, clearer pricing
3.	Navigation - Enhance mobile menu, add active states
4.	Forms - Better validation visuals, focus states
Medium Priority
1.	Blog Cards - More engaging layout, better thumbnails
2.	Admin Dashboard - Clean up stats display, better tables
3.	Footer - Organized sections, better spacing
4.	Page Titles - Consistent typography hierarchy
Low Priority
1.	Micro-interactions - Button hover, card lift effects
2.	Loading States - Skeletons for data loading
3.	Empty States - Better UI for no content
________________________________________
INTEGRATION POINTS
When Editing Components
Header/Footer:
// Location: src/components/Header.tsx
// Import: Material Symbols from Google Fonts
// Export: Default component with props for variant="public" | "admin"
Example Page Layouts:
// All pages wrap content in:
<main id="main-content" className="flex-1">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* page content */}
  </div>
</main>
Dark Mode:
// Use: dark:bg-background-dark, dark:text-background-light
// Test both light and dark modes
________________________________________
DELIVERABLES EXPECTED FROM UI DEVELOPER
1.	Updated Component Library
•	Enhanced Header with better mobile menu
•	Redesigned Hero sections
•	Improved RoomCard, BlogCard, AttractionCard
•	Better Footer layout
2.	Design System Extensions
•	Extended color palette in Tailwind config
•	Consistent spacing system
•	Typography scale
•	Animation/transition standards
3.	Page Enhancements
•	Homepage hero redesign
•	Room listing improvements
•	Admin dashboard visual refresh
•	Contact form styling
4.	Documentation
•	Component usage examples
•	Color/token reference
•	Responsive behavior notes
________________________________________
QUICK START CHECKLIST
•	  Review src/app/(public)/page.tsx for homepage structure
•	  Check src/components/Header.tsx for navigation patterns
•	  Examine src/styles/globals.css for base styles
•	  Review tailwind.config.ts for current theme
•	  Test responsive behavior across breakpoints
•	  Verify dark mode rendering
•	  Check page load performance after changes
________________________________________
COMMUNICATION
For Questions:
•	Ask about specific component behavior
•	Clarify design direction before implementation
•	Request access to design files if provided
•	Flag any unclear requirements
Before Submitting Changes:
•	Ensure all pages render correctly
•	Test dark mode throughout
•	Verify mobile responsiveness
•	Check accessibility (keyboard nav, contrast)
•	Run npm run build for errors
________________________________________
SUCCESS METRICS
UI changes will be evaluated on:
1.	Visual Appeal - Professional, polished appearance
2.	Consistency - Unified design language across pages
3.	Performance - No increase in load times
4.	Accessibility - Meets WCAG 2.1 AA standards
5.	Responsiveness - Works on all device sizes
________________________________________
Document Version: 1.0
Project: Canaan International Hotel
Framework: Next.js 16 + Tailwind CSS

