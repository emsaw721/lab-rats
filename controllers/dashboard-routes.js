

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Project.findAll({
    where: {
      user_id: req.session.user_id
    },
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
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
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
        
        res.render('edit-lab', {
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
