import { useState } from "react";
import ApplianceCard from "@/components/ApplianceCard";

function RoomCard({ data }) {
  const [collapsed, setCollapsed] = useState(false);

  console.log(data);

  return (
    <div className="flex flex-col gap-1 text-2xl bg-slate-700" onClick={() => setCollapsed(!collapsed)}>
      <div className="flex flex-row gap-1 cursor-pointer select-none">
        <div>{collapsed ? '▸' : '▾'}</div>
        <div>{data.name}</div>
      </div>

      <div className={`${collapsed ? 'hidden' : 'flex flex-row'}`}>
        {
          data.appliances.map((appliance, index) => (
            <ApplianceCard key={appliance.id || index} appliance={appliance} />
          ))
        }
      </div>
    </div>
  );
}

export default RoomCard;
