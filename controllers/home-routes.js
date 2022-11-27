const router = require("express").Router();
const sequelize = require("../config/connection");
const { Experiment, Comment, User, Project } = require("../models");
const withAuth = require("../utils/auth");
const ncbi= require('node-ncbi');
const pubmed = ncbi.pubmed;

router.get("/", (req, res) => {
  console.log("============router.get/=============");
  if (req.session.loggedIn) {
    console.log("already loggedin, redirecting to /");
    res.redirect("/dashboard");
    return;
  } else {
    res.render('login');
  }
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


router.get("/molemasscal", withAuth,(req, res) => {
  console.log("=============Molecuar Mass Calculator==============");
  let loggedIn = req.session.loggedIn;
  console.log(loggedIn);
  res.render("MoleMassCal", { loggedIn });
});

router.get("/logout", (req, res) => {
  console.log("===================router.get/logout====================");
  req.session.destroy(() => {
    res.status(204).end();
  });
  res.render("login");
});

router.get("/add_experiment/:id", withAuth,(req, res)=>{
  console.log("=================/ router.get/add_experiment/:id==============");
    Project.findOne({
      where:{
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (dbPostData) {
          console.log(dbPostData.project_name);
      res.render("add_experiment",{project_id:req.params.id,loggedIn:req.session.loggedIn,project_name:dbPostData.project_name});
    }
    })
    return;
});

router.get("/ncbisearch",(req,res)=>{
  console.log("===================router.get/ncbisearch=====================");
  res.render("NCBI", {loggedIn:req.session.loggedIn});
});

router.get("/ncbisearch/:text",(req,res)=>{
  console.log("===================router.get/ncbisearch/text=====================");
  pubmed.search(req.params.text)//searchtext)
    .then((results) => {
        console.log(results);
        res.render('NCBI',{papers:results.papers,count:results.count,text:req.params.text});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;
