import { Router } from 'express';
import {
  getContacts,
  getContact,
  deleteContact,
  createContact,
  updateContact,
} from '../controllers/contactController.js';

const router = Router();

router.get('/api/contacts', getContacts);
router.get('/api/contacts/:id', getContact);
router.post('/api/contacts', createContact);
router.patch('/api/contacts/:id', updateContact);
router.delete('/api/contacts/:id', deleteContact);

export default router;
