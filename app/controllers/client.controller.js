const Client = require('../models/client.model.js');
var moment = require('moment');
var randomjs = require('random-js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Client content can not be empty"
        });
    }

    // Create a Note
    const client = new Client({
        "name": req.body.name,
        "lastName": req.body.lastName,
        "age": req.body.age,
        "birthDate": moment(req.body.birthDate, 'DD/MM/YYYY', true).toDate()
    });

    // Save Note in the database
    client.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    });
};

function getDeathDate(client) {
    const MAX_AGE = 100;
    const engine = randomjs.MersenneTwister19937.autoSeed();
    let distribution = randomjs.integer(client.age + 1, 100);
    let randomAge = distribution(engine);
    let momentBirthDate = moment(client.birthDate);

    return momentBirthDate.add(randomAge, 'years').toDate();
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Client.find()
        .then(clients => {
            var listClients = new Array();
            clients.forEach(function(e) {
                listClients.push({
                    "name": e.name,
                    "lastName": e.lastName,
                    "age": e.age,
                    "birthDate": e.birthDate,
                    "deadDate": getDeathDate(e)
                });
            });
            res.send(listClients);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.kpiClients = (req, res) => {
    Client.find()
        .then(clients => {
            const sum = clients.reduce((total, next) => total + next.age, 0);
            let desv_sum = 0;

            for(var i = 0; i < clients.length; i++) {
                desv_sum = desv_sum + Math.pow(clients[i].age - sum, 2);
            }

            const standardDeviation = Math.sqrt(desv_sum/clients.length);
            res.send({
                average: sum/clients.length,
                standardDeviation: standardDeviation
            });
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
