const e=document.querySelector("input"),t=document.querySelector("i"),c=document.querySelectorAll("li"),s=[8,/[A-Z]/g,/[0-9]/g,/[^\w ]/g];let i=!1;e.addEventListener("input",function(){var e;e=this.value,s.forEach((t,s)=>{0==s?e.length>=t?c[s].classList.add("active"):c[s].classList.remove("active"):e.match(t)?c[s].classList.add("active"):c[s].classList.remove("active")})}),t.addEventListener("click",function(){i=!i,t.className=`bi ${i?"bi-eye":"bi-eye-slash"}`,e.type=`${i?"text":"password"}`});//# sourceMappingURL=index.d97a4203.js.map

//# sourceMappingURL=index.d97a4203.js.map
