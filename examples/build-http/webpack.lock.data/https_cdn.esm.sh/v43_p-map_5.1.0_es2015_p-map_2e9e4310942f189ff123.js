var m=(p,s,e)=>new Promise((f,x)=>{var h=t=>{try{o(e.next(t))}catch(r){x(r)}},l=t=>{try{o(e.throw(t))}catch(r){x(r)}},o=t=>t.done?f(t.value):Promise.resolve(t.value).then(h,l);o((e=e.apply(p,s)).next())});import S from"/v43/aggregate-error@4.0.0/es2015/aggregate-error.js";function N(x,h){return m(this,arguments,function*(p,s,{concurrency:e=Number.POSITIVE_INFINITY,stopOnError:f=!0}={}){return new Promise((l,o)=>{if(typeof s!="function")throw new TypeError("Mapper function is required");if(!((Number.isSafeInteger(e)||e===Number.POSITIVE_INFINITY)&&e>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${e}\` (${typeof e})`);let t=[],r=[],g=[],y=p[Symbol.iterator](),u=!1,c=!1,a=0,b=0,I=()=>{if(u)return;let i=y.next(),d=b;if(b++,i.done){if(c=!0,a===0)if(!f&&r.length>0)o(new S(r));else{for(let n of g)t.splice(n,1);l(t)}return}a++,(()=>m(this,null,function*(){try{let n=yield i.value;if(u)return;let w=yield s(n,d);w===T?g.push(d):t[d]=w,a--,I()}catch(n){f?(u=!0,o(n)):(r.push(n),a--,I())}}))()};for(let i=0;i<e&&(I(),!c);i++);})})}var T=Symbol("skip");export{N as default};