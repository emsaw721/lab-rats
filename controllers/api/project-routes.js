const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Experiment, Project } = require('../../models')
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Project.findAll({
        attributes: [
            'id',
            'project_name',            
            'created_at'
        ],
        // include: [        
        //     {
        //         model: User,
        //         attributes: ['username']
        //     },
        // ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;