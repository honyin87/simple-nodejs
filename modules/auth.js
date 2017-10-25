checkAuth = function(req, res, next) {
  if (!req.session || !req.session.user) {

	res.redirect('/invalid-session');
	console.log("redirect to login");

  } else {
    next();
    console.log("session user:"+req.session.user);
  }

}
module.exports = checkAuth;
