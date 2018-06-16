module.exports = {
  apps : [
    {
      name      : 'App',
      script    : 'app.js',
      watch     : false,
      ignore_watch : ["node_modules", "client", "server/views"],
      watch_options: {
        "followSymlinks": false
      },
      instances : 1,
      exec_mode: "cluster",
      env: {
      },
      env_production : {
      }
    }
  ]
};
