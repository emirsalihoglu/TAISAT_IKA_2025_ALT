export default function ManualControls() {
  const sendCommand = (cmd: string) => {
    console.log("Komut gönderildi:", cmd); // ileri entegrasyon: WebSocket
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <button onClick={() => sendCommand("forward")} className="control-btn">↑</button>
      </div>
      <div className="flex gap-2">
        <button onClick={() => sendCommand("left")} className="control-btn">←</button>
        <button onClick={() => sendCommand("stop")} className="control-btn">■</button>
        <button onClick={() => sendCommand("right")} className="control-btn">→</button>
      </div>
      <div className="flex gap-2">
        <button onClick={() => sendCommand("backward")} className="control-btn">↓</button>
      </div>
    </div>
  );
}