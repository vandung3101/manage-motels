const jwt = require('jsonwebtoken');
const Account = require('../models/Account.js')
const TOKEN_KEY = 'AmkshOnmshGndksmHg'
class MainController{
    // GET '/login'
    renderLogin(req, res, next) {
        res.render('login')
    }
    pageNotFound(req, res, next){
        res.send('Page not fount, please check yout url or <a href="/login"> click here</a> to login')
    }
    //POST '/login'
    login(req, res, next) {
        Account.findOne({username: req.body.username, password: req.body.password})
            .then(data => {
                if(data){
                    var token = jwt.sign({
                        _id: data._id
                    }, TOKEN_KEY);
                    return res.json({
                        role: data.role,
                        token,
                    })
                } else{
                    return res.json(null)
                }
            })
            .catch(err => {
                return null;
            })
    }

    // Middleware
    isLogin(req, res, next) {
        try{
            if(jwt){
                let token = req.cookies.token;
                let decodedCookie = jwt.verify(token, TOKEN_KEY)
                let idUser = decodedCookie._id;
                Account.findOne({_id: idUser})
                    .then(data =>{
                        if(data){
                            next()
                        }
                    })
            } else {
                res.redirect('/login');
            }
        } catch(err){
            console.log(err);
            res.redirect('/login')
        }
    }

    isAdmin(req, res, next) {
        try{
            let token = req.cookies.token;
            let decodedCookie = jwt.verify(token, TOKEN_KEY)
            let idUser = decodedCookie._id;
            Account.findOne({_id: idUser})
                .then(data =>{
                    if(data.role === 'admin'){
                        next()
                    } else {
                        res.redirect('/login')
                    }
                })
            .catch(err =>{
                res.redirect('/login')
            })
        } catch(err){
            res.redirect('/login')
        }
    }
}
module.exports = new MainController();