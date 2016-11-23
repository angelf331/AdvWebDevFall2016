var express = require('express');
var router = express.Router();
var ctrlEmployees = require('../controllers/employee');

// reviews
router.get('/employees', ctrlEmployees.employeesReadAll);
router.get('/employees/:employeeid', ctrlEmployees.employeesReadOne);
router.post('/employees', ctrlEmployees.employeesCreate);
router.put('/employees/:employeeid', ctrlEmployees.employeesUpdateOne);
router.delete('/employees/:employeeid', ctrlEmployees.employeesDeleteOne);

module.exports = router;
