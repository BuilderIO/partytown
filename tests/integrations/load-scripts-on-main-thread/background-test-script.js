(() => {
  self.backgroundTestScriptRanInTheBackgroundFlag = self.name !== '';
  document.body.classList.add('background-completed');
})();
