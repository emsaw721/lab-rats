

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  Project.findAll({
      attributes: [
          'id',
          'project_name',
          'created_at'
      ]
  })
      .then(dbPostData => {
          const projects = dbPostData.map(post => post.get({ plain: true }));
          console.log(projects);
          res.render('dashboard', {
              projects
              // loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


router.get('/edit/:id', withAuth, (req, res) => {
  Project.findByPk(req.params.id, {
    attributes: [
        'id',
        'project_name',
        'created_at'
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'experiment_id', 'user_id'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-project', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;