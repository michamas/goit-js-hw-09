!function(){var o=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),n=document.querySelector("body"),e=null;function c(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t,console.log("Background color is: ".concat(t)),o.disabled=!0}o.addEventListener("click",(function(){c(),e=setInterval((function(){c()}),1e3)})),t.addEventListener("click",(function(){clearInterval(e),console.log("Changing color has stopped."),o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.9efec0f7.js.map