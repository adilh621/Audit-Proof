module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\ncash found");
      return table.create({ Ar_id : 1}),
             table.create({ Ar_id : 2});
    }
   
    return Promise.resolve();
};