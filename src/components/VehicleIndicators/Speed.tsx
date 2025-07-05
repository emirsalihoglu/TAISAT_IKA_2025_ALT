import { useVehicleData } from "../../contexts/VehicleDataContext";

export default function Speed() {
  const { data } = useVehicleData();
  const speedKmh = (data.speed * 3.6).toFixed(1); // m/s to km/h

  return (
    <div className="flex-1 min-w-[150px] bg-white rounded-lg shadow p-4 text-center">
      <h2 className="font-semibold mb-2">Hız</h2>
      <p className="text-2xl font-bold text-blue-600">{speedKmh} km/h</p>
    </div>
  );
}