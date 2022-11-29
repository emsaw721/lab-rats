const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Attachment, Experiment, Project } = require('../../models'); 
const withAuth = require('../../utils/auth');

router.get('/fileupload/:id', withAuth, (req,res) => {
    Attachment.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Experiment, 
                attributes: ['id', 'title'],
                include: [
                    {
                        model: Project, 
                        attributes: ['id']
                    }
                ]
            },
            {
                model: Project, 
                attributes: ['id']
            }
        ]
    }).then((dbData) => res.json(dbData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err); 
    }); 
});

router.delete('fileupload/:id', withAuth, (req,res) => {
    Attachment.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbData) => {
        if(!dbData) {
            res.status(404).json({message: 'No attachment found with this id!'});
            return; 
        }
        res.json(dbData);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router; 