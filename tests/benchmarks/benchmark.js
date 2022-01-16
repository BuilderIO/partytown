(() => {
  const h1 = document.getElementById('h1');
  document.title = h1.textContent;

  const resultElm = document.getElementById('result');
  resultElm.hidden = false;
  const output = document.getElementById('output');
  const results = document.getElementById('results');

  const timeBetween = 20;
  const iterateCount = 1000;
  const runCount = 10;
  const runs = [];

  const test = (i) => {
    const outer = document.createElement('div');
    outer.setAttribute('attr', i);
    outer.removeAttribute('attr');
    outer.className = 'c' + i;
    output.appendChild(outer);

    const inner = document.createElement('span');
    inner.textContent = i;
    inner.id = 'i' + i;
    inner.classList.add('a');
    inner.style.color = 'red';
    inner.tabIndex = i;
    outer.appendChild(inner);

    inner.style.color;
  };

  const run = () => {
    const start = performance.now();
    for (let i = 0; i < iterateCount; i++) {
      test(i);
    }
    const duration = performance.now() - start;
    runs.push(duration);

    const runId = runs.length;

    output.textContent = '';

    const resultTr = document.createElement('tr');
    const resultTh = document.createElement('th');
    resultTh.textContent = runId;
    const resultTd = document.createElement('td');
    resultTd.textContent = `${duration.toFixed(1)}ms`;
    resultTr.appendChild(resultTh);
    resultTr.appendChild(resultTd);
    results.appendChild(resultTr);

    if (runId < runCount) {
      setTimeout(() => run(), timeBetween);
    } else {
      const total = runs.reduce((t, dur) => {
        t += dur;
        return t;
      }, 0);
      const ave = total / runCount;
      resultElm.textContent = `${ave.toFixed(1)}ms`;
      resultElm.classList.add('completed');
      document.title = h1.textContent;
    }
  };

  setTimeout(() => run(), timeBetween);
})();
