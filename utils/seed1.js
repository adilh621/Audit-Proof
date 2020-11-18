module.exports = function(table) {
    if (process.env !== "production") {
      console.log("\nLogIn was found");
      return table.create({ name : "Apple" }),
            table.create({name : "Cisco"}),
            table.create({name : "Tesla"}),
            table.create({name : "NASA"})
    }
   
    return Promise.resolve();
  };