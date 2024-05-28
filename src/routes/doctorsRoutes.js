import { Router } from "express";
import { createDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor } from "../controllers/doctorController.js";

const router = Router(); 

router.get('/api/doctors',getDoctors);
router.get('/api/doctors/:id',getDoctor);
router.post('/api/doctors', createDoctor);
router.put('/api/doctors/:id', updateDoctor);
router.delete('/api/doctors/:id',deleteDoctor )

export default router; 