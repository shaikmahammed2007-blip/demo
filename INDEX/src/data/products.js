export const PAL=[{n:'Champagne Gold',h:'#C6A66B'},{n:'Matte Black',h:'#1a1a1a'},{n:'Tortoise',h:'#7a4b2a'},{n:'Silver',h:'#aab0b8'},{n:'Midnight Navy',h:'#101C2C'},{n:'Rose',h:'#b9776e'}];
const raw=[
['Round Titanium','Aurelia','Eyeglasses','round',8900],['Classic Square','Nordik','Eyeglasses','square',6400],['Panto Acetate','Maison Vue','Eyeglasses','round',11200],['Slim Rectangle','Kiran & Co','Eyeglasses','square',4900],
['Cat-Eye Muse','Aurelia','Eyeglasses','cat',9800],['Featherlite','Nordik','Eyeglasses','square',7600],['Browline Heritage','Maison Vue','Eyeglasses','square',12500],['Hex Metal','Kiran & Co','Eyeglasses','round',5600],
['Aviator Gold','Aurelia','Sunglasses','aviator',13900],['Wayfarer Noir','Nordik','Sunglasses','square',9900],['Oversized Cat','Maison Vue','Sunglasses','cat',14500],['Round Shade','Kiran & Co','Sunglasses','round',6900],
['Pilot Polarised','Aurelia','Sunglasses','aviator',15900],['Sport Wrap','Nordik','Sunglasses','square',8400],
['BlueShield Round','Nordik','Computer Glasses','round',3900],['Focus Square','Kiran & Co','Computer Glasses','square',3400],['ScreenLite Cat','Aurelia','Computer Glasses','cat',4600],
['Junior Flex','Kiran & Co','Kids','round',2900],['Mini Square','Nordik','Kids','square',2600],['Little Cat','Aurelia','Kids','cat',3100]];
export const PRODUCTS=raw.map(([n,brand,cat,shape,price],i)=>({
 id:String(i+1),name:`${brand.split(' ')[0]} ${n}`,brand,cat,shape,price,mrp:Math.round(price*1.18/100)*100,tint:cat==='Sunglasses',
 colors:[PAL[i%6],PAL[(i+2)%6],PAL[(i+4)%6]],sizes:cat==='Kids'?['Small','Medium']:['Small','Medium','Large'],
 rating:+(4.2+((i*7)%8)/10).toFixed(1),reviews:24+i*9,best:[0,4,8,10,14,17].includes(i),
 desc:`A ${shape}-shaped ${cat.toLowerCase().replace(' glasses','')} frame crafted for all-day comfort, with hand-finished edges and spring hinges.`,
 specs:{Material:['Beta-titanium','Italian acetate','Stainless steel','TR-90 flex'][i%4],'Lens width':`${48+(i%5)} mm`,'Bridge':`${17+(i%3)} mm`,'Temple':`${140+(i%3)*2} mm`,Weight:`${14+(i%9)} g`,Warranty:'12 months'}}));
export const CATS=['Eyeglasses','Sunglasses','Computer Glasses','Kids'];
export const BRANDS=[...new Set(PRODUCTS.map(p=>p.brand))];
