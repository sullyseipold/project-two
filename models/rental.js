module.exports = function (sequelize, DataTypes) {
    var Rental = sequelize.define("Rental", {
        // Giving the Author model a name of type STRING
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Rental.associate = function (models) {
        // We're saying that a Rental should belong to a User/Item
        // A Item can't be created without an User due to the foreign key constraint
        Rental.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
        Rental.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Rental;
};