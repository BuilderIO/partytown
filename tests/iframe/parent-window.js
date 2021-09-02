(function () {
  const year = window.parent.testScriptWindowParent.year;

  window.top.document.getElementById('testScriptWindowParent').textContent = year;
  window.parent.document
    .getElementById('testScriptWindowParent')
    .classList.add('testScriptWindowParent');
})();
