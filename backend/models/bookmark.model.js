const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* const tagSchema = new Schema({
    name: String
}); */

const bookmarkSchema = 
    new Schema({
        title: {
            type: String, 
            required: true, 
            index: true 
        },
        url: { 
            type: String,
            required: true 
        },
        tag: { 
            type: String, 
            required: true, 
            index: true 
        },
      //  tags: [tagSchema]
    }, {
        timestamps: true,
    });
bookmarkSchema.index({title: 'text', url: 'text'});
//bookmarkSchema.index({'$**': 'text'});
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;