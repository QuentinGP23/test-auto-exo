import express from 'express';
import routes from './routes';
import { getAllTasks } from './taskDatabase';

const app = express();
app.use(express.json());
app.use('/api/tasks', routes);

app.get('/', (req, res) => {
  const tasks = getAllTasks();
  res.json(tasks);
});

export default app;
