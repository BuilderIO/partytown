const parentWindow = window.parent;
parentWindow.sum1955 = (val) => 1955 + val;

const fn = parentWindow.sum1955;
const rtn = fn(30);

const output = document.createElement('span');
output.id = 'output';
output.textContent = rtn;
document.body.appendChild(output);

const elm = parentWindow.document.getElementById('testSetCallWindowParentFn');
elm.textContent = output.textContent;
