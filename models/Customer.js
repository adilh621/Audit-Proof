// const { Association } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
  
       name: {
        type: DataTypes.STRING,
        validate: { len: [1, 125] }
     }
   
    });

 
    return Customer;
  };