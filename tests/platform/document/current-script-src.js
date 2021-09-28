const elm = document.getElementById('testCurrentScriptSrc');
elm.textContent = document.currentScript.dataset.currentScript;

const loc = document.getElementById('testCurrentScriptSrcLocation');

const currentScript = document.currentScript;
const currentUrl = new URL(currentScript.src);
loc.textContent = currentUrl.pathname;
