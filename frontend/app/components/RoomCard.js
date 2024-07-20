
import {useState} from "react";
import LightCard from "./LightCard";

function RoomCard({ data }) {
  const [collapsed, setCollapsed] = useState(false);

  console.log('roomcard data', data);

  return (
    <div className="flex flex-col gap-1 text-2xl bg-slate-700" onClick={() => setCollapsed(!collapsed)}>
      <div className="flex flex-row gap-1 cursor-pointer select-none ">
        <div>{collapsed ? '▸' : '▾'}</div>
        <div className="">{data.name}</div>
      </div>

      <div className={`${collapsed ? 'hidden' : 'flex flex-row'}`}>
        {
          data.appliances.map((appliance, index) => (
            <LightCard key={appliance.applianceId} data={appliance} />
          ))
        }
      </div>
    </div>
  )
}

export default RoomCard;
