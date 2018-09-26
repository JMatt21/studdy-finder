module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users a name of type string
    User_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    //for password
    Password: {
      type: DataTypes.CHAR,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    //email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    }
  });
  // Users.associate = function (models) {
  //   Users.hasMany(models.UsersHandles, {
  //     onDelete: "CASCADE"
  //   });
  //   Users.hasMany(models.UsersFavoritedTweets, {
  //     onDelete: "CASCADE"
  //   });
  // }
  return Users;
};