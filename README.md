# Audit System Dashboard

A modern, responsive React-based audit and compliance tracking platform built for digital transformation monitoring.

🔗 **Live Demo:** [https://audit-system-zeta.vercel.app/](https://audit-system-zeta.vercel.app/)

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/bakhtawarneaz/audit-system.git

# 2. Navigate to project directory
cd audit-system

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Visit http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🏗️ How I Built This Project

### Tech Stack
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with functional components & hooks |
| **Vite** | Fast build tool and development server |
| **React Router v6** | Client-side routing |
| **Recharts** | Data visualization (bar charts) |
| **Lucide React** | Icon library |
| **Custom CSS** | Styling (no frameworks, full control) |

### Architecture & Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── StatsCard.jsx
│   ├── ProjectTimeline.jsx
│   ├── ProgressStatus.jsx
│   ├── ComplianceScore.jsx
│   ├── TopLeaders.jsx
│   ├── RecentActivities.jsx
│   ├── MonthlyPerformance.jsx
│   └── AuditReadiness.jsx
│
├── layouts/             # Page layouts
│   ├── authLayout/      # Login/auth pages layout
│   └── dashboardLayout/ # Main dashboard layout (Sidebar + Header)
│
├── pages/
│   ├── authorized/      # Protected pages
│   │   ├── dashboard/   # Dashboard screen
│   │   └── details/     # Details page with Overview & Evidence tabs
│   └── unAuthorized/    # Public pages
│       └── login/       # Login screen
│
├── router/              # Route configuration
├── data/                # Mock JSON data
├── styles/              # Global CSS & variables
└── main.jsx             # Entry point
```

### Key Design Decisions

1. **Component-Based Architecture:** Each UI element is a reusable component with its own logic and styling, making the codebase maintainable and scalable.

2. **CSS Variables for Theming:** Used CSS custom properties for colors, spacing, and typography to ensure consistency and easy theme modifications.

3. **Separation of Concerns:** 
   - Components handle UI rendering
   - Mock data is separated in `/data` folder
   - Layouts handle page structure
   - Router handles navigation

4. **Mobile-First Responsive Design:** All components are responsive with proper breakpoints for tablet and mobile devices.

---

## 📋 Assumptions Made

1. **Authentication:** Implemented as UI-only (no actual authentication logic). Login button navigates directly to dashboard for demo purposes.

2. **Static Data:** All data is mocked in `mockData.js`. In production, this would be replaced with API calls.

3. **Browser Support:** Targeted modern browsers (Chrome, Firefox, Safari, Edge - latest versions).

4. **Design Interpretation:** Where design details were ambiguous, I followed common UI/UX patterns and maintained consistency with the overall design language.

---

## 🔮 What I Would Improve With More Time

### Technical Improvements
- [ ] Add TypeScript for better type safety
- [ ] Implement proper authentication with JWT tokens
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Add E2E tests with Cypress
- [ ] Implement state management with Context API or Zustand for complex state
- [ ] Add loading skeletons for better UX
- [ ] Implement error boundaries

### Feature Improvements
- [ ] Add dark mode toggle
- [ ] Implement real-time data updates with WebSockets
- [ ] Add data export functionality (PDF, Excel)
- [ ] Implement search and filtering on tables
- [ ] Add user profile management
- [ ] Implement notification system
- [ ] Add multi-language support (i18n)

### Performance Improvements
- [ ] Implement code splitting with React.lazy()
- [ ] Add image optimization
- [ ] Implement caching strategies
- [ ] Add PWA support for offline access

---

## 📸 Screenshots

### Login Page
- Language toggle (English/Arabic)
- Clean, modern design with TAHWUL branding

### Dashboard
- Project Timeline with milestones
- Statistics cards (6 metrics)
- Progress Status grid (10 categories)
- Compliance Score gauge
- Top Performing Leaders
- 12-Month Performance chart
- Audit Readiness gauge

### Details Page
- Overview tab with structured content sections
- Evidence tab with sortable data table
- Comments section with input
- Recent Activities sidebar

---

## 👨‍💻 Author

**Muhammad Bakhtawar Niaz**

---

## 📄 License

This project was created as part of a technical assessment.