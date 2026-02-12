# Ecommerce Frontend - Project Guide

## Overview
React 19 e-commerce frontend built with Vite 7, Redux Toolkit, Material UI, and TailwindCSS. Communicates with a Spring Boot backend via REST API with JWT cookie-based authentication.

## Tech Stack
- **Framework:** React 19.2 with Vite 7.2
- **State Management:** Redux Toolkit 2.11 + react-redux 9.2
- **Styling:** TailwindCSS 4.1 + Material UI 7.3 + Emotion
- **Routing:** React Router DOM 7.11
- **HTTP Client:** Axios 1.13 (configured in `src/api/api.js`)
- **Forms:** React Hook Form 7.69
- **Payments:** Stripe (@stripe/react-stripe-js + @stripe/stripe-js)
- **UI Components:** Swiper (carousels), MUI X Data Grid, React Icons, Headless UI
- **Notifications:** React Hot Toast

## Project Structure
```
src/
├── api/
│   └── api.js              # Axios instance (baseURL from VITE_BACK_END_URL)
├── components/
│   ├── Admin/              # Admin dashboard (analytics, product/category/user management)
│   ├── auth/               # Login, Register components
│   ├── carts/              # Shopping cart display
│   ├── checkout/           # Checkout flow + Stripe payment
│   ├── products/           # Product listing, detail, filtering
│   ├── home/               # Homepage, hero, featured sections
│   ├── shared/             # Navbar, Footer, layout components
│   ├── helper/             # Helper/utility components
│   ├── About.jsx           # About page
│   ├── Contact.jsx         # Contact page
│   ├── AddressList.jsx     # User address management
│   ├── PaymentConfirmation.jsx
│   ├── PrivateRoute.jsx    # Auth-guarded routes
│   ├── UserMenu.jsx        # User dropdown menu
│   └── BackDrop.jsx        # Modal backdrop
├── store/
│   ├── store.js            # Redux store configuration
│   ├── actions/            # Redux async thunks (API calls)
│   └── reducers/           # Redux slices
│       ├── authReducer.js
│       ├── cartReducer.js
│       ├── ProductReducer.js
│       ├── adminReducer.js
│       ├── orderReducer.js
│       ├── sellerReducer.js
│       ├── paymentMethodReducer.js
│       └── errorReducer.js
├── hooks/                  # Custom React hooks
├── utils/                  # Utility functions
├── assets/                 # Static assets (images, icons)
├── App.jsx                 # Root component with routes
├── main.jsx                # Entry point (Redux Provider, Router)
├── App.css                 # App-level styles
└── index.css               # Global styles (Tailwind imports)
```

## Environment Variables
Defined in `.env` (prefixed with `VITE_` for Vite exposure):
```
VITE_BACK_END_URL=http://localhost:8080      # Backend API base URL
VITE_FRONTEND_URL=http://localhost:3000       # Frontend URL (for redirects)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...      # Stripe publishable key
```

## Commands
```bash
npm run dev       # Start dev server on port 3000
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## API Connection
- All API calls go through `src/api/api.js` which creates an Axios instance
- Base URL: `${VITE_BACK_END_URL}/api`
- Credentials: `withCredentials: true` (sends JWT cookie with every request)
- Backend API endpoints:
  - `/api/auth/**` - Login, signup, signout
  - `/api/public/**` - Public product/category browsing
  - `/api/admin/**` - Admin-only operations (ROLE_ADMIN)
  - `/api/seller/**` - Seller operations (ROLE_SELLER)
  - `/api/carts/**` - Cart operations (authenticated)
  - `/api/order/**` - Order + Stripe payment (authenticated)
  - `/api/addresses` - User address management (authenticated)

## Authentication Flow
1. User logs in via `/api/auth/signin`
2. Backend returns JWT in an HTTP-only cookie (`springBootEcom`)
3. Axios sends cookie automatically (`withCredentials: true`)
4. `PrivateRoute` component guards authenticated routes
5. Auth state managed in `authReducer.js`

## State Management Pattern
- Redux Toolkit with `createAsyncThunk` for API calls
- Actions in `store/actions/` dispatch API requests
- Reducers in `store/reducers/` handle loading/success/error states
- Components use `useSelector` and `useDispatch` hooks

## Roles
- **ROLE_USER** - Browse, cart, checkout, orders
- **ROLE_SELLER** - Product management, seller dashboard
- **ROLE_ADMIN** - Full access, user management, analytics

## Key Conventions
- Functional components only (no class components)
- TailwindCSS for layout/spacing, MUI for complex UI widgets
- React Router v7 for routing
- Toast notifications via `react-hot-toast`
- Form validation via `react-hook-form`
