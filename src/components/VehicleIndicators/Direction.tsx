import { useVehicleData } from "../../contexts/VehicleDataContext";

function getDirectionLabel(degree: number): string {
  if (degree >= 337.5 || degree < 22.5) return "Kuzey";
  if (degree >= 22.5 && degree < 67.5) return "Kuzeydoğu";
  if (degree >= 67.5 && degree < 112.5) return "Doğu";
  if (degree >= 112.5 && degree < 157.5) return "Güneydoğu";
  if (degree >= 157.5 && degree < 202.5) return "Güney";
  if (degree >= 202.5 && degree < 247.5) return "Güneybatı";
  if (degree >= 247.5 && degree < 292.5) return "Batı";
  if (degree >= 292.5 && degree < 337.5) return "Kuzeybatı";
  return "Bilinmiyor";
}

export default function Direction() {
  const { data } = useVehicleData();
  const directionLabel = getDirectionLabel(data.direction);

  return (
    <div className="flex-1 min-w-[150px] bg-white rounded-lg shadow p-4 text-center">
      <h2 className="font-semibold mb-2">Yön</h2>
      <p className="text-2xl font-bold text-green-600">{directionLabel}</p>
    </div>
  );
}