import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const vehicleIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView() {
  const position: [number, number] = [39.9208, 32.8541]; // Ankara

  return (
    <div className="w-full h-[400px] flex flex-col">
      <div className="text-sm font-medium mb-2 text-gray-700">
        Konum: x: {position[1].toFixed(4)} / y: {position[0].toFixed(4)}
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
          <Popup>Araç burada</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}