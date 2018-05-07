'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    Product
        .find({
            active: true
        }, 'title price slug');
}

exports.getSlug = (slug) => {
    return Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags')
}