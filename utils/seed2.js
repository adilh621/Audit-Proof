module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\nInvoice found");
      return table.create({ id : 1 , date : "2020-11-15" , amountOwed : 1000 , customer_id : 1}),
             table.create({ id : 2 , date : "2019-11-12" , amountOwed : 6000 , customer_id : 2}),
             table.create({ id : 3 , date : "2018-05-15" , amountOwed : 5600 , customer_id : 1}),
             table.create({ id : 4 , date : "2007-03-09" , amountOwed : 6875 , customer_id : 2})
    }
   
    return Promise.resolve();
};