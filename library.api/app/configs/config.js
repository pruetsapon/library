module.exports = {
    app: {
      name: process.env.APP_NAME,
      port: process.env.APP_PORT || 8000,
      environment: process.env.APPLICATION_ENV,
      logpath: process.env.LOG_PATH,
    },
    mongo: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME
    },
    logger: {
      file: process.env.LOG_PATH,
      level: process.env.LOG_LEVEL || 'info',
      console: process.env.LOG_ENABLE_CONSOLE || true
    },
    auth: {
      secret: process.env.AUTH_SECRET,
      expiresIn: process.env.EXPIRES_IN
    }
};