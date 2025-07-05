let socket: WebSocket | null = null;

export function connectSocket(url: string): void {
  if (socket && socket.readyState === WebSocket.OPEN) return;

  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("WebSocket bağlantısı açıldı");
  };

  socket.onclose = () => {
    console.log("WebSocket bağlantısı kapandı");
  };

  socket.onerror = (error) => {
    console.error("WebSocket hatası:", error);
  };
}

export function getSocket(): WebSocket | null {
  return socket;
}

export function disconnectSocket(): void {
  if (socket) {
    socket.close();
    socket = null;
  }
}

export function onMessage(callback: (data: any) => void): void {
  if (!socket) return;
  socket.onmessage = (event) => {
    try {
      const parsed = JSON.parse(event.data);
      callback(parsed);
    } catch (e) {
      console.error("Geçersiz veri alındı:", event.data);
    }
  };
}