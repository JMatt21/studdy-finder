module.exports = function (sequelize, DataTypes) {
    var Conversations = sequelize.define("Conversations", {
        message: {
            type: DataTypes.STRING
        }
    });
    Conversations.associate = function (models) {
        Conversations.hasMany(models.UserConversations, {});
        Conversations.hasMany(models.Messages, {});
    }
    return Conversations;
  };