const nodemailer = require('nodemailer');
const Account = require('../models/Account.js')
const Room = require('../models/Room.js')
let URL = "http://localhost:3000/login"
class AccountController{
    // GET '/account/getData'
    getData(req, res, next) {
        Account.find({role: 'guest'})
            .then(data=>{
                return res.json(data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    // POST /account/create
    isHasAccount(req, res, next) {
        Account.findOne({username: req.body.username})
            .then(data=>{
                if(data){
                    return res.json({status: false, message: "Username was exitst"})
                } else{
                    next();
                }
            })
            .catch(err=>{
                return res.json({status: false, message: "Has error, Please try again later"})
            })
    }

    async create(req, res, next) {
        let pass = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        let defaultData = {
            role: "guest",
            password: pass
        }
        let data = Object.assign(req.body, defaultData)
        let account = new Account(data)
        account.save();

        let email = req.body.email;
        let content = `
            <h2> Account For Your Room</h2>
            <div> Please do not share your account with others people</p>
            </div>Your account is</div>
            <div>Username :${req.body.username}<br>Password :${pass} </div>
            Information about your room: </br>
            Room number : ${req.body.roomnumber}
            <br><a href='${URL}'>Click here </a>to login
        `
        sendMail(email, content)
        return res.json({status: true, message: "Create account successfully"})

    }

    getAccount(req, res, next) {
        Account.findOne({username: req.body.username})
            .then(data=>{
                if(data){
                    let newData = {
                        username: data.username,
                        roomnumber: data.roomnumber,
                        roomid: data.roomid,
                        email: data.email
                    }
                    return res.json({status: true,data: newData})
                } else{
                    return res.json({status: false, message: "Please try again later!"})
                }
            })
            .catch(err=>{
                return res.json({status: false, message: "Please try again later!"})
            })
    }

    // PUT /account/update
    updateAccount(req, res, next) {
        Account.updateOne({username: req.body.username}, req.body)
            .then(data=>{
                return res.json({status: true, message: "Account was update"})
            })
            .catch(err=>{
                return res.json({status: false, message: "Please try again later"})
            })
    }

    // DELETE account/delete
    deleteAccount(req, res, next) {
        Account.deleteOne({username: req.body.username})
            .then(data=>{
                return res.json({status: true, message: "Account was deleted"})
            })
            .catch(err=>{
                return res.json({status: false, message: "Please try again later"})
            })
    }
}


async function sendMail(reciever, content){
    try{
        var transporter = nodemailer.createTransport('smtps://vinhtieng9889%40gmail.com:098767890@smtp.gmail.com');
        var mailOptions = {
            from: '"Vinh Tieng" <Vinh tiếng nè>', // sender address
            to: `${reciever}`, // list of receivers
            subject: 'Account for your room', // Subject line
            text: 'Hello world ?', // plaintext body
            html: `${content}` // html body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log("My err : " + error);
            }
            console.log('Message sent: ' + info.response);
        });
    } catch(err){
        console.log("Has err : " + err)
    }
}
module.exports = new AccountController();