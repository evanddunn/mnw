var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([
    {title: 'Home', route:'/home', component: '<Home />'}, 
    {title: 'About', route:'/about', component: '<About />'}, 
    {title: 'Reading', route:'/reading', component: '<Reading />'}, 
    {title: 'Portfolio', route:'/portfolio', component: '<Portfolio />'},
  ]);
});

module.exports = router;
