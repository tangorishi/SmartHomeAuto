const users = [
  {
    userId: 'user1',
    name: 'John Doe',
    residences: [
      {
        residenceId: 'residence1',
        rooms: [
          {
            roomId: 'room1',
            name: 'Living Room',
            appliances: [
              {
                applianceId: 'light1',
                name: 'Light',
                status: 'off',
                attributes: { brightness: 50 } // Example value
              },
              {
                applianceId: 'fan1',
                name: 'Fan',
                status: 'off',
                attributes: { speed: 3 } // Example value
              }
            ]
          },
          {
            roomId: 'room2',
            name: 'Bedroom',
            appliances: [
              {
                applianceId: 'light2',
                name: 'Night Light',
                status: 'on',
                attributes: { brightness: 20 } // Example value
              }
            ]
          }
        ]
      },
      {
        residenceId: 'residence2',
        rooms: [
          {
            roomId: 'room3',
            name: 'Kitchen',
            appliances: [
              {
                applianceId: 'oven1',
                name: 'Oven',
                status: 'off',
                attributes: { temperature: 180 } // Example value
              }
            ]
          }
        ]
      }
    ]
  }
];

export default users[0];
