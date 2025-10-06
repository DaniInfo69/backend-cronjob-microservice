const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');

module.exports = (connection) => {
    const controller = actividadController(connection);
    router.get('/consultaActividad', controller.consultaActividad)

    return router;
};
