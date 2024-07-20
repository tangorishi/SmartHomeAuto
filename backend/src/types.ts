// src/types.ts
export interface Appliance {
    applianceId: string;
    name: string;
    status: 'on' | 'off';
    attributes?: Record<string, any>; // Ensure attributes can be any key-value pair
  }
  
  export interface Room {
    roomId: string;
    name: string;
    appliances: Appliance[];
  }
  
  export interface User {
    userId: string;
    name: string;
    residences: Residence[];
  }
  
  export interface Residence {
    residenceId: string;
    rooms: Room[];
  }
  
  export interface ControlApplianceRequest {
    userId: string;
    residenceId: string;
    roomId: string;
    applianceId: string;
    action: 'on' | 'off';
    attributes?: Record<string, any>; // Optional attributes
  }
  