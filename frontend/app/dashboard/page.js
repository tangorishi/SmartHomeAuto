// app/dashboard/page.js
"use client";
import { useEffect, useState } from 'react';
import { fetchInitialData } from '@/utils/api';
import { subscribeToApplianceUpdates, controlAppliance } from '@/utils/socket';
import socket from '@/utils/socket'; // Import socket instance


import NavBar from "@/components/NavBar";
import RoomCard from "@/components/RoomCard";
import roomData from "@/data/roomData";
import SearchBar from "@/components/SearchBar";

function AppliancePage() {
  const [data, setData] = useState({rooms: []});
  const [search, setSearch]=useState('');
  const [results, setResults]=useState('');
  const [appliances, setAppliances] = useState([]);
  const [error, setError] = useState('');

//filter data based on search, add to results via setresults
  useEffect(() => {
    // Fetch initial data
    const loadData = async () => {
      try {
        const data = await fetchInitialData();
        setAppliances(data.appliances || []);
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
  if (!appliances.length) return <div>Loading...</div>;

  return (  
    <div>
      <h1>Appliances</h1>
      <ul>
        {appliances.map((appliance) => (
          <li key={appliance.applianceId}>
            <p>Name: {appliance.name}</p>
            <p>Type {appliance.type}</p>

            <p>Status: {appliance.status}</p>
            <button onClick={() => handleControlAppliance(appliance.applianceId, 'on')}>
              Turn On
            </button>
            <button onClick={() => handleControlAppliance(appliance.applianceId, 'off')}>
              Turn Off
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliancePage;
