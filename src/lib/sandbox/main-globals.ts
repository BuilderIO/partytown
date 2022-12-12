import type { MainWindow, PartytownConfig } from '../types';
import { debug } from '../utils';

export const mainWindow: MainWindow = window.parent;
export const docImpl = document.implementation.createHTMLDocument();

export const config: PartytownConfig = mainWindow.partytown || {};

const libInnerPath = debug ? 'debug/' : '';
export const libPath = (config.lib || '/~partytown/') + libInnerPath;
export const sandboxLibPath = config.sandboxLib ? config.sandboxLib + libInnerPath : null;
