import type { MainWindow, PartytownConfig } from '../types';
import { debug } from '../utils';

export const mainWindow: MainWindow = window.parent;
export const doc = document;

export const config: PartytownConfig = mainWindow.partytown || {};
export const libPath = (config.lib || '/~partytown/') + (debug ? 'debug/' : '');
