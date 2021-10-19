function fn(x) {
  const win = window;
  const winParent = win.parent;
  const winParentDocument = winParent.document;

  const iframe = winParentDocument.getElementById('deadlock-iframe');

  const iframeWin = iframe.contentWindow;

  const result = iframeWin.val + x;

  return result;
}

window.fn = fn;
window.val = 88;
