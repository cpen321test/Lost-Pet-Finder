// Imports
const express = require('express');
const petsController = require('../controllers/petsController');

// Objects
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send('This is the pets endpoint');
});

router.get('/searchLostPets/:userid', petsController.searchLostPets);
router.post('/postLostPets', petsController.postLostPets);
router.get('/searchFoundPets/:userid', petsController.searchFoundPets);
router.post('/postFoundPets', petsController.postFoundPets);

module.exports = router;
