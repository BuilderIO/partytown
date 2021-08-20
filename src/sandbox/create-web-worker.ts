export const createWebWorker = (workerName: string) =>
  new Worker(
    URL.createObjectURL(
      new Blob([(globalThis as any).WEB_WORKER_BLOB], {
        type: 'text/javascript',
      })
    ),
    { name: `Partytown${workerName !== 'default' ? ` (${workerName})` : ``} 🎉` }
  );
