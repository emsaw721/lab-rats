const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project, User } = require('../../models')
// const withAuth = require('../../utils/auth');

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

module.exports = router;