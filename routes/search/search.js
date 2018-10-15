const router = require("express").Router();
const db = require("../../models");
const seqeulize = require('sequelize');
const op = seqeulize.Op;
// Matches with /search/:tags
router.route("/:tags")
    .post(function (req, res) {
        const {lat, long, distance} = req.body;
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
                    `( 3959 * acos( cos( radians(${lat}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${long}) ) + sin( radians(${lat}) ) * sin( radians( latitude ) ) ) )`), 'distance']]
            },
            having: {
                distance: {[op.lte]: distance || 9999999999999999999999}
                // Math.min() for infinity doesn't work well with MySQL so we will use a big number
            },
            limit: 5
        }).then(dbUsers => {
            res.json(dbUsers);
        });
    });

module.exports = router;
