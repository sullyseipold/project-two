module.exports = function (sequelize, DataTypes) {
    var Rental = sequelize.define("Rentals", {
        // Giving the Author model a name of type STRING
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
    });

    Rental.associate = function (models) {
        // We're saying that a Rental should belong to a User/Item
        // A Item can't be created without an User due to the foreign key constraint
        Rental.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
            as: 'owner_id'
        });
        Rental.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Rentals;
};