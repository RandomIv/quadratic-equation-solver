import { startInteractiveMode } from './interactive';
import { startNoninteractiveMode } from './noninteractive';
import path from 'node:path';
const filePath: string = process.argv[2];

filePath
  ? startNoninteractiveMode(path.join(process.cwd(), filePath))
  : await startInteractiveMode();
