var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("Yo Bin, you're listening on PORT 3000!");
});
