const Contact = require('../models/Contact');

// Add a new contact
const addContact = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const contact = new Contact({
      name,
      email,
      phone,
      userId: req.userId // assuming this is set by auth middleware
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add contact', error: err.message });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  const contactId = req.params.id;

  try {
    const deleted = await Contact.findOneAndDelete({
      _id: contactId,
      userId: req.userId
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete contact', error: err.message });
  }
};

// Search contact by name or email
const searchContact = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const results = await Contact.find({
      userId: req.userId,
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};

// Get all contacts for the user
const searchAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch contacts', error: err.message });
  }
};

module.exports = {
  addContact,
  deleteContact,
  searchContact,
  searchAllContact
};
