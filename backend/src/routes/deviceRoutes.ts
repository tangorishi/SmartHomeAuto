// src/routes/deviceRoutes.ts

import { Router } from 'express';
import { controlApplianceHandler, getApplianceDetailsHandler, getAllAppliancesHandler, getAllDataHandler } from '../controllers/deviceController';

const router = Router();

router.post('/control-appliance', controlApplianceHandler);



// Route to get appliance details
router.get('/appliance/:applianceId', getApplianceDetailsHandler);

// src/routes/deviceRoutes.ts

router.get("/all-data", getAllDataHandler);


// Route to get all appliances
router.get('/appliances', getAllAppliancesHandler);



export default router;