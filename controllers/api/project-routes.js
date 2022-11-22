const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project, User } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/',  (req, res) => {
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
            res.render('project', {
                projects
                // loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {  
    Project.create({
      project_name: req.body.title
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', withAuth, (req, res) => {
    Project.update(
        {
        attributes: [
            'id',
            'project_name',
            'created_at'
        ],
    })
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit-post', {
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