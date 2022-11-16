const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project } = require('../../models')
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Experiment.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'project_id',
            'created_at',
        ],
        include: [
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'user_id', 'notes_id'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
            // {
            //     model: User,
            //     attributes: ['username']
            // },
            {
                model: Project,
                attributes: ['id', 'project_name', 'manager_id']
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