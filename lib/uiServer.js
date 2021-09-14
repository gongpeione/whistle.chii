const chii = require('chii');

module.exports = function (server, opt) {
  const { config } = opt;
  const {
    localUIHost = 'local.whistlejs.com',
    port = 8899
  } = config;
  chii.start({
    server,
    domain: `${localUIHost}:${port}/whistle.chii-plus`,
  });
};
