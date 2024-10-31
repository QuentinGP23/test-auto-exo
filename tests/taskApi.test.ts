import request from 'supertest';
import app from '../src/app';

describe('Task API', () => {
  it('should create a new task', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'New Task',
      description: 'Test task description'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should fetch all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should fetch a task by ID', async () => {
    const task = { title: 'Task', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).get(`/api/tasks/${createdTask.body.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(task);
  });

  it('should update a task', async () => {
    const task = { title: 'Task', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).put(`/api/tasks/${createdTask.body.id}`).send({ title: 'Updated Task' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    const task = { title: 'Task', description: 'Description', completed: false };
    const createdTask = await request(app).post('/api/tasks').send(task);
    const res = await request(app).delete(`/api/tasks/${createdTask.body.id}`);
    expect(res.statusCode).toBe(204);
  });
});
