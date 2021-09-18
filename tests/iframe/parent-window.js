const win = window;
const winTop = win.top;
const winTopTestScriptWindowParent = winTop.testScriptWindowParent;
const topYear = winTopTestScriptWindowParent.year;

const parentYear = window.parent.testScriptWindowParent.year;
const total = topYear + parentYear;

const div = document.createElement('div');
div.textContent = total;
document.body.appendChild(div);

window.top.document.getElementById('testScriptWindowParent').textContent = total;
window.parent.document
  .getElementById('testScriptWindowParent')
  .classList.add('testScriptWindowParent');
