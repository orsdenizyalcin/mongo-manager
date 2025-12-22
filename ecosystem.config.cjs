module.exports = {
  apps: [
    {
      name: 'mongo-manager-api',
      cwd: './backend',
      script: 'server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        SERVER_IP: '0.0.0.0' // Change to specific IP if needed (e.g., '192.168.1.100')
      }
    },
    {
      name: 'mongo-manager-ui',
      cwd: './frontend',
      script: './node_modules/vite/bin/vite.js',
      args: 'preview'
    }
  ]
};
