module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\nInvoice found");
      return table.create({ id : 1 , date : "2020-11-15" , amountOwed : 1000 , customer_id : 1}),
             table.create({ id : 2 , date : "2020-11-12" , amountOwed : 6000 , customer_id : 2});
    }
   
    return Promise.resolve();
};