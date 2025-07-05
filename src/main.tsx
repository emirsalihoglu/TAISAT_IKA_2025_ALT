import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";

import { VehicleDataProvider } from "./contexts/VehicleDataContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VehicleDataProvider>
      <App />
    </VehicleDataProvider>
  </StrictMode>
);
