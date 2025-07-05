import { useVehicleData } from "../contexts/VehicleDataContext";

export default function InclinationPanel() {
  const { data } = useVehicleData();

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-around">
      {/* Önden Görünüm (Pitch) */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center shadow"
             style={{ transform: `rotateX(${data.pitch}deg) rotateZ(0deg)` }}>
          <span className="text-sm font-semibold">Ön</span>
        </div>
        <p className="mt-2 text-sm text-gray-700">Pitch: {data.pitch.toFixed(1)}°</p>
      </div>

      {/* Yandan Görünüm (Roll) */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center shadow"
             style={{ transform: `rotateZ(${data.roll}deg)` }}>
          <span className="text-sm font-semibold">Yan</span>
        </div>
        <p className="mt-2 text-sm text-gray-700">Roll: {data.roll.toFixed(1)}°</p>
      </div>
    </div>
  );
}