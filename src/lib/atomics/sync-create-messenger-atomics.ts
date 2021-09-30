import type { Messenger } from '../types';

const createMessengerAtomics: Messenger = async (sandboxWindow, _receiveMessage) => {
  console.log('ATOMICS ⚛️', sandboxWindow.location.href);
  return true;
};

export default createMessengerAtomics;
