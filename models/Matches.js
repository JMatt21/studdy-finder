module.exports = function (sequelize, DataTypes) {
    let Matches = sequelize.define('Matches', {});

    Matches.associate = function (models) {
        Matches.belongsTo(models.Users, {});
        Matches.belongsTo(models.Users, {
            as: "Match", foriegnKey: "MatchId"
        });
    };

    return Matches;
};