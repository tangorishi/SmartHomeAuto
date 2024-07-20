import {useState} from "react";

function RoomCard({ data }) {
  const [collapsed, setCollapsed] = useState(false);

  console.log(data);

  return (
    <div>
      {data.name}
    </div>
  )
}

export default RoomCard;
