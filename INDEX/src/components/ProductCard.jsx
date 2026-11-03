import {Link} from 'react-router-dom';import {Heart,Eye,GitCompare} from 'lucide-react';
import Glasses from './Glasses';import {Reveal,Stars} from './ui';import {useStore} from '../context/Store';import {inr} from '../config';
export default function ProductCard({p}){const{wish,toggleWish,compare,toggleCompare,setQuick}=useStore();const w=wish.includes(p.id),c=compare.includes(p.id);
 return <Reveal><article className="group bg-white h-full flex flex-col"><div className="relative bg-gradient-to-b from-white to-ivory overflow-hidden">
 <Link to={`/product/${p.id}`} aria-label={p.name}><Glasses shape={p.shape} color={p.colors[0].h} tint={p.tint} className="w-full p-8 transition duration-500 group-hover:scale-110"/></Link>
 {p.best&&<span className="absolute top-3 left-3 bg-navy text-gold text-[10px] tracking-widest uppercase px-2 py-1">Bestseller</span>}
 <button onClick={()=>toggleWish(p)} aria-pressed={w} aria-label="Toggle wishlist" className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:text-gold"><Heart size={16} fill={w?'#C6A66B':'none'}/></button>
 <div className="absolute inset-x-0 bottom-0 flex text-xs md:translate-y-full md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 transition">
 <button onClick={()=>setQuick(p)} className="flex-1 bg-navy text-white py-2.5 flex items-center justify-center gap-1.5 hover:bg-gold hover:text-navy"><Eye size={14}/>Quick view</button>
 <button onClick={()=>toggleCompare(p)} aria-pressed={c} className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 ${c?'bg-gold text-navy':'bg-white text-navy hover:bg-gold'}`}><GitCompare size={14}/>{c?'Added':'Compare'}</button></div></div>
 <div className="p-4 flex-1"><p className="text-[11px] uppercase tracking-widest text-navy/50">{p.brand}</p><h3 className="text-lg mt-1"><Link to={`/product/${p.id}`}>{p.name}</Link></h3><Stars n={p.rating}/>
 <p className="mt-2 font-medium">{inr(p.price)} <s className="text-navy/40 text-sm font-normal ml-1">{inr(p.mrp)}</s></p></div></article></Reveal>}
