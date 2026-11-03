import {SHOP} from './config';
// Posts to the Express API when VITE_API_URL is set; otherwise (or on failure) persists to localStorage.
export async function save(kind,data){
 const rec={...data,id:'LO'+Date.now().toString().slice(-8),at:new Date().toISOString()};
 if(SHOP.api){try{const r=await fetch(`${SHOP.api}/api/${kind}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(rec)});if(r.ok)return rec}catch{}}
 try{const k='lo_'+kind,l=JSON.parse(localStorage.getItem(k)||'[]');l.push(rec);localStorage.setItem(k,JSON.stringify(l))}catch{}
 return rec;
}
