const mongoose = require('mongoose')

const colorValidator = (x) => (/^#([0-9a-f]{6})$/i).test(x);

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        validator: [colorValidator, 'Invalid color'],
        required: true
    }
}, 
{ 
    collection: 'budget' 
})

module.exports = mongoose.model('final', budgetSchema)