const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Project, Experiment } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('==========Projects============');
    Project.findAll({
        attributes: [
            'id',
            'project_name',
            'created_at'
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    console.log('==========Projects============');
    Project.findByPk(req.params.id, {
        attributes: [
            'id',
            'project_name',
            'created_at'
        ],
        include: [
            {
                model: Experiment
            }
        ]
    }).then(dbPostData => {
        if (dbPostData) {
            const project = dbPostData.get({ plain: true });

            res.render('experiment-list', {
                project,
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
            project_name: req.body.title
        },
        {
            where: {
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
    Project.destroy({
        where: {
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