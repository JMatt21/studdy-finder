module.exports = function (sequelize, DataTypes) {
    var UserConversations = sequelize.define("UserConversations", {});
    
    UserConversations.associate = function (models) {
        UserConversations.belongsTo(models.Users, {});
        UserConversations.belongsTo(models.Conversations, {});
      }
    return UserConversations;
}