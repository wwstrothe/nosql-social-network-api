const router = require('express').Router();
// connect routes
const userRoutes = require('./user-routes');
// const thoughtRoutes = require('./thought-routes');

// add `/user` prefix fo all imported user-routes
router.use('/users', userRoutes);

// add `/thought` prefix fo all imported thought-routes
// router.use('/thoughts', thoughtRoutes);

module.exports = router