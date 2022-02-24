const User = require('../../models/user');
function authController() {
  return {
    login(req, res) {
      res.render("auth/login");
    },
    register(req, res) {
      res.render("auth/register");
    },
    cart(req, res) {
      res.render("auth/cart");
    },
    postRegister(req, res) {
      const { name, email, password } = req.body;
      //  Validate the request
      if (!name || !email || !password) {
        req.flash("error", "Please Fill all fields");
        return res.redirect("/register");
      }
      console.log(req.body);
    },
  }}
module.exports = authController;
