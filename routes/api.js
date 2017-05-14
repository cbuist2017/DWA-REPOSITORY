module.exports = function (express) {
  var router = express.Router();

  router.get('/', function(req, res){
    res.json({hello: 'world'});
  });

  router.get('/status', function(req, res){
    res.json({healthy: 'true'});

});


// URL header
	
	router.post('/v1/urls', function (req, res) {
	
	// Source String to gen from
	
	var sourceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
	var totalChars = 8;
	
	// Blank string to build upon
	
	var builtURL = '';
	
	for(var i=0; i < totalChars; i++){
		// Add randomly picked char to the builtURL
		builtURL += sourceString.charAt(Math.random() * sourceString.length);
	}
	
	
	// return to the response the builtURL
	
	res.json({url: builtURL});
	
	});
	
  return router;
}
