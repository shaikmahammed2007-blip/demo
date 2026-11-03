import {createContext,useContext,useEffect,useState,useCallback} from 'react';
const Ctx=createContext();export const useStore=()=>useContext(Ctx);
function useLS(k,d){const[s,set]=useState(()=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}});useEffect(()=>{try{localStorage.setItem(k,JSON.stringify(s))}catch{}},[k,s]);return[s,set]}
export function StoreProvider({children}){
 const[cart,setCart]=useLS('lo_cart',[]),[wish,setWish]=useLS('lo_wish',[]),[recent,setRecent]=useLS('lo_recent',[]),[compare,setCompare]=useState([]),[quick,setQuick]=useState(null),[toast,setToast]=useState('');
 const say=useCallback(m=>{setToast(m);setTimeout(()=>setToast(''),2200)},[]);
 const add=(p,color,size,qty=1)=>{setCart(c=>{const i=c.findIndex(x=>x.id===p.id&&x.color===color&&x.size===size);if(i>-1)return c.map((x,j)=>j===i?{...x,qty:Math.min(10,x.qty+qty)}:x);return[...c,{id:p.id,color,size,qty}]});say(`${p.name} added to cart`)};
 const setQty=(i,q)=>setCart(c=>q<1?c.filter((_,j)=>j!==i):c.map((x,j)=>j===i?{...x,qty:Math.min(10,q)}:x));
 const toggleWish=p=>{setWish(w=>w.includes(p.id)?w.filter(x=>x!==p.id):[...w,p.id]);say(wish.includes(p.id)?'Removed from wishlist':'Saved to wishlist')};
 const toggleCompare=p=>setCompare(c=>c.includes(p.id)?c.filter(x=>x!==p.id):c.length>=3?(say('Compare up to 3 products'),c):[...c,p.id]);
 const view=useCallback(id=>setRecent(r=>[id,...r.filter(x=>x!==id)].slice(0,6)),[setRecent]);
 return <Ctx.Provider value={{cart,setCart,add,setQty,wish,toggleWish,recent,view,compare,setCompare,toggleCompare,quick,setQuick,say}}>{children}
 <div aria-live="polite" className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60]">{toast&&<div className="bg-navy text-white text-sm px-5 py-3 shadow-xl">{toast}</div>}</div></Ctx.Provider>}
