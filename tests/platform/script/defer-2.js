(function () {
  const elm = document.getElementById('testAsync');
  elm.textContent += ' d2';
  setTimeout(() => {
    elm.className = 'testAsync';
  }, 50);
})();
