// url function
exports.miniurl=function() {
  var components = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  var amount = 8;

//Accepts url input and develops random alphanumeric string

  for (var i = 0; i < amount; i++) {
    result += components.charAt(Math.floor(Math.random () * components.length));
  };

  return result;
}

//export the result of the url shortener
