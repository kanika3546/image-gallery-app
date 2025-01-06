const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageURL: {
        type: String
    },
    originalName: {
        type: String
    },
    mimeType: {
        type: String
    },
    size: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const ImageModel = mongoose.model('gallaries', ImageSchema);
module.exports = ImageModel;