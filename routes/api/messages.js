const router = require("express").Router();
const db = require("../../models");
// matches with /api/messages/
router.route("/")
    .post(function(req, res){
        db.Messages.create(req.body).then(dbRoom => {
            res.json(dbRoom);
        });
    });
    
module.exports = router;