(() => {
  self.testScriptRanInTheBackgroundFlag = self.name !== '';
  document.body.classList.add('completed');
})();
