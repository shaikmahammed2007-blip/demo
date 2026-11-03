# Premium Optical Store

A luxury eyewear e-commerce site: React 18 + Vite + Tailwind CSS + Framer Motion + React Router + Lucide.

## Quick start
```bash
npm install
cp .env.example .env      # set shop name, city, WhatsApp number
npm run dev               # http://localhost:5173
```
Optional backend (stores orders, appointments, contact messages and newsletter sign-ups as JSON in `server/data/`):
```bash
npm run server            # http://localhost:4000, matches VITE_API_URL in .env
```
Without `VITE_API_URL` (or if the API is unreachable) records are saved to browser localStorage (`lo_orders`, `lo_appointments`, ...).

## Production
```bash
npm run build && npm run preview
```

## Configure
`.env`: `VITE_SHOP_NAME`, `VITE_CITY`, `VITE_WHATSAPP` (country code + number, no +), `VITE_API_URL`.
Replace the map placeholder in `src/pages/Info.jsx` with a Google Maps embed. Products live in `src/data/products.js` (20 items; frames are rendered as SVG, so swap in real photography via `ProductCard`/`Product` when available).

## Structure
`src/components` (Layout, ProductCard, Overlays: quick view and compare, Glasses SVG, form helpers), `src/pages` (Home, Shop, Product, Info: About/Appointments/Contact, Cart: cart and checkout), `src/context/Store.jsx` (cart, wishlist, recently viewed, compare), `server/` (Express API).
