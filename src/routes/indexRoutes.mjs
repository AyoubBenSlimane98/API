import { Router } from 'express';
import doctorRoute from './doctorsRoutes.js';
import clinicRoute from './clinicRoutes.js';
import appointmentRoute from './appontmentRoutes.js';
import contactRoute from './contactRoutes.js';
import userRoute from './userRoutes.js';

const router = Router();

router.use(doctorRoute);
router.use(clinicRoute);
router.use(appointmentRoute);
router.use(contactRoute);
router.use(userRoute);

export default router;
