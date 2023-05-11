const mongoose = require('mongoose');
const contactSchema = mongoose.Schema(
  {
    firstName: { type: String, required: [true, 'First name is required'] },
    lastName: { type: String, required: [true, 'Last name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    favoriteColor: {
      type: String,
      required: [true, 'Favorite color is required'],
    },
    birthdate: { type: String },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
