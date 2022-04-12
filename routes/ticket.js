const express = require('express');
const { CreateTicket, AnnulationTicket } = require('../Controllers/ticket.controllers')
const router = express.Router();

router.post('/Create', CreateTicket );
router.delete('/AnnulationTicket', AnnulationTicket);

module.exports = router;