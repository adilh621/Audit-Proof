module.exports = function(table) {
  if (process.env !== "production") {
    console.log("\nLogIn was found");
    return table.create({ email: "adilh621@gmail.com" , password: "blahblah" });
  }
 
  return Promise.resolve();
};

// module.exports = function(table) {
//   if (process.env !== "production") {
//     console.log("\nname inserted");
//     return table.create({ name : "Apple" });
//   }
 
//   return Promise.resolve();
// };