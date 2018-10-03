const express = require('express');
const router = express.Router();
const request = require('request');
var path = require("path");
var db = require("./models/index.js");


router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/index.html'));

});


router.post('/user/account/create', function (req, res) {
    let returnedUsername = req.body.userName;

    db.Users.create({
        username: returnedUsername

    }).then(function (data) {

        db.Users.findOne({
            where: {
                username: data.username
            }
        }).then(function (data) {
            res.send({ sendingInfo: data })
        });

    })
});

router.post('/user/account/login', function(req, res){
    let returnedLogginUsername = req.body.loginUserName;

    db.Users.findOne({
        where: {
            username: returnedLogginUsername
        }
    }).then(function(data){
        // console.log(data);
        res.send({ sendingInfo: data});
    });
});


router.get('/user/accounts', function (req, res) {
    db.Users.findAll({}).then(function (response){
        res.send(response);
    });
});

module.exports = router;