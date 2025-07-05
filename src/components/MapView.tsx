// src/components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import { useVehicleData } from "../contexts/VehicleDataContext";

const vehicleIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapUpdater() {
  const map = useMap();
  const { data } = useVehicleData();

  useEffect(() => {
    const newPos: [number, number] = [data.latitude, data.longitude];
    map.flyTo(newPos, map.getZoom());
  }, [data, map]);

  return null;
}

export default function MapView() {
  const { data } = useVehicleData();
  const position: [number, number] = [data.latitude, data.longitude];

  return (
    <div className="w-full h-[400px] flex flex-col">
      <div className="text-sm font-medium mb-2 text-gray-700">
        Konum: x: {data.longitude.toFixed(4)} / y: {data.latitude.toFixed(4)}
      </div>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={vehicleIcon}>
          <Popup>Car is here</Popup>
        </Marker>
        <MapUpdater />
      </MapContainer>
    </div>
  );
}