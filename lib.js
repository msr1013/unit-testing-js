// Testing numbers

// module.exports.absolute = function (number) {
//   if (number >= 0) return number;

//   return -number;
// };

// Testing numbers

module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
};

// Testing strings
module.exports.greet = function (name) {
  return "Welcome " + name + "!";
};
