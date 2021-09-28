const parentWindow = window.parent;
const rtn = parentWindow.sum1985(30);

const valElm = document.createElement('span');
valElm.textContent = rtn;
document.body.appendChild(valElm);

const elm = parentWindow.document.getElementById('testCallWindowParentFn');
elm.textContent = rtn;
elm.className = 'testCallWindowParentFn';
