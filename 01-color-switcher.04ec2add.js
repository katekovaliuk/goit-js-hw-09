const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;e.classList.add("button-switcher"),d.classList.add("button-switcher"),e.addEventListener("click",(function(){a=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3),e.disabled=!e.disabled,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,d.disabled=!d.disabled}));
//# sourceMappingURL=01-color-switcher.04ec2add.js.map