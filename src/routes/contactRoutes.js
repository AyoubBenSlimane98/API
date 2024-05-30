import { Router } from 'express';
import {
  getContacts,
  getContact,
  deleteContact,
  createContact
} from '../controllers/contactController.js';

const router = Router();

router.get('/api/contacts',getContacts);
router.get('/api/contacts/:id', getContact);
router.post('/api/contacts', createContact);
router.delete('/api/contacts/:id', deleteContact);

export default router;
