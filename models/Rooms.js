module.exports = function (seqeulize, DataTypes) {
    var Rooms = seqeulize.define("Rooms", {
        id: {
            unique: true,
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false
        }
    });

    Rooms.associate = function (models) {
        Rooms.hasMany(models.Messages, {});
    }
    return Rooms;
}