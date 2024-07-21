'use client';

import { useEffect, useState } from 'react';
import { fetchInitialData } from '../../utils/api';
import { subscribeToApplianceUpdates, controlAppliance } from '../../utils/socket';
import socket from '../../utils/socket'; // Import socket instance
import { NavBar } from '../components/NavBar';
import RoomCard from '../components/RoomCard';
import { useSession } from 'next-auth/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { messageState } from '../recoilContextProvider';


const AppliancePage = () => {

  const { data: session } = useSession();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [message, setMessage] = useRecoilState(messageState);

  useEffect(() => {
    const loadData = async () => {
      try {
        const initialData = await fetchInitialData();
        setData(initialData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data || !data.residences) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center px-8 h-full">
      <NavBar />
      <div className="w-full flex flex-col gap-4 mt-5 px-8">
        {session?.user ? (
          <h1 className="text-6xl font-bold text-white-600">
            Hello, {session.user.name.split(' ')[0]}!
          </h1>
        ) : (
          <h1 className="text-6xl font-bold text-white-600">
            Hello, User!
          </h1>
        )}

        <div className='md:flex md:justify-start md:pt-4'>
          {data.residences[0].rooms.map((room, index) => (
            <RoomCard key={index} data={room} />
          ))}
        </div>
      </div>
      <div className='fixed bottom-0 right-0 pr-4 pb-4 w-fit h-fit bg-black text-green-500 select-none'>
        {message}
      </div>
    </div>
  );
};

export default AppliancePage;
