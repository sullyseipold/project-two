module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    // Giving the Author model a name of type STRING
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    item_name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING
  });

  Item.associate = function (models) {
    // We're saying that a Item should belong to a User
    // A Item can't be created without an User due to the foreign key constraint
    Item.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};