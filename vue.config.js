module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'dev'
    ? '/'
    : '/ac-sniper/',
}
