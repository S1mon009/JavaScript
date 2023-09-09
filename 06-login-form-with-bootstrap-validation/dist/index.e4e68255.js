const t=document.querySelectorAll(".choose-btn"),e=document.querySelectorAll(".needs-validation");t.forEach((c,a)=>{c.addEventListener("click",function(){t.forEach((t,e)=>{e!==a&&t.classList.toggle("active"),e===a&&t.classList.toggle("active")}),e.forEach(t=>{t.classList.toggle("d-none")})})}),Array.prototype.slice.call(e).forEach(function(t){t.addEventListener("submit",function(e){t.checkValidity()||(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")},!1)});//# sourceMappingURL=index.e4e68255.js.map

//# sourceMappingURL=index.e4e68255.js.map
