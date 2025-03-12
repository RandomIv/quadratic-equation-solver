import { startInteractiveMode } from './interactive';

const filePath: string = process.argv[2];

if (!filePath) await startInteractiveMode();
