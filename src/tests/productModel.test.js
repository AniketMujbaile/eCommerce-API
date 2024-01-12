const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Product = require('../models/productModel');

describe('Product Model', () => {
  it('should save a product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test description',
      price: 19.99,
    };

    const product = new Product(productData);
    await product.save();

    const savedProduct = await Product.findOne({ name: 'Test Product' });
    expect(savedProduct).to.exist;
    expect(savedProduct.name).to.equal('Test Product');
    expect(savedProduct.description).to.equal('Test description');
    expect(savedProduct.price).to.equal(19.99);
  });
});
