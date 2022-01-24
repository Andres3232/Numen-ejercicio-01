const { Router } = require('express');
const { sumarConParametros,sumarConQueryParams, operacionPost, operacionPut, operacionDelete } = require('../controllers/operacion');

const router = Router();

router.get('/:num1/:num2', sumarConParametros);
router.get('/', sumarConQueryParams);

router.post('/', operacionPost);
router.put('/', operacionPut);
router.delete('/', operacionDelete);






module.exports = router