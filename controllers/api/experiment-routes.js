const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project, Comment, User } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/:id', (req, res) => {
  console.log('==========Experiments============');
  Experiment.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'background',
      'protocols_calculations_reagents_equipment',
      'observations',
      'analysis',      
      'project_id',
      'user_id',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'experiment_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//     .then(dbPostData => {
//       if (dbPostData) {
//         const experiment = dbPostData.get({ plain: true });

//         res.render('experiment-list', {
//           experiment,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });


router.post('/', withAuth, (req, res) => {
  Experiment.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;