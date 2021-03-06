const router = require("express").Router();
const db = require("../../models");
const seqeulize = require('sequelize');
const op = seqeulize.Op;
// Matches with /search/:tags
router.route("/")
    .post(function (req, res) {
        const { userId, lat, long, distance, searchTags } = req.body;
        const searchFor = searchTags.map(tag =>
            (
                { beginnerSkills: { [op.like]: `%${tag}%` } }
            )
        )
        db.Users.findAll({
            where: {
                [op.or]: searchFor,
                // [op.ne]: {id: userId || 0} ,
                id: { [op.ne]: userId || 0 }
                // if no userid is provided, exlude id 0 which means it will search for everyone
            },
            attributes: {
                exclude: 'password',
                include: [[db.sequelize.literal(
                    `( 3959 * acos( cos( radians(${lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${long}) ) + sin( radians(${lat}) ) * sin( radians( latitude ) ) ) )`), 'distance']],
            },
            having: {
                [op.or]: [
                    { distance: { [op.lte]: distance || 9999999999999999999999 } },
                    // Math.min() for infinity doesn't work well with MySQL so we will use a big number
                    { distance: null }
                ]

            },
            order: db.sequelize.literal(`distance`),
            // limit: 100
        }).then(dbUsers => {
            res.json(dbUsers);
        });
    });

module.exports = router;
