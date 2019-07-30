module.exports = {
    app: {
      name: process.env.APP_NAME,
      port: process.env.APP_PORT || 8000,
      environment: process.env.APPLICATION_ENV,
      logpath: process.env.LOG_PATH,
    },
    logger: {
      path: process.env.LOG_PATH,
      level: process.env.LOG_LEVEL || 'info',
      console: process.env.LOG_ENABLE_CONSOLE || true,
      maxKeep: process.env.LOG_MAX_KEEP,
      maxSize: process.env.LOG_MAX_SIZE
    },
    api: {
      url: process.env.APL_URL
    }
};