const router = require('express').Router({ mergeParams: true });
const sequelize = require('../../config/connection');
const { Experiment, Attachment } = require('../../models');
const formidable = require('formidable');
const withAuth = require('../../utils/auth');
const fs = require('fs');

router.post('/', withAuth, (req, res) => {
  console.log("------------experiments router.post/---------");
  Experiment.create({
    title: req.body.title,
    purpose_and_hypothesis: req.body.purpose,
    background: req.body.background,
    protocols_calculations_reagents_equipment: req.body.protocols,
    observations: req.body.observations,
    analysis: req.body.analysis,
    project_id: req.body.project_id,
    user_id: req.session.userId
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
      purpose_and_hypothesis: req.body.purpose,
      background: req.body.background,
      protocols_calculations_reagents_equipment: req.body.protocols,
      observations: req.body.observations,
      analysis: req.body.analysis,
    },
    {
      where: {
        project_id: req.params.project_id,
        id: req.params.id
      }
    }
  ).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Experiment.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/:id/fileupload', withAuth, (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, file) {
    console.log(file);
    const oldpath = file.filetoupload.filepath;
    const newpath = 'public/fileupload/' + file.filetoupload.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      Attachment.create({
        file_name: file.filetoupload.originalFilename,
        file_path: newpath,
        experiment_id: fields.experiment_id
        //TODO rendering handlebar
        // TODO list attachments
        //TODO delete attachments
      }).then(dbPostData => {
        console.log(dbPostData)
        const attachment = dbPostData.get({ plain: true })
        console.log(attachment)

        res.render('file-upload', {attachment, loggedIn: true, currentuserid: req.session.userId })
      })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
  });
});

module.exports = router;