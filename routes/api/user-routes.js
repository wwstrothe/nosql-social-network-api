const router = require('express').Router();

const { getAllUsers, createUser, getUserbyId, updateUser, deleteUser, createFriend, deleteFriend } = require('../../controllers/user-controllers');

// /api/users GET all, POST user 
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// /api/users/:userId GET by id, PUT user, DELETE user
router
  .route('/:userId')
  .get(getUserbyId)
  .put(updateUser)
  .delete(deleteUser)

// /api/users/:userId/friends POST create friend
router
  .route('/:userId/friends')
  .post(createFriend)

// /api/users/:userId/friends/:friendId 
  .router('/:userId/friends/:friendId')
  .delete(deleteFriend)

module.exports = router
