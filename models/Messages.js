module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        //message
    });
    Messages.associate = function (models) {
        Messages.belongsTo(models.Conversations, {});
    }
    return Messages;
  };