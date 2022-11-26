const router = require('express').Router({mergeParams: true});

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes')
const homeRoutes = require('./home-routes.js');
const projectRouter = require('./project-routes.js');

router.use("/", homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/project', projectRouter)
router.use("/api", apiRoutes);


module.exports = router;
