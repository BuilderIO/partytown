window.noGlobalShare = window.noGlobalShare || {
  value: Math.random(),
};

(function () {
  const elm = document.getElementById('testWWGlobalValue');
  elm.textContent = window.noGlobalShare.value;
})();
