import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  connectSocket,
  disconnectSocket,
  onMessage,
} from "../services/socket";

// Araç verisi tipi
type VehicleData = {
  latitude: number;
  longitude: number;
  speed: number;      // m/s
  direction: number;  // derece (0-360)
  battery: number;    // %
  pitch: number;      // x ekseni eğimi (önden bakış)
  roll: number;       // y ekseni eğimi (yandan bakış)
};

type VehicleDataContextType = {
  data: VehicleData;
  setData: (newData: VehicleData) => void;
};

const VehicleDataContext = createContext<VehicleDataContextType | undefined>(undefined);

export function VehicleDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<VehicleData>({
    latitude: 39.9208,
    longitude: 32.8541,
    speed: 0,
    direction: 0,
    battery: 100,
    pitch: 0,
    roll: 0,
  });

  useEffect(() => {
    const url = "ws://localhost:8000"; // Gerekirse portu UI’dan alırız
    connectSocket(url);

    onMessage((incoming: Partial<VehicleData>) => {
      setData((prev) => ({
        ...prev,
        ...incoming,
      }));
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <VehicleDataContext.Provider value={{ data, setData }}>
      {children}
    </VehicleDataContext.Provider>
  );
}

export function useVehicleData() {
  const context = useContext(VehicleDataContext);
  if (!context) {
    throw new Error("useVehicleData must be used within a VehicleDataProvider");
  }
  return context;
}