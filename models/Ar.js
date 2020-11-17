module.exports = function(sequelize, DataTypes) {
    const Ar = sequelize.define("Ar", {

    daysOutstanding:{
        type:DataTypes.INTEGER
    }

    });
    Ar.associate = models => {


        Ar.belongsTo(models.Invoice , {
            foreignKey : "invoice_id"
        })


    }

    return Ar;
  };