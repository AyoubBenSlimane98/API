import { Router } from "express";
import {getAdmins,getAdmin , createAdmin , updateAdmin , deleteAdmin } from '../controllers/adminController';
const router = Router(); 
router.get('/api/admin', getAdmins); 
router.get('/api/admin/:id', getAdmin); 
router.post('/api/admin/:id', createAdmin);
router.put('/api/admin/:id', updateAdmin);
router.delete('/api/admin/:id', deleteAdmin);
export default router; 