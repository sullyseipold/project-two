module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    availablity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  // Item.associate = function(models) {
  //   // We're saying that a Item should belong to a User
  //   // A Item can't be created without an User due to the foreign key constraint
  //   Item.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: true,
  //       defaultValue: 1
  //     }
  //   });
  // };
  return Item;
};