// const { noExtendLeft } = require("sequelize/types/lib/operators");

// const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const LogIn = sequelize.define("LogIn", {
      
      email: {
          type:DataTypes.STRING,
          allowNull:false,
          unique : true,
          
          validate: {
            isEmail: true
          }
      },
      password: {
        type:DataTypes.STRING,
        
        
        allowNull : false
      }
  });
  // LogIn.associate = models => {
  //   LogIn.hasMany(models.Customer,{
  //     onDelete: "cascade"
  //   });
  // }
  LogIn.prototype.validPassword = function(password) {
    return (password === this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // LogIn.addHook("beforeCreate", user => {
  //   LogIn.password = bcrypt.hashSync(
  //     LogIn.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  
  return LogIn;
};