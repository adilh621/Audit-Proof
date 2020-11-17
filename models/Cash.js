module.exports = function(sequelize, DataTypes) {
    const Cash = sequelize.define("Cash", {
        
    });
    Cash.associate = models => {


        Cash.belongsTo(models.Ar , {
            foreignKey : "Ar_id"
        })

    }

    return Cash;
  };