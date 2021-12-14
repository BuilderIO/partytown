import type { Messenger } from '../types';

const syncCreateMessenger: Messenger = async (sandboxWindow, receiveMessage) => {
  // dynamically replaced at build-time with
  sandboxWindow;
  receiveMessage;
  return null as any;
};

export default syncCreateMessenger;
