import { Router } from 'express';
import {getUsers ,getUser,updateUser , deleteUser ,loginUser , validateEmail ,createUser } from '../controllers/userController.js';

const router = Router();
router.get('/api/users',getUsers)
router.get('/api/users/:id', getUser);
router.post('/api/users', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id',deleteUser);
router.post('/api/login', loginUser);
router.post('/api/valid-mail', validateEmail); 


export default router;
