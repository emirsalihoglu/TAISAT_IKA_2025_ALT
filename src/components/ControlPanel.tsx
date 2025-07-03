export default function ControlPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <h2 className="font-semibold mb-4 text-center text-lg">Kontroller</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded min-w-[120px]">
          Başlat
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded min-w-[120px]">
          Durdur
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded min-w-[120px]">
          Acil Durum
        </button>
      </div>
    </div>
  );
}