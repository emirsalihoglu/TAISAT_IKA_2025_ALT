import type { ReactNode } from "react";

export default function MainLayout({
  map,
  cameras,
  indicators,
  inclination,
  controls,
}: {
  map: ReactNode;
  cameras: ReactNode;
  indicators: ReactNode;
  inclination: ReactNode;
  controls: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <div className="flex flex-col gap-4 h-full">
        {/* Üst içerik */}
        <div className="grid grid-cols-[2fr_3fr] gap-4 lg:grid-cols-[2fr_3fr] md:grid-cols-1 flex-grow">
          {/* Harita */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col h-full min-h-[300px]">
            {map}
          </div>

          {/* Sağ panel */}
          <div className="grid grid-rows-3 gap-4 h-full">
            <div className="bg-white rounded-lg shadow p-4">{cameras}</div>
            <div className="bg-white rounded-lg shadow p-4">{indicators}</div>
            <div className="bg-white rounded-lg shadow p-4">{inclination}</div>
          </div>
        </div>

        {/* Kontroller */}
        <div className="bg-white rounded-lg shadow p-4">{controls}</div>
      </div>
    </div>
  );
}