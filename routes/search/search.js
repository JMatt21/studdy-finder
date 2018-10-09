const router = require("express").Router();
const db = require("../../models");
const seqeulize = require('sequelize');
const op = seqeulize.Op;
// Matches with /search/:tags
router.route("/:tags")
    .get(function (req, res) {
        const searchTags = req.params.tags;
        db.Users.findAll({
            where: {
                beginnerSkills: {
                    [op.like]: `%${searchTags}%`
                }
            },
            attributes: { exclude: 'password' },
            limit: 5
        }).then(dbUsers => {
            res.json(dbUsers);
        });
    });

module.exports = router;
