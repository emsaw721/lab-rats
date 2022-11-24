const router = require('express').Router({ mergeParams: true });
const sequelize = require('../../config/connection');
const { Experiment, Project, Comment, User } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('==========Experiments============');
  Experiment.findAll({
    where: {
      project_id: req.params.project_id
    },
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

router.get('/:id', (req, res) => {
  console.log('==========Experiments============');
  Experiment.findOne({
    where: {
      project_id: req.params.project_id,
      id: req.params.id
    },
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


router.get('/edit/:id', withAuth, (req, res) => {
  Experiment.findByPk(req.params.id, {
    attributes: [
        'id',
        'title',
        'background',
        'protocols_calculations_reagents_equipment',
        'observations',
        'analysis'
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const experiment = dbPostData.get({ plain: true });
        
        res.render('edit-lab', {
          experiment,
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
    purpose_and_hypothesis: req.body.purpose_and_hypothesis,
    background: req.body.background,
    protocols_calculations_reagents_equipment: req.body.protocols_calculations_reagents_equipment,
    observations: req.body.observations,
    analysis: req.body.analysis,
    project_id: req.params.project_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Experiment.update(
    {
      title: req.body.title,
      purpose_and_hypothesis: req.body.purpose_and_hypothesis,
      background: req.body.background,
      protocols_calculations_reagents_equipment: req.body.protocols_calculations_reagents_equipment,
      observations: req.body.observations,
      analysis: req.body.analysis
    },
    {
      where: {
        project_id: req.params.project_id,
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Experiment.destroy({
    where: {
      project_id: req.params.project_id,
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;