import { Router } from "express";
import {getAdmins,getAdmin , createAdmin , updateAdmin , deleteAdmin } from '../controllers/adminController.js';
const router = Router(); 
router.get('/api/admin', getAdmins); 
router.get('/api/admin/:id', getAdmin); 
router.post('/api/admin', createAdmin);
router.patch('/api/admin/:id', updateAdmin);
router.delete('/api/admin/:id', deleteAdmin);
export default router; 