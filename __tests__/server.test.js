const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello, GitHub Actions!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, GitHub Actions!');
  });
});
