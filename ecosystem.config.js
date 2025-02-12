module.exports = {
  apps: [
    {
      name: 'cis-pintech',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 5000',
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
}
