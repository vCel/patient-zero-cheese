const request = require('supertest');
const app = require('../app');

describe('Cheese Routes', () => {
  it('GET /cheeses returns a list of cheeses', async () => {
    const response = await request(app).get('/cheeses');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('POST /new_cheese creates a new cheese', async () => {
    const newCheese = {
      name: 'Test Cheese',
      colour: 'White',
      price_per_kilo: 10.99,
    };
    const response = await request(app).post('/new_cheese').send(newCheese);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Cheese added successfully!');
  });

  it('PATCH /update_cheese updates an existing cheese', async () => {
    const updatedCheese = {
      name: 'Updated Cheese',
      colour: 'Yellow',
      price_per_kilo: 12.99,
    };
    const cheeseId = 11; // replace with a valid cheese ID
    const response = await request(app).patch(`/update_cheese/${cheeseId}`).send(updatedCheese);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', updatedCheese.name);
  });

  it('DELETE /delete_cheese deletes an existing cheese', async () => {
    const cheeseId = 11; // replace with a valid cheese ID
    const response = await request(app).delete(`/delete_cheese/${cheeseId}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});