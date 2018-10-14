const router = require("express").Router();
const db = require("../../models");
const seqeulize = require('sequelize');
const op = seqeulize.Op;
// Matches with /search/:tags
router.route("/:tags")
    .get(function (req, res) {
        const {latitude, longitude, distance} = req.body;
        const searchTags = req.params.tags;
        db.Users.findAll({
            where: {
                beginnerSkills: {
                    [op.like]: `%${searchTags}%`
                }
            },
            attributes: {
                exclude: 'password',
                include: [[db.sequelize.literal(
                    `( 3959 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( latitude ) ) ) )`), 'distance']]
            },
            // having: {
            //     distance: {$gte: 0}
            // },
            limit: 5
        }).then(dbUsers => {
            res.json(dbUsers);
        });
    });

module.exports = router;
