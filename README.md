# 🍽️ MADHURA — Premium Fine Dining Restaurant App

A fully functional, production-ready multi-page restaurant web application built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **6 Pages**: Home, Menu, About, Contact, Reservation, Cart
- **Cart System**: Add/remove items, quantity controls, localStorage persistence
- **Form Validation**: All forms have full validation with error states
- **Animations**: Framer Motion page transitions, scroll reveals, hover effects
- **Responsive**: Mobile-first design
- **Dark Luxury Theme**: Forest green + gold color palette

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite | Build tool |
| Tailwind CSS 3 | Styling |
| React Router DOM | Routing |
| Framer Motion | Animations |
| Context API | Cart state |
| localStorage | Cart persistence |

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FoodCard.jsx
│   ├── SectionWrapper.jsx
│   └── Ornament.jsx
├── context/
│   └── CartContext.jsx  # Global cart state
├── data/
│   └── menuData.js      # All menu items & categories
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Reservation.jsx
│   └── Cart.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
└── main.jsx
```

## 🗂️ Pages

| Page | Route | Features |
|------|-------|---------|
| Home | `/` | Hero, featured dishes, story, testimonials, CTA |
| Menu | `/menu` | Category tabs, food cards, add to cart |
| About | `/about` | Chef section, mission, gallery, awards |
| Contact | `/contact` | Form with validation, info, map |
| Reservation | `/reservation` | Booking form, date/time picker, confirmation |
| Cart | `/cart` | Item list, quantity controls, order summary, checkout |

## 🎨 Design

- **Primary**: Forest green (#0d200d – #163516)
- **Accent**: Gold (#d4a017 – #f8cc4d)
- **Typography**: Playfair Display (headings) + Cormorant Garamond (body) + Jost (UI)
