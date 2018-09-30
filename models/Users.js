module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.CHAR,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    beginnerSkills: {
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    intermediateSkills: {
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    advancedSkills: {
      type:DataTypes.ARRAY(DataTypes.STRING)
    }
  });
  Users.associate = function (models) {
    Users.hasMany(models.UserConversations, {
      onDelete: "CASCADE"
    });
    Users.hasMany(models.Matches, {
      onDelete: "CASCADE"
    });
  }
  return Users;
};