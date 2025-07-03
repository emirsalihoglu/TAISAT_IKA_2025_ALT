export default function CameraPanel() {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      <div className="flex-1 min-w-[200px] bg-black rounded-lg h-40 flex items-center justify-center text-white">
        İleri Kamera
      </div>
      <div className="flex-1 min-w-[200px] bg-black rounded-lg h-40 flex items-center justify-center text-white">
        Geri Kamera
      </div>
      <div className="flex-1 min-w-[200px] bg-black rounded-lg h-40 flex items-center justify-center text-white">
        Atış Kamerası
      </div>
    </div>
  );
}