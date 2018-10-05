module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        message: {
            type: DataTypes.STRING
        }
    });
    Messages.associate = function (models) {
        Messages.belongsTo(models.Rooms, {});
        Messages.belongsTo(models.Users, {});
        Messages.belongsTo(models.Users, {
            as: "Recipient", foreignKey: "RecipientId"
        });
    }
    return Messages;
  };