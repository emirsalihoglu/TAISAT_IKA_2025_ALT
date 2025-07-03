export default function InclinationPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center h-full flex flex-col justify-between">
      <h2 className="font-semibold mb-4">Eğim</h2>
      <div className="flex justify-around text-lg">
        <div>
          <p className="text-gray-600">Yatay</p>
          <p className="text-blue-600 font-bold">5.2°</p>
        </div>
        <div>
          <p className="text-gray-600">Dikey</p>
          <p className="text-blue-600 font-bold">-1.8°</p>
        </div>
      </div>
    </div>
  );
}