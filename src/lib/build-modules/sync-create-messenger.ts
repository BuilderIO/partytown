import type { Messenger } from '../types';

const syncCreateMessenger: Messenger = async (receiveMessage) => {
  // dynamically replaced at build-time with
  receiveMessage;
  return null as any;
};

export default syncCreateMessenger;
