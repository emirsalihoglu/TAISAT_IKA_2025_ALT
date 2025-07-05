import MapView from "../components/MapView";
import CameraPanel from "../components/CameraPanel";
import Speed from "../components/VehicleIndicators/Speed";
import Direction from "../components/VehicleIndicators/Direction";
import Battery from "../components/VehicleIndicators/Battery";
import InclinationPanel from "../components/InclinationPanel";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout
      map={<MapView />}
      cameras={<CameraPanel />}
      indicators={
        <div className="flex flex-col md:flex-row gap-2">
          <Speed />
          <Direction />
          <Battery />
        </div>
      }
      inclination={<InclinationPanel />}
      controls={<ControlPanel />}
    />
  );
}