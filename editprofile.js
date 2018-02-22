function editprofile(appConfig, renderer, helper){
	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res, next) {
	  var section = '/EDITPROFILE';
	  if(!helper.isLogin(req)){
		res.status(403);
		section = '/ERROR/403';
	  }
	  var content = renderer.renderPage(section, req)
	  .then(function(content){
		res.send(content);
	  });
	});

	router.post('/', function(req, res, next) {
	  if(helper.isLogin(req)){
		try{

		  res.send('00|Success');
		}
		catch(ex){
		  console.log(ex);
		  res.send('00|Success');
		}
	  }
	  res.send('403|Forbidden');
	});
	
	return router;
}
module.exports = editprofile;
