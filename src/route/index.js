const MainRouter = require('./main');
const AdminRouter = require('./admin')
const DeviceRouter = require('./device');
const RoomRouter = require('./room');
const AccountRouter = require('./account');
const CustomerRouter = require('./customer');
const MeController = require('./me');
function route(app){
    app.use('/admin', AdminRouter);
    app.use('/device', DeviceRouter);
    app.use('/room', RoomRouter);
    app.use('/account', AccountRouter);
    app.use('/customer', CustomerRouter);
    app.use('/me', MeController);
    app.use('/', MainRouter);
}

module.exports = route;