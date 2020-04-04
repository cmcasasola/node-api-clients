module.exports = (app) => {
    const clientController = require('../controllers/client.controller.js');
    const urlApi = '/api/v1';

    // Create a new Note
    app.post('/creacliente', clientController.create);

    // Retrieve all Notes
    app.get('/listclientes', clientController.findAll);

    // Retrieve a single Note with noteId
    app.get('/kpideclientes', clientController.kpiClients);
}
