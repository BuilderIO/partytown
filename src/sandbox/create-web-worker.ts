export const createWebWorker = () =>
  new Worker(
    URL.createObjectURL(
      new Blob([(globalThis as any).WEB_WORKER_BLOB], {
        type: 'text/javascript',
      })
    )
  );
