import fs from 'fs';
import { dirname } from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

export const copyFile = promisify(fs.copyFile);
export const mkdir = promisify(fs.mkdir);
export const readdir = promisify(fs.readdir);
export const readFile = promisify(fs.readFile);
export const stat = promisify(fs.stat);

export const __dirname = dirname(fileURLToPath(import.meta.url));
