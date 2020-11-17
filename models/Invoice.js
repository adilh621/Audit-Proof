const Customer = require("./Customer");

module.exports = function(sequelize, DataTypes) {
    const Invoice = sequelize.define("Invoice", {
        
        date: {
            type:DataTypes.DATEONLY
        },
        amountOwed : {
            type: DataTypes.INTEGER
        }
    });

    Invoice.associate = models => {

        Invoice.belongsTo(models.Customer,{
            foreignKey : "customer_id"
          })

    }

    return Invoice;
  };