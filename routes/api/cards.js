const express = require('express');
const router = express.Router();
const cardCtrl = require('../../controllers/api/cards');

router.use(require('../../config/auth'));
router.post('/', cardCtrl.create);
router.get('/', cardCtrl.index);
router.delete('/:id', cardCtrl.delete);

module.exports = router;