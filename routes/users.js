const router = require('express').Router();
let User = require('../models/user.model');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json({ message: "Users Fetched", user: users }))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const newUser = new User({ username, email, password, role });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/login').post((req, res) => {
    const userData = req.body;
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);

    User.findOne({ email: userData.email }, (err, result) => {
        console.log(result.password);

        if (err) {
            console.log("Inavlid Email/Password");
            res.status(200).json({
                message: "Inavlid Email/Password",
                user: [],
                token: ''
            })
        } else {
            if (result != null) {
                if (result.password === userData.password) {
                    const token = jwt.sign({ userName: result.username, id: result._id }, 'skasjashh3433222111f')
                    console.log("successfull login");
                    res.status(200).json({
                        message: "Successfull Login",
                        user: { userName: result.username, id: result._id, role: result.role },
                        token: token
                    })
                } else {
                    console.log("Inavlid Email/Password");
                    res.status(200).json({
                        message: "Inavlid Email/Password",
                        user: [],
                        token: ''
                    })
                }
            } else {
                console.log("Inavlid Email/Password");
                res.status(200).json({
                    message: "Inavlid Email/Password",
                    user: [],
                    token: ''
                })
            }
        } //////rajesh goswami

    })
})

module.exports = router;