'use strict';

/**
 * most-loved-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::most-loved-product.most-loved-product');
