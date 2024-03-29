const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const collection = mongoose.model('Users', loginSchema);

module.exports = collection;