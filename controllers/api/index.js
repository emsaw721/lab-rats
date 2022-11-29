const router = require('express').Router();

const userRoutes = require("./user-routes.js");
const experimentRoutes = require('./experiment-routes');
const commentRoutes = require("./comment-routes");
const projectRoutes = require('./project-routes');
const attachmentRoutes = require('./attachment-routes');

router.use('/users', userRoutes);
router.use("/comments", commentRoutes);
router.use('/projects', projectRoutes);
router.use('/projects/:project_id/experiments', experimentRoutes); 
router.use('/attachments', attachmentRoutes);



module.exports = router;
