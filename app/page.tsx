"use client";
import teams from "./teams.json";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [compact, setCompact] = useState(false);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">MBA Teams</h1>
        <button
          onClick={() => setCompact(!compact)}
          className="px-3 py-1 rounded bg-slam-500 hover:bg-slam-600 text-white"
        >
          {compact ? "Gallery View" : "Compact View"}
        </button>
      </div>

      {/* Grid wrapper */}
      <div
        className={`grid ${
          compact
            ? "grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        }`}
      >
        {teams.map((team) => (
          <div
            key={team.ticker}
            className={`bg-gray-900 rounded-lg text-center border border-white/10 ${
              compact ? "p-1" : "p-4"
            }`}
          >
            <Image
              src={team.image}
              alt={team.name}
              width={compact ? 90 : 300}
              height={compact ? 120 : 400}
              className="rounded-lg mx-auto"
            />
            <h2
              className={`mt-1 font-semibold ${
                compact ? "text-[10px]" : "text-base"
              }`}
            >
              {team.name}
            </h2>
            <p
              className={`text-gray-400 ${
                compact ? "text-[9px]" : "text-sm"
              }`}
            >
              ${team.ticker}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

