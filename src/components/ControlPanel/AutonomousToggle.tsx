import { useState } from "react";

export default function AutonomousToggle() {
  const [autonomous, setAutonomous] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm font-semibold">
        Otonom Mod:{" "}
        <span className={autonomous ? "text-green-600" : "text-red-600"}>
          {autonomous ? "Açık" : "Kapalı"}
        </span>
      </div>
      <button
        onClick={() => setAutonomous((prev) => !prev)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        {autonomous ? "Kapat" : "Aç"}
      </button>
    </div>
  );
}