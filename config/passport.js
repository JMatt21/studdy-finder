var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models");
// var keys = require("../keys.js");
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function (email, password, done) {
    // When a user tries to sign in this code runs
    console.log(email, password);
    db.Users.findOne({
      where: {
        email: email
      },
      // as: 'User',
      // attributes: {
      //   include: [[db.sequelize.fn('lower', db.sequelize.col('user.id')), 'test']]
      // },
      include: [
        { // to get user's match's 
          model: db.Matches,
          include: [{ // to connect them to another user
            model: db.Users,
            attributes: {
              exclude: ['password'],
              include: [[db.sequelize.literal(
                '( 3959 * acos( cos( radians(Users.latitude) ) * cos( radians( `Matches->Match`.`latitude` ) ) * cos( radians( `Matches->Match`.`longitude` ) - radians(Users.longitude) ) + sin( radians(Users.latitude) ) * sin( radians( `Matches->Match`.`latitude` ) ) ) )'), 'distance']]
              // include: [[db.sequelize.literal(
              //   '`Matches->Match`.`email`'), 'distance']]
            },
            as: "Match"
          }],
        }]
    }).then(function (dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        console.log("WRONG EMAIL")
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (dbUser.dataValues.password !== (password)) {
        console.log("WRONG PASSWORD")
        return done(null, false, {
          message: "Incorrect password."
        });
        // If none of the above, return the user
      } else {
        // We want to edit the data that comes back from Sequelize so
        // we will set a temporary variable, 'ret', as the JSON form of dbUser
        let ret = dbUser.toJSON();
        // deleting unecessary keys from ret
        delete ret.password;
        delete ret.advancedSkills;
        delete ret.intermediateSkills
        // setting Matches to be the actual users instead of 'matches' 
        ret.Matches = dbUser.Matches.map(dbMatch => dbMatch.Match);
        return done(null, ret);
      }
    });
  }
));

// passport.use(new GoogleStrategy(
//   {
//     callbackURL: "/auth/google/redirect",
//     // clientID: keys.google.clientID,
//     // clientSecret: keys.google.clientSecret
//   }, (accessToken, refreshToken, profile, done) => {
//     console.log(profile);
//     // db.UserDetails.findOne({
//     //   where: {
//     //     somekindofID: profile.id
//     //   }
//     // }).then(function (dbUser) {
//     //   if (!dbUser) {
//     //     db.UserDetails.create({
//     //       User_name:'',
//     //       Password:'',
//     //       email: ''
//     //     }).then(function (dbUser) {
//     //       return done(null, dbUser);
//     //     });
//     //   }
//     //   else {
//     //     return done(null, dbUser);
//     //   }
//     // });

//   }));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
