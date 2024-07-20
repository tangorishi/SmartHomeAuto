// src/routes/deviceRoutes.ts

import { Router } from 'express';
import { controlApplianceHandler } from '../controllers/deviceController';
import { getApplianceDetailsHandler } from '../controllers/deviceController';

const router = Router();

router.post('/control-appliance', controlApplianceHandler);



// Route to get appliance details
router.get('/appliance/:applianceId', getApplianceDetailsHandler);

export default router;