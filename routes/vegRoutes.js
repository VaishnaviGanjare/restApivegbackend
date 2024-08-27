const express = require('express');
const vegController = require('../controllers/vegController');

const router = express.Router();

router.get('/vegData', vegController.getVegData);
router.post('/vegData', vegController.createVegData);
router.put('/vegData/:id', vegController.updateVegData);
router.delete('/vegData/:id', vegController.deleteVegData);

module.exports = router;
