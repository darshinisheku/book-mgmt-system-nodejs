module.exports = (sequelize, Sequelize, DataTypes) => {

    const Author = sequelize.define(
        "genre",{
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              name: {
                type: DataTypes.STRING
              }
        }
    );

    return Genre;

};