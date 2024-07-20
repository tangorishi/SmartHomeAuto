  // src/types.ts
  export interface Appliance {
    applianceId: string;
    name: string;
    type: 'light' | 'fan' | 'oven' | 'other'; // Add more types as needed
    status: 'on' | 'off';
    attributes?: Record<string, any>;
  }

  export interface Room {
    roomId: string;
    name: string;
    appliances: Appliance[];
  }

  export interface Residence {
    residenceId: string;
    name: string; // Add name property to Residence
    rooms: Room[];
  }

  export interface User {
    userId: string;
    name: string;
    residences: Residence[];
  }

  export interface ControlApplianceRequest {
    userId: string;
    residenceId: string;
    roomId: string;
    applianceId: string;
    action: 'on' | 'off';
    attributes?: Record<string, any>; // Optional attributes
  }

  export interface ApplianceWithContext extends Appliance {
    roomId: string;
    roomName: string;
    residenceId: string;
    residenceName: string;
  }
