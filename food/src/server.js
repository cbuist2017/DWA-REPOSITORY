
var exports = module.exports = ();

 exports.dinner = function () {
	return "pizza";
	};


// Config

var port = 3000;

app.use('/food', require('../routes/food.js'));

app.listen(port, function() {
  console.log('Server Active on', port);
});







