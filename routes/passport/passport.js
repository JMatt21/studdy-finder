// Requiring our models and passport as we've configured it
const router = require("express").Router();
var db = require("../../models");
var passport = require("../../config/passport");


// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // this route is required since it handles the authentication
    // react will handle the redirect but it does need the info from the server about the new user
    console.log("re routing from api/signup")
    let ret = req.user;
    delete ret.dataValues.password;
    res.json(ret); // we can send things here in place of api/user_info
    // this means once a user logs in/ signs up we can send them their user info quickly
    // req.user is defined in passport.js in the config folder
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", function (req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    db.Users.create({
        // name: 'test',
        email: email,
        password: password
    }).then(ret => {
        res.redirect(307, "/api/login");
    }).catch(function (err) {
        console.log('-----------------')
        console.log(err);
        res.status(403).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
    console.log("logging out");
    req.logout();
    // express cannot redirect while react is on so we can only send a response to it
    res.json("log out lad");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    }
    else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        // The data is actually stored in a cookie on the client so anything that
        // would get updated wouldn't change that cookie for the client until they re-log
        // so we will get their id and send back the dbUser associated 
        db.Users.findOne({
            where: { id: req.user.id },
            include: [
                { // to get user's match's 
                    model: db.Matches,
                    include: [{ // to connect them to another user
                        model: db.Users,
                        attributes: {
                            exclude: 'password'
                        },
                        as: "Match"
                    }],
                }]
        })
            .then(dbUser => {
                res.json(dbUser)
            })
    }
});

module.exports = router;

