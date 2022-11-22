const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project, Comment, User } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/api', (req, res) => {
    console.log('======================');
    Experiment.findAll({
        attributes: [
            'id',
            'title',
            'description',
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

module.exports = router;