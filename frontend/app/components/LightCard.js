function LightCard({ data }) {
  console.log(data);

  return (
    <div className="flex items-center pl-2 flex-col">
      <div className="font-medium">
        {data.name}
      </div>
      <div className="text-start">
        {"30%"}
      </div>
    </div>
  )
}

export default LightCard;
