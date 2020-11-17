module.exports = function(table) {
  if (process.env !== "production") {
    console.log("\nLogIn was found");
    return table.create({ email: "adilh621@gmail.com" , password: "blahblah" });
  }
  return Promise.resolve();
};
