const Customer = require('../models/Customer.js')
const DeviceInRoom = require('../models/DeviceInRoom.js')
const Device = require('../models/Device.js')
const Room = require('../models/Room.js')
const jwt = require('jsonwebtoken');
const Account = require('../models/Account.js')
const TOKEN_KEY = 'AmkshOnmshGndksmHg'

class MeController{
    renderHome(req, res, next){
        res.render('me/home')
    }
    renderMyInfor(req, res, next){
        res.render('me/myinfor')
    }
    getDataMyRoom(req, res, next){
        let token = req.cookies.token;
        let decodedCookie = jwt.verify(token, TOKEN_KEY)
        let idUser = decodedCookie._id;
        Account.findOne({_id: idUser})
            .then(account =>{
                Customer.find({roomid: account.roomid, leaveday: ''})
                    .then(data=>{
                        return res.json(data)
                    })
            })
    }

    renderRoom(req, res, next){
        let token = req.cookies.token;
        let decodedCookie = jwt.verify(token, TOKEN_KEY)
        let idUser = decodedCookie._id;
        Account.findOne({_id: idUser})
            .then(account =>{
                Room.findOne({_id: account.roomid})
                    .then(data=>{
                        res.render('me/myroom', {
                            data: {
                                number: data.number,
                                renter: data.renter,
                                numberpeople: data.numberpeople,
                                area: data.area,
                                price: data.price,
                                description: data.description
                            }
                        })
                    })
            })
    }

    getDeviceInRoom(req, res, next) {
        let token = req.cookies.token;
        let decodedCookie = jwt.verify(token, TOKEN_KEY)
        let idUser = decodedCookie._id;
        Account.findOne({_id: idUser})
            .then(account =>{
                DeviceInRoom.find({idroom: account.roomid})
                    .then(data=>{
                        let idDevice =[]
                        data.forEach(item=>{
                            idDevice.push(item.iddevice)
                        })
                        Device.find({_id: {$in: idDevice}})
                            .then(data=>{
                                return res.json(data)
                            })
                    })
            })
    }
}


module.exports = new MeController();