const t=document.querySelector("canvas"),e=document.querySelectorAll(".tool"),r=document.querySelector(".brush"),a=document.querySelector(".eraser"),o=document.querySelector(".fill-color"),s=document.querySelector("#size-slider"),l=document.querySelector(".size"),n=document.querySelector("#pick-color"),i=document.querySelector(".clear"),c=document.querySelector(".save"),f=t.getContext("2d");let d,u,m,h=!1,b=!1,y="brush",w=1,p="#000";const v=()=>{f.fillStyle="#fff",f.fillRect(0,0,t.width,t.height),f.fillStyle=p},E=t=>{if(!b)return f.strokeRect(t.offsetX,t.offsetY,d-t.offsetX,u-t.offsetY);f.fillRect(t.offsetX,t.offsetY,d-t.offsetX,u-t.offsetY)},S=t=>{f.beginPath();let e=Math.sqrt(Math.pow(d-t.offsetX,2)+Math.pow(u-t.offsetY,2));f.arc(d,u,e,0,2*Math.PI),b?f.fill():f.stroke()},g=t=>{f.beginPath(),f.moveTo(d,u),f.lineTo(t.offsetX,t.offsetY),f.lineTo(2*d-t.offsetX,t.offsetY),f.closePath(),b?f.fill():f.stroke()};window.addEventListener("load",()=>{t.width=t.offsetWidth,t.height=t.offsetHeight,v()}),n.addEventListener("change",()=>p=n.value),s.addEventListener("input",()=>{w=s.value,l.textContent=s.value}),r.addEventListener("click",()=>{y="brush",r.className="btn btn-primary w-100 text-start brush",a.className="btn btn-outline-primary w-100 text-start eraser",e.forEach(t=>{t.className="btn btn-outline-primary w-100 text-start tool"})}),a.addEventListener("click",()=>{y="eraser",r.className="btn btn-outline-primary w-100 text-start brush",a.className="btn btn-primary w-100 text-start eraser",e.forEach(t=>{t.className="btn btn-outline-primary w-100 text-start tool"})}),o.addEventListener("click",()=>{b?(b=!1,o.className="btn btn-outline-primary w-100 text-start fill-color"):(b=!0,o.className="btn btn-primary w-100 text-start fill-color")}),e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(t=>{t.className="btn btn-outline-primary w-100 text-start tool"}),t.className="btn btn-primary w-100 text-start tool",r.className="btn btn-outline-primary w-100 text-start brush",a.className="btn btn-outline-primary w-100 text-start eraser",y=t.id})}),i.addEventListener("click",()=>{f.clearRect(0,0,t.width,t.height),v()}),c.addEventListener("click",()=>{let e=document.createElement("a");e.download=`${Date.now()}-S1mon009.jpg`,e.href=t.toDataURL(),e.click()}),t.addEventListener("mousedown",e=>{h=!0,d=e.offsetX,u=e.offsetY,f.beginPath(),f.lineWidth=w,f.strokeStyle=p,f.fillStyle=p,m=f.getImageData(0,0,t.width,t.height)}),t.addEventListener("mousemove",t=>{h&&(f.putImageData(m,0,0),"brush"===y||"eraser"===y?(f.strokeStyle="eraser"===y?"#fff":p,f.lineTo(t.offsetX,t.offsetY),f.stroke()):"rectangle"===y?E(t):"circle"===y?S(t):g(t))}),t.addEventListener("mouseup",()=>h=!1);//# sourceMappingURL=index.2608ff21.js.map

//# sourceMappingURL=index.2608ff21.js.map
