import { Router } from 'express';
import { getApppointments, getApppointment, createApppointment, updateApppointment, deleteApppointment } from '../controllers/appointmentController.js';

const router = Router();

router.get('/api/apppointment', getApppointments);
router.get('/api/apppointment/:id', getApppointment);
router.post('/api/apppointment', createApppointment);
router.put('/api/apppointment/:id', updateApppointment);
router.delete('/api/apppointment/:id', deleteApppointment);

export default router; 