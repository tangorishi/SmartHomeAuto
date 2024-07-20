// src/services/deviceService.ts
import { User, ControlApplianceRequest, Appliance, ApplianceWithContext, Residence } from '../types';

export const users: User[] = [
  {
    userId: 'user1',
    name: 'John Doe',
    residences: [
      {
        residenceId: 'residence1',
        name: 'Main House',
        rooms: [
          {
            roomId: 'room1',
            name: 'Living Room',
            appliances: [
              { applianceId: 'light1', name: 'Light', type: 'light', status: 'off', attributes: { brightness: 50 } },
              { applianceId: 'fan1', name: 'Fan', type: 'fan', status: 'off', attributes: { speed: 3 } }
            ]
          },
          {
            roomId: 'room2',
            name: 'Bedroom',
            appliances: [
              { applianceId: 'light2', name: 'Night Light', type: 'light', status: 'on', attributes: { brightness: 20 } }
            ]
          }
        ]
      },
      {
        residenceId: 'residence2',
        name: 'Vacation Home',
        rooms: [
          {
            roomId: 'room3',
            name: 'Kitchen',
            appliances: [
              { applianceId: 'oven1', name: 'Oven', type: 'oven', status: 'off', attributes: { temperature: 180 } }
            ]
          }
        ]
      }
    ]
  }
];

export const findUser = (userId: string): User | undefined => {
  return users.find(user => user.userId === userId);
};

export const controlAppliance = (data: ControlApplianceRequest): string | undefined => {
  const user = findUser(data.userId);
  if (!user) return 'User not found';

  const residence = user.residences.find(residence => residence.residenceId === data.residenceId);
  if (!residence) return 'Residence not found';

  const room = residence.rooms.find(room => room.roomId === data.roomId);
  if (!room) return 'Room not found';

  const appliance = room.appliances.find(appliance => appliance.applianceId === data.applianceId);
  if (!appliance) return 'Appliance not found';

  appliance.status = data.action;
  if (data.attributes) {
    appliance.attributes = { ...appliance.attributes, ...data.attributes };
  }
  return undefined;
};

// Add this function to get all appliances with context information
export const getAllAppliances = (): ApplianceWithContext[] => {
  const appliancesWithContext: ApplianceWithContext[] = [];
  for (const user of users) {
    for (const residence of user.residences) {
      for (const room of residence.rooms) {
        for (const appliance of room.appliances) {
          appliancesWithContext.push({
            ...appliance,
            roomId: room.roomId,
            roomName: room.name,
            residenceId: residence.residenceId,
            residenceName: residence.name
          });
        }
      }
    }
  }
  return appliancesWithContext;
};

// Add this function to get all user data
export const getUserData = (userId: string): User | undefined => {
  return findUser(userId);
};
