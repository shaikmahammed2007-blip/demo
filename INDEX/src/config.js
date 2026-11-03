const e=import.meta.env;
export const SHOP={name:e.VITE_SHOP_NAME||'Lumière Optical',city:e.VITE_CITY||'Chennai',phone:e.VITE_WHATSAPP||'919999999999',api:e.VITE_API_URL||''};
export const inr=n=>'₹'+Math.round(n).toLocaleString('en-IN');
export const wa=m=>`https://wa.me/${SHOP.phone}?text=${encodeURIComponent(m)}`;
