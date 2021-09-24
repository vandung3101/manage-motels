"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nodemailer = require('nodemailer');

var Account = require('../models/Account.js');

var Room = require('../models/Room.js');

var URL = "http://localhost:3000/login";

var AccountController =
/*#__PURE__*/
function () {
  function AccountController() {
    _classCallCheck(this, AccountController);
  }

  _createClass(AccountController, [{
    key: "getData",
    // GET '/account/getData'
    value: function getData(req, res, next) {
      Account.find({
        role: 'guest'
      }).then(function (data) {
        return res.json(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } // POST /account/create

  }, {
    key: "isHasAccount",
    value: function isHasAccount(req, res, next) {
      Account.findOne({
        username: req.body.username
      }).then(function (data) {
        if (data) {
          return res.json({
            status: false,
            message: "Username was exitst"
          });
        } else {
          next();
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Has error, Please try again later"
        });
      });
    }
  }, {
    key: "create",
    value: function create(req, res, next) {
      var pass, defaultData, data, account, email, content;
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pass = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
              defaultData = {
                role: "guest",
                password: pass
              };
              data = Object.assign(req.body, defaultData);
              account = new Account(data);
              account.save();
              email = req.body.email;
              content = "\n            <h2> Account For Your Room</h2>\n            <div> Please do not share your account with others people</p>\n            </div>Your account is</div>\n            <div>Username :".concat(req.body.username, "<br>Password :").concat(pass, " </div>\n            Information about your room: </br>\n            Room number : ").concat(req.body.roomnumber, "\n            <br><a href='").concat(URL, "'>Click here </a>to login\n        ");
              sendMail(email, content);
              return _context.abrupt("return", res.json({
                status: true,
                message: "Create account successfully"
              }));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getAccount",
    value: function getAccount(req, res, next) {
      Account.findOne({
        username: req.body.username
      }).then(function (data) {
        if (data) {
          var newData = {
            username: data.username,
            roomnumber: data.roomnumber,
            roomid: data.roomid,
            email: data.email
          };
          return res.json({
            status: true,
            data: newData
          });
        } else {
          return res.json({
            status: false,
            message: "Please try again later!"
          });
        }
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Please try again later!"
        });
      });
    } // PUT /account/update

  }, {
    key: "updateAccount",
    value: function updateAccount(req, res, next) {
      Account.updateOne({
        username: req.body.username
      }, req.body).then(function (data) {
        return res.json({
          status: true,
          message: "Account was update"
        });
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Please try again later"
        });
      });
    } // DELETE account/delete

  }, {
    key: "deleteAccount",
    value: function deleteAccount(req, res, next) {
      Account.deleteOne({
        username: req.body.username
      }).then(function (data) {
        return res.json({
          status: true,
          message: "Account was deleted"
        });
      })["catch"](function (err) {
        return res.json({
          status: false,
          message: "Please try again later"
        });
      });
    }
  }]);

  return AccountController;
}();

function sendMail(reciever, content) {
  var transporter, mailOptions;
  return regeneratorRuntime.async(function sendMail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            transporter = nodemailer.createTransport('smtps://vinhtieng9889%40gmail.com:098767890@smtp.gmail.com');
            mailOptions = {
              from: '"Vinh Tieng" <Vinh tiếng nè>',
              // sender address
              to: "".concat(reciever),
              // list of receivers
              subject: 'Account for your room',
              // Subject line
              text: 'Hello world ?',
              // plaintext body
              html: "".concat(content) // html body

            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log("My err : " + error);
              }

              console.log('Message sent: ' + info.response);
            });
          } catch (err) {
            console.log("Has err : " + err);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = new AccountController();