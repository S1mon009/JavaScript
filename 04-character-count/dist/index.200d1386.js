const e=document.querySelector(".textarea"),t=document.querySelector(".count");e.addEventListener("input",function(r){t.textContent=`${r.target.value.length}/150`,r.target.value.length>=150?(e.style.border="3px solid var(--wrong-input)",e.style.color="var(--wrong-input)",t.style.color="var(--wrong-input)"):r.target.value.length<150&&(e.style.border="3px solid var(--active-border-color)",e.style.color="#000",t.style.color="#000"),0===r.target.value.length&&(e.style.border="3px solid var(--border-color)")});//# sourceMappingURL=index.200d1386.js.map

//# sourceMappingURL=index.200d1386.js.map
