const parentWindow = window.parent;
parentWindow.sum = (val) => 1955 + val;

const rtn = parentWindow.sum(30);
const valElm = document.createElement('span');
valElm.textContent = rtn;
document.body.appendChild(valElm);

const elm = parentWindow.document.getElementById('testSetCallWindowParentFn');
elm.textContent = rtn;
elm.className = 'testSetCallWindowParentFn';
