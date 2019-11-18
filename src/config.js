'use strict';

const path = require('path');

const pwd = path.resolve(__dirname);
const viewsDir = path.resolve(pwd, 'views');

module.exports = {
  viewsDir,
  port: 8090
};
