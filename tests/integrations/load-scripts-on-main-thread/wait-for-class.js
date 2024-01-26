export function waitForClass(element, className) {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const currentClassState =
            mutation.target instanceof HTMLElement
              ? mutation.target.classList.contains(className)
              : false;
          if (currentClassState) {
            observer.disconnect();
            resolve();
          }
        }
      });
    });
    observer.observe(element, { attributes: true });
  });
}
