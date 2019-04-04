module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull: false,
      // validate: {
      //   isEmail: true
      // }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // state: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  });

  User.associate = function(models) {
    // Associating User with Items
    // When a User is deleted, also delete any associated Items
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return User;
};
