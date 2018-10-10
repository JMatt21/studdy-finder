const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/users/:id"
router.route("/:id")
    // To get user data
    .get(function (req, res) {
        let id = req.params.id;
        db.Users.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: 'password'
            },
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
        }).then(dbUser => {
            res.json(dbUser)
        })
    })
// To update user
// .post(function (req, res) {
//     const userId = req.params.id;
//     db.update({
//         where: { id: userId }
//     }, req.body.user)
//         .then(dbUser => {
//             const { name, id, email, beginnerSkills, intermediateSkills, advancedSkills } = dbUser;
//             res.json({
//                 name: name,
//                 id: id,
//                 email: email,
//                 beginnerSkills: beginnerSkills,
//                 intermediateSkills: intermediateSkills,
//                 advancedSkills: advancedSkills,
//             })
//         });
// });
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
module.exports = router;
