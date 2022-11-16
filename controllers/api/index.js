const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
const experimentRoutes = require('./experiment-routes');
const projectRoutes = require('./project-routes');

// router.use('/users', userRoutes);
router.use('/experiments', experimentRoutes);
router.use('/projects', projectRoutes);

module.exports = router;