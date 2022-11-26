const router = require("express").Router();
const { User, Post, Comment, Experiment } = require("../../models");

//get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbdata) => res.json(dbdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Experiment,
        attributes: ["id", "title", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Experiment,
          attributes: ["title"],
        },
      },
      {
        model: Experiment,
        attributes: ["title"],
      },
    ],
  })
    .then((dbdata) => {
      if (!dbdata) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log("-----------------signup-----------------");
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbdata) => {
      console.log(dbdata.id, dbdata.username);
      req.session.save(() => {
        req.session.userId = dbdata.id;
        req.session.username = dbdata.username;
        req.session.loggedIn = true;
        res.json({
          user: dbdata,
          message: "You are now logged in as " + dbdata.username + " !",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  console.log("-----------------login------------------");
  console.log(req.body.username);
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbdata) => {
    console.log(dbdata);
    if (!dbdata) {
      res.status(404).json({ message: "No user account found!" });
      return;
    }
    const validPassword = dbdata.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "incorrecte password" });
      return;
    }

    req.session.save(() => {
      req.session.userId = dbdata.id;
      req.session.username = dbdata.username;
      req.session.loggedIn = true;

      res.json({
        user: dbdata,
        message: "You are now logged in as " + dbdata.username + " !",
      });
    });
  });
});

router.post("/logout", (req, res) => {
  console.log("--------logout---------");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.statsus(404).end();
  }
});

router.put("/:id", (req, res) => {
  console.log("---------------user put id---------------");
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbdata) => {
      if (!dbdata) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  console.log("------------users delete id---------------");
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbdata) => {
      if (!dbdata) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      req.session.destroy(() => {
        res.status(204).redirect("/").json(dbdata); //redirect??
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
