import { Router } from 'express';
import {
  getClinics,
  getClinic,
  deleteClinic,
  updateClinic,
  createClinic,
} from '../controllers/clinicController.js';

const router = Router();
router.get('/api/clinics', getClinics);
router.get('/api/clinics/:id', getClinic);
router.post('/api/clinics', createClinic);
router.put('/api/clinics/:id', updateClinic);
router.delete('/api/clinics/:id', deleteClinic);

export default router;
