(() => {
  const audio = new Audio('./submit.mp3?testNewAudio');
  document.getElementById('btnNewAudio').addEventListener('click', () => {
    audio.play().then(() => {
      const elm = document.getElementById('testNewAudio');
      elm.textContent = 'played';
      elm.className = 'testNewAudio';
    });
  });
})();
