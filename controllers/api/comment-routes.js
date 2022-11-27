const router = require("express").Router();
const { Experiment, User, Comment, Project } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  console.log("-------------router.get all comments--------------");
  Comment.findAll({
    include: [
      {
        model: Experiment,
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbPostData => {
      if (dbPostData) {
        const experiments = dbPostData.map(post => post.get({ plain: true }));
        console.log(experiments)
        res.render('experiment-list', {
          experiments,
          loggedIn: req.session.loggedIn
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log("-------------router.get all comments--------------");
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Experiment,
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Project,
            attributes: ["projectname"],
          },
        ],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbdata) => res.json(dbdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  console.log("-------------router.post comment--------------");
  Comment.create({
    comment_text: req.body.comment_text,
    experiment_id: req.body.experiment_id,
    user_id: req.session.user_id
  }).then((dbdata) => res.json(dbdata))
    .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbdata) => {
    if (!dbdata) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.json(dbdata);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
