export const readImplementations = (mainWindow: Window, mainDocument: Document) => {
  const docImpl = mainDocument.implementation.createHTMLDocument();

  const methodNames = new Set<string>();

  const mainImplementations: any[] = [
    mainWindow,
    docImpl,
    docImpl.createTextNode(''),
    docImpl.createElement('i'),
  ];

  mainImplementations.forEach((mainImpl) => {
    for (const memberName in mainImpl) {
      if (!memberName.startsWith('webkit')) {
        if (typeof mainImpl[memberName] === 'function') {
          methodNames.add(memberName);
        }
      }
    }
  });

  return Array.from(methodNames);
};
