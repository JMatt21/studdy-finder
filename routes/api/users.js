const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/users/:id"
router.route("/:id")
    // To get user data
    .get(function (req, res) {
        let id = req.params.id;
        db.Users.findOne({
            where: { id: id },
            include: [
                { // to get user's match's 
                    model: db.Matches,
                    include: [{ // to connect them to another user
                        model: db.Users,
                        attributes: {
                            exclude: 'password',
                            include: [[db.sequelize.literal(
                                '( 3959 * acos( cos( radians(Users.latitude) ) * cos( radians( `Matches->Match`.`latitude` ) ) * cos( radians( `Matches->Match`.`longitude` ) - radians(Users.longitude) ) + sin( radians(Users.latitude) ) * sin( radians( `Matches->Match`.`latitude` ) ) ) )'), 'distance']]
                        },
                        as: "Match"
                    }],
                }]
        }).then(dbUser => {
            let ret = dbUser.toJSON();
            // deleting unecessary keys from ret
            delete ret.password;
            delete ret.advancedSkills;
            delete ret.intermediateSkills;
            // setting Matches to be the actual users instead of 'matches' 
            ret.Matches = dbUser.Matches.map(dbMatch => dbMatch.Match);
            res.json(ret);

        })
    })
// To update user
router.route("/update/:id")
    .post(function (req, res) {
        const userId = req.params.id;
        const updateInfo = req.body;
        db.Users.update(updateInfo, {
            where: { id: userId }
        })
            .then(() => {
                res.json(true)
            }).catch(err => {
                res.json(err);
            });
    });
// Matches with /api/users/rooms/:id
router.route("/rooms/:id")
    .get((req, res) => {
        const UserId = req.params.id;
        console.log(`GETTING ROOMS FOR ${UserId}`);
        db.Matches.findAll({
            where: {
                UserId: UserId
            }
        }).then(dbRooms => {
            let socketRooms = dbRooms.map(room => {
                if (room.UserId < room.MatchId) {
                    return `${room.UserId}+${room.MatchId}`
                } else {
                    return `${room.MatchId}+${room.UserId}`
                }
            })
            console.log(`RETURNING ROOMS ${socketRooms} FOR ${UserId}`)
            res.json(socketRooms)
        })
    });

router.route("/match")
    .post((req, res) => {
        const { user1Id, user2Id } = req.body;
        if (user1Id === user2Id) {
            res.json(401, "A User cannot match with itself.")
        } else {
            db.Matches.findOne({
                where: {
                    UserId: user1Id,
                    MatchId: user2Id
                }
            }).then(dbMatch => {
                if (!dbMatch) {
                    db.Matches.bulkCreate([
                        { UserId: user1Id, MatchId: user2Id },
                        { UserId: user2Id, MatchId: user1Id },
                    ]).then(() => {
                        let newRoom;
                        if (user1Id > user2Id) {
                            newRoom = `${user2Id}+${user1Id}`
                        }
                        else {
                            newRoom = `${user1Id}+${user2Id}`
                        }
                        res.json(newRoom)
                    }).catch(err => {
                        res.json(err);
                    })
                } else {
                    res.json(false)
                }
            }).catch(err => {
                res.json(err);
            })
        }
    })
router.route("/validate_password")
    .post((req, res) => {
        const { userId, oldPassword, newPassword } = req.body;
        db.Users.findOne({ where: { id: userId } })
            .then(dbUser => {
                if (dbUser.dataValues.password === oldPassword) {
                    db.Users.update({ password: newPassword }, { where: { id: userId } })
                        .then(() => res.json(true))
                        .catch(err => res.json(err));
                } else {
                    res.json(false);
                }
            })
    })
module.exports = router;
