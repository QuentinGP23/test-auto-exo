import { Request, Response } from 'express';
import { addTask, getTask, getAllTasks, updateTask, deleteTask } from './taskDatabase';
import { sendEmail } from './emailService';
import { v4 as uuidv4 } from 'uuid';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;
  const newTask = { id: uuidv4(), title, description, completed: false };
  addTask(newTask);
  await sendEmail('Tâche crée', `La tache ${newTask.title} a bien été créée.`);
  res.status(201).json(newTask);
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const task = getTask(req.params.id);
  if (!task) {
    res.status(404).json({ message: 'Tâche non trouvée' });
    return;
  }
  await sendEmail('Tâches visualisées', `La tâches ${task.title} a été visualisée. BG en vrai`);
  res.json(task);
};

export const getAllTasksHandler = async (_: Request, res: Response): Promise<void> => {
  const tasks = getAllTasks();
  await sendEmail('Tâches visualisées', 'Toutes les taches ont été visualisées. BG en vrai');
  res.json(tasks);
};

export const updateTaskById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const task = getTask(id);
  if (!task) {
    res.status(404).json({ message: 'Tâche non trouvée' });
    return;
  }
  updateTask(id, req.body);
  await sendEmail('Tâche mise à jour', `La tâche ${task.title} a été mise à jour. BG en vrai`);
  res.json(getTask(id));
};

export const deleteTaskById = async (req: Request, res: Response): Promise<void> => {
  const task = getTask(req.params.id);
  if (!task) {
    res.status(404).json({ message: 'Tâche non trouvée' });
    return;
  }
  deleteTask(req.params.id);
  await sendEmail('Tâche supprimée', `La tâche ${task.title} a été supprimée. BG en vrai`);
  res.status(204).end();
};
