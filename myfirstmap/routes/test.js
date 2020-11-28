var express = require('express');
//var covid=require('covid19-korea');
var router = express.Router();
/* GET test listing. */

router.get('/', function(req, res, next) {
	res.render('index', {
		mine: 'YOure',
	});
});
module.exports = router;