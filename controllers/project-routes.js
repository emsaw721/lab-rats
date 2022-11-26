const router = require('express').Router({ mergeParams: true });
const sequelize = require('../config/connection');
const { Project, Experiment, Comment, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/:project_id/experiments', (req, res) => {
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
    }).then(dbPostData => {
        if (dbPostData) {
            const experiments = dbPostData.map(post => post.get({ plain: true }));
            console.log(experiments)
            res.render('experiment-list', {
                experiments,
                loggedIn: req.session.loggedIn,
                project_id: req.params.project_id
            });
        } else {
            res.status(404).end();
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:project_id/experiments/:id', (req, res) => {
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
    }).then(dbPostData => {
        // TODO render handlebar
        return res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/:project_id/experiments/:id/edit', (req, res) => {
    Experiment.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'background',
            'purpose_and_hypothesis',
            'protocols_calculations_reagents_equipment',
            'observations',
            'analysis',
            'project_id'
        ]
    }).then(dbPostData => {
        if (dbPostData) {
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