import request from 'supertest';
import app from '../src/app';

describe('API de Tâches', () => {
  it('devrait créer une nouvelle tâche', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'Nouvelle Tâche',
      description: 'Description de la tâche de test'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('devrait récupérer toutes les tâches', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('devrait récupérer une tâche par ID', async () => {
    const task = { title: 'Tâche', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).get(`/api/tasks/${createdTask.body.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(task);
  });

  it('devrait mettre à jour une tâche', async () => {
    const task = { title: 'Tâche', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).put(`/api/tasks/${createdTask.body.id}`).send({ title: 'Tâche Mise à Jour' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Tâche Mise à Jour');
  });

  it('devrait supprimer une tâche', async () => {
    const task = { title: 'Tâche', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).delete(`/api/tasks/${createdTask.body.id}`);
    expect(res.statusCode).toBe(204);
  });
});
