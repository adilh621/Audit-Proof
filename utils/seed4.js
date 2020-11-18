module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\ncash found");
      return table.create({ id : 1 ,  Ar_id : 1}),
             table.create({ id : 2 ,  Ar_id : 2});
    }
   
    return Promise.resolve();
};