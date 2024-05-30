import { Router } from 'express';
import { getApppointments, getApppointment, createApppointment, updateApppointment, deleteApppointment } from '../controllers/appointmentController.js';

const router = Router();

router.get('/api/apppointments', getApppointments);
router.get('/api/apppointments/:id', getApppointment);
router.post('/api/apppointments', createApppointment);
router.put('/api/apppointments/:id', updateApppointment);
router.delete('/api/apppointments/:id', deleteApppointment);

export default router; 