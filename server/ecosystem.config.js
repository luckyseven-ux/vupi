module.exports = {
    apps: [
      {
        name: 'gateway',
        script: './gateway/index.js',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'notification',
        script: './notification_services/index.js',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'transaction',
        script: './transaction_services/index.js',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'user',
        script: './user_services/index.js',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  