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
            include: [
                { // to get the user's message and to get who they sent it to
                    model: db.Messages,
                    include: [{
                        model: db.Users,
                        as: "Recipient"
                    }],
                },
                { // to get user's match's 
                    model: db.Matches,
                    include: [{ // to connect them to another user
                        model: db.Users,
                        include: [{ // to get messages of that user
                            model: db.Messages,
                            where: { // to get ONLY the messages sent to the 1st user
                                RecipientId: id
                            },
                            // this required key means that if a match has sent them no messages,
                            // they will still show up as a match
                            required: false
                        }],
                        as: "Match"
                    }]
                }]
        }).then(dbUser => {
            const { name, id, email, beginnerSkills, intermediateSkills, advancedSkills } = dbUser;
            const matches = [];
            const sentMessages = [];
            const recievedMessages = [];

            dbUser.Matches.forEach(dbMatch => {
                matches.push({ id: dbMatch.Match.id, name: dbMatch.Match.name });

                if (dbMatch.Match.Messages.length > 0) {
                    dbMatch.Match.Messages.forEach(dbMessage => {
                        recievedMessages.push({ message: dbMessage.message, id: dbMatch.Match.id });
                    });
                }
            });
            dbUser.Messages.forEach(dbMessage => {
                sentMessages.push({ message: dbMessage.message, RecipientId: dbMessage.RecipientId });
            });
            ret.json({
                name: name,
                id: id,
                email: email,
                beginnerSkills: beginnerSkills,
                intermediateSkills: intermediateSkills,
                advancedSkills: advancedSkills,
                matches: matches,
                sentMessages: sentMessages,
                recievedMessages: recievedMessages
            })
        })
    })
    // To update user
    .post(function (req, res) {
        const userId = req.params.id;
        db.update({
            where: { id: userId }
        }, req.body.user)
            .then(dbUser => {
                const { name, id, email, beginnerSkills, intermediateSkills, advancedSkills } = dbUser;
                res.json({
                    name: name,
                    id: id,
                    email: email,
                    beginnerSkills: beginnerSkills,
                    intermediateSkills: intermediateSkills,
                    advancedSkills: advancedSkills,
                })
            });
    });
module.exports = router;
