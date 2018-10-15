module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 150]
      }
    },
    image: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.FLOAT(10, 6)
    },
    longitude: {
      type: DataTypes.FLOAT(10, 6)
    },
    beginnerSkills: {
      type: DataTypes.STRING,
      get() {
        const currentSkills = this.getDataValue('beginnerSkills');
        if (currentSkills) {
          return currentSkills.split(';');
        } else {
          return [];
        }
      },
      set(val) {
        this.setDataValue('beginnerSkills', val.join(';'));
      }
    },
    intermediateSkills: {
      type: DataTypes.STRING,
      get() {
        const currentSkills = this.getDataValue('intermediateSkills');
        if (currentSkills) {
          return currentSkills.split(';');
        } else {
          return null;
        }
      },
      set(val) {
        this.setDataValue('intermediateSkills', val.join(';'));
      }
    },
    advancedSkills: {
      type: DataTypes.STRING,
      get() {
        const currentSkills = this.getDataValue('advancedSkills');
        if (currentSkills) {
          return currentSkills.split(';');
        } else {
          return null;
        }
      },
      set(val) {
        this.setDataValue('advancedSkills', val.join(';'));
      }
    }
  });
  Users.associate = function (models) {
    Users.hasMany(models.Messages, {
      onDelete: "CASCADE"
    });
    Users.hasMany(models.Matches, {
      onDelete: "CASCADE",
    });
  }
  return Users;
};