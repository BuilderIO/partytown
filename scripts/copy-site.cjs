const { copy, emptyDir } = require('fs-extra');
const { join } = require('path');

async function copySiteDist() {
  const rootDir = join(__dirname, '..');
  const dist = join(rootDir, 'dist');
  const docsSrcDist = join(rootDir, 'docs', 'site', 'dist');

  await emptyDir(dist);

  console.log(docsSrcDist);
  await copy(docsSrcDist, dist, { overwrite: true });

  const distTests = join(dist, 'tests');
  await emptyDir(distTests);

  const tests = ['benchmarks', 'integrations', 'platform', '404.html', 'index.html'];
  await Promise.all(
    tests.map(async (f) => {
      const src = join(rootDir, 'tests', f);
      const dest = join(distTests, f);
      console.log(dest);
      await copy(src, dest, { overwrite: true });
    })
  );
}

copySiteDist();
