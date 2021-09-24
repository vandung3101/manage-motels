const jwt = require('jsonwebtoken');
const Account = require('../models/Account.js')
const Device = require('../models/Device.js')
const { multipleMongooseToObject } = require('../../utils/mongoose');
const TOKEN_KEY = 'AmkshOnmshGndksmHg'

class MainController{
    // GET '/admin/home'
    renderHome(req, res, next) {
        res.render('./admin/home')
    }

    // GET '/admin/room
    renderRoom(req, res, next) {
        res.render('./admin/room')
    }

    // GET '/admin/devices
    renderDevice(req, res, next){
        Device.find()
            .then(data =>{
                res.render('./admin/device',{
                    data: multipleMongooseToObject(data)
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    // GET '/admin/account
    renderAccount(req, res, next){
        res.render('./admin/account')
    }

    renderCustomers(req, res, next){
        res.render('./admin/customer')
    }
}
module.exports = new MainController();