"use strict";

var MainRouter = require('./main');

var AdminRouter = require('./admin');

var DeviceRouter = require('./device');

var RoomRouter = require('./room');

var AccountRouter = require('./account');

var CustomerRouter = require('./customer');

var MeController = require('./me');

function route(app) {
  app.use('/admin', AdminRouter);
  app.use('/device', DeviceRouter);
  app.use('/room', RoomRouter);
  app.use('/account', AccountRouter);
  app.use('/customer', CustomerRouter);
  app.use('/me', MeController);
  app.use('/', MainRouter);
}

module.exports = route;