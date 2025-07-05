export default function CameraPanel() {
  const cameras = [
    { name: "İleri Kamera", src: "https://via.placeholder.com/400x240?text=İleri+Kamera" },
    { name: "Geri Kamera", src: "https://via.placeholder.com/400x240?text=Geri+Kamera" },
    { name: "Atış Kamerası", src: "https://via.placeholder.com/400x240?text=Atış+Kamerası" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cameras.map((cam, index) => (
        <div key={index} className="bg-black rounded-lg overflow-hidden shadow">
          <div className="text-white text-center bg-gray-800 py-1 font-semibold">
            {cam.name}
          </div>
          <img src={cam.src} alt={cam.name} className="w-full h-[240px] object-cover" />
        </div>
      ))}
    </div>
  );
}