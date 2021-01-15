const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    title: { type: String, required: true, index: true },
    url: { type: String, required: true },
    tag: { type: String, required: true, index: true  }
}, {
    timestamps: true,
});

//bookmarkSchema.index({'$**': 'text'});
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;