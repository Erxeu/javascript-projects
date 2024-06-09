const { Router } = require('express');
const UserController = require('../controllers/UserController.js')

const userController = new UserController();

const router = Router();

router.get('/user', (req, res) => userController.findAll(req, res));
router.get('/user/auth', (req, res) => userController.authenticate(req, res));
router.get('/user/:id', (req, res) => userController.findOneById(req, res));
router.post('/user', (req, res) => userController.createNewUser(req, res));
router.put('/user/changepass', (req, res) => userController.updateUserPassword(req, res));
router.put('/user/:id', (req, res) => userController.update(req, res));
router.delete('/user/:id', (req, res) => userController.delete(req, res));

module.exports = router;