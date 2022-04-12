const express = require('express');
const { register, login, getClient, getOrganisateur,getAdmin, registerOrganisateur, registerAdmin } = require('../Controllers/user.controllers');
const { registerRules, LoginRules, validator } = require('../Middleware/validator');
const router = express.Router();

router.post('/register', registerRules(), validator, register);
router.post('/login', LoginRules(), validator, login);

router.get('/getclient', getClient)
router.get('/getorganisateur', getOrganisateur)
router.get('/getadmin', getAdmin)

router.post('/registerOrganisateur', registerOrganisateur);
router.post('/registerAdmin', registerAdmin);

module.exports = router;