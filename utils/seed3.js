module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\nArs found");
      return table.create({ daysOutstanding : 23 , invoice_id : 1}),
             table.create({ daysOutstanding: 45 , invoice_id : 2});
    }
   
    return Promise.resolve();
};