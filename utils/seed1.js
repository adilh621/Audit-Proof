module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\nLogIn was found");
      return table.create({ name : "Apple" }),
            table.create({name : "Cisco"})
    }
   
    return Promise.resolve();
  };