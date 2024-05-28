import { Router } from 'express';
import {
  getContacts,
  getContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = Router();

router.get('/api/contacts',getContacts);
router.get('/api/contacts/:id',getContact);
router.delete('/api/contacts/:id', deleteContact);

export default router;
