const router = require("express").Router();
const sequelize = require('../config/connection');
const { Experiment, Comment, User, Project } = require("../models");

router.get('/', (req, res) => {
  console.log('======================');
  Project.findAll({
    attributes: [
      'id',
      'project_name',
      'created_at'
    ],
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        // posts,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/login", (req, res) => {
  console.log("==================/login=================");
  if (req.session.loggedIn) {
    console.log("already loggedin, redirecting to /");
    res.redirect("/");
    return;
  }
  console.log("not loggedin go to login page");
  res.render("login");
});

router.get("/signup", (req, res) => {
  console.log("===================/signup====================");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.render("signup");
});

module.exports = router;
