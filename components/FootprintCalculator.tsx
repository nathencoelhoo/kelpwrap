"use client";

import { useMemo, useState } from "react";

type Preset = {
  label: string;
  itemsPerDay: number;
  gramsPerItem: number;
};

const presets: Preset[] = [
  { label: "Small café", itemsPerDay: 80, gramsPerItem: 6 },
  { label: "Restaurant", itemsPerDay: 220, gramsPerItem: 8 },
  { label: "Resort / hotel", itemsPerDay: 500, gramsPerItem: 9 },
];

// Average weight of a 500ml PET bottle, used only as a relatable comparison.
const GRAMS_PER_BOTTLE = 9.5;

export default function FootprintCalculator() {
  const [presetIndex, setPresetIndex] = useState(1);
  const [itemsPerDay, setItemsPerDay] = useState(presets[1].itemsPerDay);

  const gramsPerItem = presets[presetIndex].gramsPerItem;

  const results = useMemo(() => {
    const dailyGrams = itemsPerDay * gramsPerItem;
    const monthlyKg = (dailyGrams * 30) / 1000;
    const yearlyKg = (dailyGrams * 365) / 1000;
    const yearlyBottles = Math.round((yearlyKg * 1000) / GRAMS_PER_BOTTLE);
    return { monthlyKg, yearlyKg, yearlyBottles };
  }, [itemsPerDay, gramsPerItem]);

  function selectPreset(i: number) {
    setPresetIndex(i);
    setItemsPerDay(presets[i].itemsPerDay);
  }

  return (
    <section id="calculator" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
            Plastic footprint calculator
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            See what switching actually saves.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Estimate the single-use plastic your kitchen avoids by switching
            to KelpWrap packaging. Figures are indicative, based on typical
            wrap, sachet and liner weights.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 lg:grid-cols-[1fr_1fr]">
          {/* Controls */}
          <div className="bg-paper p-8 md:p-10">
            <p className="text-sm font-medium text-ink/60">
              Your establishment
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {presets.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => selectPreset(i)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    presetIndex === i
                      ? "border-kelp-deep bg-kelp-deep text-paper"
                      : "border-ink/15 text-ink/70 hover:border-kelp-deep"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="items"
                  className="text-sm font-medium text-ink/60"
                >
                  Packaging items used per day
                </label>
                <span className="font-display text-2xl font-medium text-kelp-deep">
                  {itemsPerDay.toLocaleString()}
                </span>
              </div>
              <input
                id="items"
                type="range"
                min={10}
                max={2000}
                step={10}
                value={itemsPerDay}
                onChange={(e) => setItemsPerDay(Number(e.target.value))}
                className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink/15 accent-kelp-deep"
              />
              <div className="mt-2 flex justify-between text-xs text-ink/40">
                <span>10</span>
                <span>2,000</span>
              </div>
            </div>

            <p className="mt-10 text-xs leading-relaxed text-ink/50">
              Based on an average of {gramsPerItem}g of single-use plastic
              per item for a {presets[presetIndex].label.toLowerCase()} —
              wraps, sachets, liners and bags combined.
            </p>
          </div>

          {/* Results */}
          <div className="bg-tide p-8 text-paper md:p-10">
            <p className="text-sm font-medium text-paper/60">
              Plastic avoided by switching to KelpWrap
            </p>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-4xl font-medium text-kelp md:text-5xl">
                  {results.monthlyKg.toFixed(1)}
                  <span className="ml-1 text-lg text-paper/70">kg</span>
                </p>
                <p className="mt-1 text-sm text-paper/60">per month</p>
              </div>
              <div>
                <p className="font-display text-4xl font-medium text-kelp md:text-5xl">
                  {results.yearlyKg.toFixed(0)}
                  <span className="ml-1 text-lg text-paper/70">kg</span>
                </p>
                <p className="mt-1 text-sm text-paper/60">per year</p>
              </div>
            </div>

            <div className="mt-8 border-t border-paper/15 pt-8">
              <p className="text-sm leading-relaxed text-paper/80">
                That&apos;s roughly the same weight of plastic as{" "}
                <span className="font-semibold text-paper">
                  {results.yearlyBottles.toLocaleString()} single-use bottles
                </span>{" "}
                every year — plastic that would otherwise take centuries to
                break down, replaced with packaging that composts at home in
                weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
