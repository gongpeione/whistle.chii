const chii = require('chii');

module.exports = function (server) {
  chii.start({
    server,
    domain: 'local.whistlejs.com:8899/whistle.chii',
  });
};
