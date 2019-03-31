module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    // Giving the Author model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: DataTypes.STRING,
    image_url: DataTypes.STRING
  });

  Item.associate = function (models) {
    // We're saying that a Item should belong to a User
    // A Item can't be created without an User due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Item;
};