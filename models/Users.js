module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING
  });

  User.associate = function (models) {
    // Associating User with Items
    // When a User is deleted, also delete any associated Items
    User.hasMany(models.Items, {
      onDelete: "cascade",
    });
  };

  return User;
};