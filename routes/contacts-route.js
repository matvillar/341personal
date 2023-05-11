const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contactsController.js');

// Create new contact
router.post('/contacts', contactsController.createContact);
// Get all contacts
router.get('/contacts', contactsController.getAllContacts);
// Get contact by id
router.get('/contacts/:id', contactsController.getContactById);
// Update contact by id
router.put('/contacts/:id', contactsController.updateContactById);
// Delete contact by id
router.delete('/contacts/:id', contactsController.deleteContactById);

module.exports = router;
