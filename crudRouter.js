const express = require('express');
const router = express.Router();
const crudController = require('./crudController');

router.get('/', crudController.getCruds).post('/', crudController.createCrud);
router
  .patch('/:id', crudController.editCrud)
  .delete('/:id', crudController.deleteCrud);
module.exports = router;
