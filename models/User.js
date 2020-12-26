module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define("User", {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      surname: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      address: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      phone_number: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, {
      tableName: "users",
   });

   return User;
};

   