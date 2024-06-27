const express = require('express');

const router = express.Router();

const verifyToken = require('../middleware/verifyToken');

const allowTo = require('../middleware/allowedTo');

const userRoles = require('../utils/userRoles');

const { getAllLesson, getLesson, postLesson, editLesson, deleteLesson } = require('../controllers/lessonsController');


router.get('/', getAllLesson);
router.get('/:id', getLesson);
router.post('/', verifyToken , allowTo(userRoles.INSTRUCTOR),postLesson);
router.put('/:id', verifyToken, allowTo(userRoles.INSTRUCTOR) ,editLesson);
router.delete('/:id', verifyToken, allowTo(userRoles.INSTRUCTOR), deleteLesson);


module.exports = router