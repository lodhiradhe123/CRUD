var express = require('express');
var router = express.Router();

const User = require("../models/user");

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create", function(req,res){
  res.render("create")
})

router.post("/createdata",async function(req,res){
try {
  const user = new User(req.body);
  await user.save();
  res.redirect("/read");
} catch (error) {
  console.log(error);
}

})

router.get("/read", async function(req,res){
  const userdata =await User.find();
  res.render("read",{user:userdata})

})

router.get("/update/:id", async function(req,res){
  const user =await User.findById(req.params.id)
  res.render("update",{userdata:user})
})

router.post("/updatedata/:id", async function(req,res){
  const user =await User.findByIdAndUpdate(req.params.id,req.body)
  res.redirect("/read")
})

router.get("/delete/:id",async function(req,res){
  await User.findByIdAndDelete(req.params.id)
  res.redirect("/read")

})

module.exports = router;
