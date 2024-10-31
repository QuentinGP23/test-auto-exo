import { Router } from 'express';
import { createTask, getTaskById, getAllTasksHandler, updateTaskById, deleteTaskById } from './taskController';

const router = Router();
router.post('/', createTask);
router.get('/:id', getTaskById);
router.get('/', getAllTasksHandler);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

export default router;
