import {useEffect,useState} from 'react';import {motion} from 'framer-motion';import {Star} from 'lucide-react';import {SHOP} from '../config';
export const Reveal=({children,delay=0,className=''})=><motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay,ease:'easeOut'}}>{children}</motion.div>;
export function useTitle(t,d){useEffect(()=>{document.title=`${t} | ${SHOP.name}`;if(d)document.querySelector('meta[name=description]')?.setAttribute('content',d)},[t,d])}
export const Stars=({n})=><span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${n} out of 5`}>{[1,2,3,4,5].map(i=><Star key={i} size={13} fill={i<=Math.round(n)?'currentColor':'none'}/>)}<span className="ml-1 text-xs text-navy/60">{n}</span></span>;
export const rules={req:v=>String(v||'').trim()?'':'This field is required',email:v=>/^\S+@\S+\.\S+$/.test(v||'')?'':'Enter a valid email address',phone:v=>/^[6-9]\d{9}$/.test(v||'')?'':'Enter a valid 10-digit mobile number',pin:v=>/^\d{6}$/.test(v||'')?'':'Enter a 6-digit pincode',future:v=>!v||v>=new Date().toISOString().slice(0,10)?'':'Choose today or a future date',min:n=>v=>String(v||'').trim().length>=n?'':`Please enter at least ${n} characters`};
export function useForm(init,schema){const[v,setV]=useState(init),[e,setE]=useState({});
 const set=k=>x=>setV(s=>({...s,[k]:x.target.value}));
 const check=()=>{const er={};for(const k in schema){const m=schema[k].map(r=>r(v[k])).find(Boolean);if(m)er[k]=m}setE(er);return!Object.keys(er).length};
 return{v,e,set,check,reset:()=>{setV(init);setE({})}}}
export function Field({label,name,form,as:As='input',children,...r}){const err=form.e[name];
 return <label className="block"><span className="text-xs uppercase tracking-widest text-navy/70">{label}</span><As className="input mt-1" value={form.v[name]} onChange={form.set(name)} aria-invalid={!!err} {...r}>{children}</As>{err&&<span role="alert" className="text-xs text-red-700">{err}</span>}</label>}
