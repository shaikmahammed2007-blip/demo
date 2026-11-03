export default function Glasses({shape='round',color='#C6A66B',tint=false,className=''}){
 const L={round:['M30 50a30 30 0 1 0 60 0a30 30 0 1 0-60 0','M110 50a30 30 0 1 0 60 0a30 30 0 1 0-60 0'],
 square:['M28 30h64v28q0 14-14 14H42q-14 0-14-14z','M108 30h64v28q0 14-14 14h-36q-14 0-14-14z'],
 aviator:['M26 30h68v22q0 24-34 24T26 52z','M106 30h68v22q0 24-34 24t-34-24z'],
 cat:['M24 28l68 8v18q0 20-32 20T28 54z','M176 28l-68 8v18q0 20 32 20t32-20z']}[shape];
 return <svg viewBox="0 0 200 100" className={className} role="img" aria-label={`${shape} frame`} xmlns="http://www.w3.org/2000/svg">
 <g fill={tint?'rgba(16,28,44,.6)':'rgba(255,255,255,.45)'} stroke={color} strokeWidth="4.5" strokeLinejoin="round">{L.map((d,i)=><path key={i} d={d}/>)}</g>
 <path d="M92 46q8-8 16 0M26 38L6 34M174 38l20-4" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round"/></svg>}
