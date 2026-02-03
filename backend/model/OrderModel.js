const {model} = require('mongoose');

const OrderSchema = require('../schema/OrderScheam'); 

const OrderModel = new model('Order', OrderSchema);

module.exports = OrderModel;