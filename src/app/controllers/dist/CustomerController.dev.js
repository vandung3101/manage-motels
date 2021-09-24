"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Customer = require('../models/Customer.js');

var CustomerController =
/*#__PURE__*/
function () {
  function CustomerController() {
    _classCallCheck(this, CustomerController);
  }

  _createClass(CustomerController, [{
    key: "getData",
    value: function getData(req, res, next) {
      Customer.find().then(function (data) {
        return res.json(data);
      })["catch"](function (err) {
        return res.json(null);
      });
    }
  }, {
    key: "addCustomer",
    value: function addCustomer(req, res, next) {
      var newData = {
        name: req.body.name,
        identity: req.body.identity,
        phone: req.body.phone,
        dateofbirth: req.body.dateofbirth,
        sex: req.body.sex,
        job: req.body.job,
        email: req.body.email,
        note: req.body.note,
        roomid: req.body.roomid,
        roomnumber: req.body.roomnumber,
        startday: req.body.startday,
        leaveday: ''
      };
      var customer = new Customer(newData);
      customer.save().then(function (data) {
        return res.json({
          status: true,
          message: "Add customer successfully",
          data: data
        });
      })["catch"](function (err) {
        return res.json({
          status: true,
          message: "Has error while adding customer"
        });
      });
    }
  }, {
    key: "getCustomer",
    value: function getCustomer(req, res, next) {
      Customer.findOne({
        _id: req.body.id
      }).then(function (data) {
        return res.json({
          status: true,
          data: data
        });
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please try again later"
        });
      });
    }
  }, {
    key: "updateCustomer",
    value: function updateCustomer(req, res, next) {
      Customer.updateOne({
        _id: req.body.id
      }, req.body).then(function (data) {
        return res.json({
          status: true,
          message: "Updated customer successfully"
        });
      })["catch"](function (err) {
        console.log(err);
        return res.json({
          status: false,
          message: "Has error, Please try again later"
        });
      });
    }
  }]);

  return CustomerController;
}();

module.exports = new CustomerController();