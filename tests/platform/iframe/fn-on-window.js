const parentWindow = window.parent;
parentWindow.sum1955 = (val) => 1955 + val;

const rtn = parentWindow.sum1955(30);
const valElm = document.createElement('span');
valElm.textContent = rtn;
document.body.appendChild(valElm);

const elm = parentWindow.document.getElementById('testSetCallWindowParentFn');
elm.textContent = rtn;
elm.className = 'testSetCallWindowParentFn';
