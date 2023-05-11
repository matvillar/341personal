const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contactsController.js');

// Create new contact
router.post('/contact', contactsController.createContact);
// Get all contacts
router.get('/contacts', contactsController.getAllContacts);
// Get contact by id
router.get('/contact/:id', contactsController.getContactById);
// Update contact by id
router.put('/contact/:id', contactsController.updateContactById);
// Delete contact by id
router.delete('/contact/:id', contactsController.deleteContactById);

module.exports = router;
