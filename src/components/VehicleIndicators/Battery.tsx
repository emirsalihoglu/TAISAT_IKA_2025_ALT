import { useVehicleData } from "../../contexts/VehicleDataContext";

export default function Battery() {
  const { data } = useVehicleData();

  return (
    <div className="flex-1 min-w-[150px] bg-white rounded-lg shadow p-4 text-center">
      <h2 className="font-semibold mb-2">Batarya</h2>
      <p className="text-2xl font-bold text-red-600">
        {Math.round(data.battery)}%
      </p>
    </div>
  );
}