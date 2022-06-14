const express = require('express');
const router = express.Router();
const gachaCtrl = require('../../controllers/api/gacha');

router.use(require('../../config/auth'));
router.get('/', gachaCtrl.index);

module.exports = router;