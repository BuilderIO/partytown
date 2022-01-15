(() => {
  const h1 = document.getElementById('h1');
  const h1Title = document.getElementById('title');
  h1Title.textContent = `${window.ptType} Benchmark`;
  document.title = h1.textContent;

  const h1Average = document.getElementById('ave');
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

    const inner = document.createElement('div');
    inner.textContent = i;
    inner.id = 'i' + i;
    inner.classList.add('a');
    inner.style.color = 'red';
    outer.appendChild(inner);

    console.log(inner.style.color);
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
      h1Average.textContent = `${ave.toFixed(1)}ms`;
      document.title = h1.textContent;
    }
  };

  setTimeout(() => run(), timeBetween);
})();
