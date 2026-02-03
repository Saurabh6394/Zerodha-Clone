const {model } = require('mongoose');

const HoldingSchema = require('../schema/HoldingSchema');


const HoldingModel = new model('Holding', HoldingSchema);

module.exports = HoldingModel;