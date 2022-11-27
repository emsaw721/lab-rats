const router = require('express').Router({ mergeParams: true });
const sequelize = require('../config/connection');
const { Project, Experiment, Comment, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/:id', (req, res) => {
    console.log("=============project router.get/:id==============")
    router
    Experiment.findAll({
        where: {
            project_id: req.params.id
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
<<<<<<< HEAD
           
=======
            'updated_at'
>>>>>>> c427c05 (fix routes)
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'experiment_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model:Project,
                attributes:['id','project_name'],
            }
        ]
    }).then(dbPostData => {
        if (dbPostData) {
            const experiments = dbPostData.map(post => post.get({ plain: true }));
            console.log(experiments)
            res.render('experiment-list', {
                experiments,
                loggedIn: req.session.loggedIn,
                project_id: req.params.id,
                project_name: experiments[1].project.project_name,
            });
        } else {
            res.status(404).end();
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/experiment/:id', (req, res) => {
    console.log('==========project router.get/Experiment/:id============');
    Experiment.findOne({
        order: [[{ model: Comment }, "createdAt", "ASC"]],
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'purpose_and_hypothesis',
            'background',
            'protocols_calculations_reagents_equipment',
            'observations',
            'analysis',
            'project_id',
            'user_id',
            'created_at',
<<<<<<< HEAD
           
=======
            'updated_at'
>>>>>>> c427c05 (fix routes)
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'experiment_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: Project,
                attributes:['id','project_name'],
            }
        ]
    }).then(dbPostData => {
<<<<<<< HEAD
        // TODO render handlebar
            const singleexperiment = dbPostData.get({plain: true}); 
            console.log(singleexperiment)
        res.render('lab-info', {
            singleexperiment,
            loggedIn: req.session.loggedIn
        })
=======
        if (dbPostData) {
            
            const experiment = dbPostData.get({ plain: true });
            console.log(experiment);
            console.log(req.session);
            // TODO render handlebar
            res.render('single-lab-post', {
                experiment,
                loggedIn: true,
                currentuserid:req.session.userId,
            });
        }
>>>>>>> c427c05 (fix routes)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/experiment/edit/:id', (req, res) => {
    console.log("===========project  router.get/experiment/edit/:id============");
    Experiment.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'background',
            'purpose_and_hypothesis',
            'protocols_calculations_reagents_equipment',
            'observations',
            'analysis',
            'project_id',
            'created_at',
            'updated_at'
        ],
        include: [
            {
                model: Project,
                attributes:['id','project_name'],
            }
        ]
    }).then(dbPostData => {
        if (dbPostData) {
            console.log(dbPostData);
            const experiment = dbPostData.get({ plain: true });
            res.render('edit-lab', {
                experiment,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    }).catch(err => {
        res.status(500).json(err);
    });
})

module.exports = router;