const Contact = require('../models/contactsModel');

const contactsController = {};

// Creates a new contact
contactsController.createContact = async (req, res) => {
  try {
    console.log(`req.body: ${req.body}`);
    const contact = await Contact.create(req.body);
    console.log(`Contact created: ${contact}`);
    res.status(201).json(contact);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Gets all contacts
contactsController.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Gets a single contact by id
contactsController.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Updates a single contact by id
contactsController.updateContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, req.body);
    // We cant find the contact by id and update it in one step
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    } else {
      const updatedContact = await Contact.findById(id);
      res.status(204).json(updatedContact);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletes a single contact by id
contactsController.deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    } else {
      res.status(200).json(contact);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = contactsController;
