import ManualControls from "./ManualControls";
import AutonomousToggle from "./AutonomousToggle";
import ConnectionSettings from "./ConnectionSettings";

export default function ControlPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-6">
      <h2 className="font-semibold text-center text-lg">Kontroller</h2>

      {/* Manuel yön kontrolleri */}
      <ManualControls />

      {/* Otonom sürüş kontrolü */}
      <AutonomousToggle />

      {/* Bağlantı ayarları */}
      <ConnectionSettings />
    </div>
  );
}