import { startInteractiveMode } from './interactive';
import { startNoninteractiveMode } from './noninteractive';

const filePath: string = process.argv[2];

filePath ? startNoninteractiveMode(filePath) : await startInteractiveMode();
