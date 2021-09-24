"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room = require('../models/Room.js');

var DeviceInRoom = require('../models/DeviceInRoom.js');

var _require = require('../../utils/mongoose'),
    mongooseToObject = _require.mongooseToObject;

var RoomController =
/*#__PURE__*/
function () {
  function RoomController() {
    _classCallCheck(this, RoomController);
  }

  _createClass(RoomController, [{
    key: "getData",
    // GET '/room/getData
    value: function getData(req, res, next) {
      Room.find().then(function (data) {
        return res.json(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } //POST '/room/create

  }, {
    key: "create",
    value: function create(req, res, next) {
      var defaultObj = {
        renter: '',
        numberpeople: 0,
        status: 'empty'
      };
      var data = Object.assign(defaultObj, req.body);
      var room = new Room(data);
      room.save().then(function (data) {
        return res.json({
          status: true,
          message: "Create room successfully",
          data: data
        });
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, please try again later"
        });
      });
    }
  }, {
    key: "isHasRoom",
    value: function isHasRoom(req, res, next) {
      Room.findOne({
        number: req.body.number
      }).then(function (data) {
        if (data) {
          return res.json({
            status: false,
            message: "Room name was exitst"
          });
        } else {
          next();
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Room name was exitst"
        });
      });
    }
  }, {
    key: "getDataRoom",
    value: function getDataRoom(req, res, next) {
      Room.findOne({
        _id: req.body.id
      }).then(function (data) {
        if (data) {
          return res.json({
            status: true,
            message: "Update successfully",
            data: data
          });
        } else {
          return res.json({
            status: false,
            message: "Has error, Please do not edit this page"
          });
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please do not edit this page"
        });
      });
    } // POST 'room/getDeviceInRoom

  }, {
    key: "getDeviceInRoom",
    value: function getDeviceInRoom(req, res, next) {
      DeviceInRoom.find({
        idroom: req.body.id
      }).then(function (data) {
        return res.json(data);
      });
    } // PUT '/room/update

  }, {
    key: "updateRoom",
    value: function updateRoom(req, res, next) {
      Room.updateOne({
        _id: req.body.id
      }, req.body).then(function (data) {
        if (data) {
          next();
        } else {
          return res.json({
            status: false,
            message: "Has error, Please do not edit this page"
          });
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please try again later"
        });
      });
    } //PUT /room/device/

  }, {
    key: "deleteDeviceInRoom",
    value: function deleteDeviceInRoom(req, res, next) {
      DeviceInRoom.deleteMany({
        idroom: {
          $in: [req.body.idroom]
        }
      }).then(function (data) {
        next();
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error please try again later"
        });
      });
    }
  }, {
    key: "updateInforInRoom",
    value: function updateInforInRoom(req, res, next) {
      var data = [];

      var listIdDevice = _objectSpread({}, req.body.listIdDevice);

      var length = Object.keys(listIdDevice).length; // format data

      for (var i = 0; i < length; i++) {
        var d = {
          idroom: req.body.idroom,
          iddevice: listIdDevice[i]
        };
        data.push(d);
      } // save


      for (var j = 0; j < data.length; j++) {
        var deviceinroom = new DeviceInRoom(data[j]);
        deviceinroom.save();
      }

      return res.json({
        status: true,
        message: "Set data device successfully"
      });
    }
  }, {
    key: "canDeleteRoom",
    value: function canDeleteRoom(req, res, next) {
      Room.findOne({
        _id: req.body.idroom
      }).then(function (data) {
        if (data) {
          console.log(data);
          return false;
        } else {
          return false;
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please do not try again later"
        });
      });
    } // DELETE /room/delete

  }, {
    key: "deleteRoom",
    value: function deleteRoom(req, res, next) {
      Room.deleteOne({
        _id: req.body.idroom
      }).then(function (data) {
        res.json({
          status: true,
          message: "Delete data room successfully"
        });
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please do not try again later"
        });
      });
    }
  }]);

  return RoomController;
}();

module.exports = new RoomController();