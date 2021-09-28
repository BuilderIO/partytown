(function () {
  const elm = document.getElementById('testCurrentScriptSrc');
  elm.textContent = document.currentScript.dataset.currentScript;

  const loc = document.getElementById('testCurrentScriptSrcLocation');
  loc.textContent = new URL(document.currentScript.src).pathname;
})();
