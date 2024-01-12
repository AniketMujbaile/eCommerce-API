 
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Product Search', () => {
  it('should search for products by name, description, or variant name', async () => {
    const res = await request(app)
      .post('/api/products/search')
      .send({
        query: 'test',
      });

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
  });
});
