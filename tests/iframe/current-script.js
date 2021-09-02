const elm = window.parent.document.getElementById('testCurrentScript');
elm.className = 'testCurrentScript';

const currentUrl = new URL(document.currentScript.src);
elm.textContent = currentUrl.pathname;

const div = document.createElement('div');
div.textContent = elm.textContent;
document.body.appendChild(div);
