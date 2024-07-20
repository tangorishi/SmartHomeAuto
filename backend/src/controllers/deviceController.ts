import { Request, Response } from 'express';
import { controlAppliance, users } from '../services/deviceService'; // Import users data from your data source
import { ControlApplianceRequest } from '../types';

// Handler to control an appliance
export const controlApplianceHandler = (req: Request, res: Response) => {
  const data: ControlApplianceRequest = req.body;
  const error = controlAppliance(data);
  if (error) {
    return res.status(400).json({ error });
  }
  res.status(200).json({ message: 'Appliance controlled successfully' });
};

// Handler to get details of an appliance
export const getApplianceDetailsHandler = (req: Request, res: Response) => {
  const { applianceId } = req.params;

  // Iterate through all users and their residences to find the appliance
  for (const user of users) {
    for (const residence of user.residences) {
      for (const room of residence.rooms) {
        const appliance = room.appliances.find(a => a.applianceId === applianceId);
        if (appliance) {
          return res.status(200).json({
            userId: user.userId,
            residenceId: residence.residenceId,
            roomId: room.roomId,
            appliance
          });
        }
      }
    }
  }

  res.status(404).json({ error: 'Appliance not found' });
};
