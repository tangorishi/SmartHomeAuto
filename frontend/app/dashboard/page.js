"use client";
import { useEffect, useState } from 'react';
import { fetchInitialData } from '../../utils/api';
import { subscribeToApplianceUpdates, controlAppliance } from '../../utils/socket';
import socket from '../../utils/socket'; // Import socket instance
import { NavBar } from '../components/NavBar';
import RoomCard from "../components/RoomCard";
import { useSession } from 'next-auth/react';

const AppliancePage = () => {
  const session = useSession();
  const [appliances, setAppliances] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('User'); // Initial username

  useEffect(() => {
    // Fetch initial data
    const loadData = async () => {
      try {
        const initialData = await fetchInitialData();
        setData(initialData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadData();

    // Subscribe to real-time updates
    const handleApplianceStatusUpdate = (update) => {
      setAppliances((prevAppliances) => {
        return prevAppliances.map((appliance) =>
          appliance.applianceId === update.applianceId
            ? { ...appliance, status: update.status, attributes: update.attributes }
            : appliance
        );
      });
    };

    subscribeToApplianceUpdates(handleApplianceStatusUpdate);

    return () => {
      // Clean up the subscription when the component unmounts
      socket.off('appliance-status', handleApplianceStatusUpdate);
    };
  }, []);

  useEffect(() => {
    // Log data when it changes
    console.log('Updated data:', data);
  }, [data]);


  const handleControlAppliance = (applianceId, action) => {
    const data = {
      userId: 'user1', // Replace with actual user ID
      residenceId: 'residence1', // Replace with actual residence ID
      roomId: 'room1', // Replace with actual room ID
      applianceId,
      action,
      attributes: {}, // Add attributes if needed
    };

    controlAppliance(data);
  };

  if (error) return <div>Error: {error}</div>;
  console.log(username);
  if(session.status==="loading"){
    return <div>
      Loading...
    </div>
  }
  return (
    <div className="flex flex-col items-center px-8">
      <NavBar />
      <div className="w-full flex flex-col gap-4 mt-5 px-8">
        {session.status==="authenticated"?<h1 className="text-6xl font-bold text-white-600">Hello, {session.data.user.name.split(" ")[0]} !</h1>:
        <h1 className="text-6xl font-bold text-white-600">Hello, {username} !</h1>}
         {/* Greeting message */}
        {data.rooms && data.rooms.map((room, index) => (
          <RoomCard key={index} data={room} />
        ))}
      </div>
    </div>
  );
};

export default AppliancePage;
