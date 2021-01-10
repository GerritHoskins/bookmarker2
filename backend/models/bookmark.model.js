const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    tag: { type: String, required: true }
}, {
    timestamps: true,
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;