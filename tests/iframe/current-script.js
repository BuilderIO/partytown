const elm = window.parent.document.getElementById('testCurrentScript');
elm.className = 'testCurrentScript';

const currentScript = document.currentScript;
const currentUrl = new URL(currentScript.src);
elm.textContent = currentUrl.pathname;

const div = document.createElement('div');
div.textContent = elm.textContent;
document.body.appendChild(div);
