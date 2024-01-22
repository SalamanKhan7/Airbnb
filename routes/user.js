const express = require("express");
const router = express.Router();
const User = require("../moduls/user.js");
const passport = require("passport");
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});
router.post("/signup", async (req, res) => {
  let { username, email, password } = req.body;
  let newUser = new User({ username, email });
  let registeredUser = await User.register(newUser, password);

  console.log(registeredUser);
  // req.flesh("success","Welcome to Wanderlust!")
  res.redirect("/listings");
});
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/listings");
  }
);

module.exports = router;
