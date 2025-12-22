import 'dotenv/config';
import { createApp } from './src/app.js';
import config from './src/config/index.js';

const app = createApp();
const port = config.port;
const serverIP = config.serverIP;

app.listen(port, serverIP, () => {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    Mongo Manager Backend                       ║
╠════════════════════════════════════════════════════════════════╣
║  Server running at: http://${serverIP}:${port.toString().padEnd(26)}║
║  Environment: ${(process.env.NODE_ENV || 'development').padEnd(46)}║
║  API endpoint: http://${serverIP}:${port}/api                      ║
╚════════════════════════════════════════════════════════════════╝
  `);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
