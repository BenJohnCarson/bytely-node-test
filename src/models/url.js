const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validators = require('mongoose-validators');

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true, unique: true, validate: validators.isURL() },

});

urlSchema.plugin(uniqueValidator);

export default mongoose.model('Url', urlSchema);
