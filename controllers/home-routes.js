const router = require("express").Router();
const sequelize = require("../config/connection");
const { Experiment, Comment, User, Project } = require("../models");

router.get("/", (req, res) => {
  console.log("============router.get/=============");
  Project.findAll({
    attributes: ["id", "project_name", "created_at"],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        // posts,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  console.log("==================router.get/login=================");
  if (req.session.loggedIn) {
    console.log("already loggedin, redirecting to /");
    res.redirect("/dashboard");
    return;
  }
  console.log("not loggedin go to login page");
  res.render("login");
});

router.get("/signup", (req, res) => {
  console.log("===================router.get/signup====================");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.render("signup");
});


router.get("/molemasscal", (req, res) => {
  console.log("=============Molecuar Mass Calculator==============");
  let loggedIn=req.session.loggedIn;
  console.log(loggedIn);
  res.render("MoleMassCal",{ loggedIn});
});

router.get("/logout",(req,res)=>{
  console.log("===================router.get/logout====================");
  req.session.destroy(()=>{
    res.status(204).end();
  });
  res.render("homepage");
})

router.get("/ncbisearh",(req,res)=>{
  console.log("===================router.get/ncbisearch=====================");
  res.render("NCBI");
})

module.exports = router;
