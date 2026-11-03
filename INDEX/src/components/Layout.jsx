import {useState} from 'react';import {Link,NavLink} from 'react-router-dom';import {Heart,ShoppingBag,Menu,X,MessageCircle,Search} from 'lucide-react';
import {useStore} from '../context/Store';import {SHOP,wa} from '../config';import {save} from '../api';import {useForm,rules} from './ui';import {QuickView,CompareBar} from './Overlays';
const LINKS=[['/','Home'],['/shop','Shop'],['/about','About'],['/appointments','Eye Test'],['/contact','Contact']];
const Badge=({n})=>n>0?<span className="absolute -top-1.5 -right-2 bg-gold text-navy text-[10px] w-4 h-4 rounded-full grid place-items-center">{n}</span>:null;
function Nav(){const[o,setO]=useState(false);const{cart,wish}=useStore();const cls=({isActive})=>`text-sm tracking-wide hover:text-gold ${isActive?'text-gold':''}`;
 return <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur border-b border-navy/10"><div className="wrap h-16 md:h-20 flex items-center justify-between">
 <Link to="/" className="font-serif text-2xl tracking-wide">{SHOP.name}</Link>
 <nav aria-label="Main" className="hidden md:flex gap-8">{LINKS.map(([t,l])=><NavLink key={t} to={t} end={t==='/'} className={cls}>{l}</NavLink>)}</nav>
 <div className="flex items-center gap-5"><Link to="/shop" aria-label="Search"><Search size={20}/></Link><Link to="/shop?wish=1" aria-label="Wishlist" className="relative"><Heart size={20}/><Badge n={wish.length}/></Link>
 <Link to="/cart" aria-label="Cart" className="relative"><ShoppingBag size={20}/><Badge n={cart.reduce((a,c)=>a+c.qty,0)}/></Link>
 <button className="md:hidden" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div></div>
 {o&&<nav className="md:hidden border-t border-navy/10 bg-ivory px-5 py-4 flex flex-col gap-4">{LINKS.map(([t,l])=><NavLink key={t} to={t} end={t==='/'} onClick={()=>setO(false)} className={cls}>{l}</NavLink>)}</nav>}</header>}
function Footer(){const f=useForm({email:''},{email:[rules.email]});const[ok,setOk]=useState(false);
 const sub=async e=>{e.preventDefault();if(!f.check())return;await save('newsletter',{email:f.v.email});setOk(true);f.reset()};
 return <footer className="bg-navy text-white/80 mt-24"><div className="wrap py-16 grid md:grid-cols-4 gap-10">
 <div><p className="font-serif text-2xl text-white">{SHOP.name}</p><p className="mt-3 text-sm">Considered eyewear and expert eye care in {SHOP.city}.</p></div>
 <div><p className="eyebrow mb-3">Explore</p><ul className="space-y-2 text-sm">{LINKS.map(([t,l])=><li key={t}><Link to={t} className="hover:text-gold">{l}</Link></li>)}</ul></div>
 <div><p className="eyebrow mb-3">Shop</p><ul className="space-y-2 text-sm">{['Eyeglasses','Sunglasses','Computer Glasses','Kids'].map(c=><li key={c}><Link to={`/shop?cat=${encodeURIComponent(c)}`} className="hover:text-gold">{c}</Link></li>)}</ul></div>
 <form onSubmit={sub} noValidate><p className="eyebrow mb-3">Newsletter</p>{ok?<p className="text-sm text-gold" role="status">Thank you for subscribing.</p>:<><label className="sr-only" htmlFor="nl">Email</label><input id="nl" className="input !bg-white/10 !text-white !border-white/20" placeholder="Your email" value={f.v.email} onChange={f.set('email')}/>{f.e.email&&<p role="alert" className="text-xs text-red-300 mt-1">{f.e.email}</p>}<button className="btn-g mt-3 w-full">Subscribe</button></>}</form></div>
 <p className="text-center text-xs py-5 border-t border-white/10">© {new Date().getFullYear()} {SHOP.name}, {SHOP.city}. All rights reserved.</p></footer>}
export default function Layout({children}){return <><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 bg-gold p-2">Skip to content</a><Nav/><main id="main">{children}</main><Footer/><QuickView/><CompareBar/>
 <a href={wa(`Hello ${SHOP.name}, I have an enquiry.`)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed right-5 bottom-20 z-30 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition"><MessageCircle/></a></>}
