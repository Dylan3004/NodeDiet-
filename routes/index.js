const express = require('express');
const router = express.Router();
const PagesController = require('../controlers/PagesControler');
const ApplicationsController = require('../controlers/ApplicationsController');

router.post('/adding',ApplicationsController.store);

router.post('/calculating',ApplicationsController.calculate);

router.get('/', PagesController.home);

// Przejście do dodawania produktu
router.get('/add', PagesController.add);

// Przejście do kalkulatora diety
router.get('/calculate', PagesController.calculate);


module.exports = router;