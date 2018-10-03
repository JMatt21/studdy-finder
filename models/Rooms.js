module.exports = function (seqeulize, DataTypes) {
    var Rooms = seqeulize.define("Rooms", {
        roomName: {
            unique: true,
            type: DataTypes.STRING,
            primaryKey: true
        }
    });

    Rooms.associate = function (models) {
        Rooms.hasMany(models.Messages, {});
    }
    return Rooms;
}