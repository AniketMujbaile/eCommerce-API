const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app'); 

describe('Product Endpoints', () => {
  let productId;

  it('should create a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'New Test Product',
        description: 'New test description',
        price: 29.99,
      });

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property('name', 'New Test Product');
    productId = res.body._id;
  });

  it('should retrieve the created product', async () => {
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('name', 'New Test Product');
  });

  it('should update the created product', async () => {
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({
        name: 'Updated Test Product',
        description: 'Updated test description',
        price: 39.99,
      });

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('name', 'Updated Test Product');
  });

  it('should delete the created product', async () => {
    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('message', 'Product deleted successfully');
  });
});
