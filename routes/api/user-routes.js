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


  // /api/users/:userId/friends/:friendId POST create friend, DELETE friend
  .router('/:userId/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend)

module.exports = router
