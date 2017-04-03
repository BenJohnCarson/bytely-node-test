const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true }
});

export default mongoose.model('Url', urlSchema);
