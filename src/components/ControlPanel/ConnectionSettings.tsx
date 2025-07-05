import { useState, useEffect } from "react";
import {
  connectSocket,
  disconnectSocket,
  getSocket,
} from "../../services/socket";

export default function ConnectionSettings() {
  const [port, setPort] = useState("8000");
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    const url = `ws://localhost:${port}`;
    connectSocket(url);
  };

  const handleDisconnect = () => {
    disconnectSocket();
    setConnected(false);
  };

  useEffect(() => {
    const socket = getSocket();
    if (!socket) return;

    const handleOpen = () => setConnected(true);
    const handleClose = () => setConnected(false);

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("close", handleClose);

    return () => {
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("close", handleClose);
    };
  }, [port, connected]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="port" className="text-sm font-medium">
          Port:
        </label>
        <input
          id="port"
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          className="border rounded px-2 py-1 w-24 text-sm"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleConnect}
          disabled={connected}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-4 rounded disabled:opacity-50"
        >
          Bağlan
        </button>
        <button
          onClick={handleDisconnect}
          disabled={!connected}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded disabled:opacity-50"
        >
          Kes
        </button>
      </div>

      <div className="text-sm">
        Durum:{" "}
        <span className={connected ? "text-green-600" : "text-red-600"}>
          {connected ? "Bağlı" : "Bağlı Değil"}
        </span>
      </div>
    </div>
  );
}