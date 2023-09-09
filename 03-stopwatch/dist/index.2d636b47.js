let t,e,r,n,c;const o=document.querySelector(".start"),a=document.querySelector(".reset"),d=document.querySelector(".minutes"),i=document.querySelector(".seconds"),l=document.querySelector(".microsecunds"),s=document.querySelector(".clock"),u=document.querySelector(".microClock"),m=document.querySelector(".microLine"),v=document.querySelector(".sec");function y(){t=0,e=0,r=0,n=!0,d.textContent=`0${t}`,i.textContent=`0${e}`,l.textContent=`0${r}`,v.style.transform="rotateZ(0deg)",m.style.transform="rotateZ(0deg)"}o.addEventListener("click",function(){n?(n=!n,c=setInterval(function(){100==++r&&(r=0,e++,v.style.transform=`rotateZ(${6*e}deg)`),60===e&&(t++,e=0,r=0),m.style.transform=`rotateZ(${3.6*r}deg)`,d.textContent=String(t).padStart(2,0),i.textContent=String(e).padStart(2,0),l.textContent=String(r).padStart(2,0)},10)):(n=!n,clearInterval(c))}),a.addEventListener("click",function(){clearInterval(c),y()}),function(){for(let t=0;t<60;t++){let e=document.createElement("div");e.innerHTML=`<div class="minuteTable" style="transform: rotate(${6*t}deg)">
    <div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div>
  </div>`,s.appendChild(e)}for(let t=0;t<10;t++){let e=document.createElement("div");e.innerHTML=`<div class="minuteTable" style="transform: rotate(${36*t}deg)">
    <div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div>
  </div>`,u.appendChild(e)}}(),y();//# sourceMappingURL=index.2d636b47.js.map

//# sourceMappingURL=index.2d636b47.js.map
