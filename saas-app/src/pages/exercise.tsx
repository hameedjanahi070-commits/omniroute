import Layout from "@/components/Layout";
import { EXERCISE_DB } from "@/lib/data";
import { useState } from "react";

export default function Exercise() {
  const [goal, setGoal] = useState("weightloss");
  const [level, setLevel] = useState("beginner");

  const plan = (EXERCISE_DB as any)[goal][level];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-1">Exercise Plan 🏃</h2>
        <p className="text-[#888] text-sm mb-6">Select your goal and level to see your weekly plan.</p>
        <div className="flex gap-4 mb-6">
            <select value={goal} onChange={(e) => setGoal(e.target.value)} className="p-3 bg-[#1a1a2e] rounded-lg w-full text-white">
                <option value="weightloss">Weight Loss</option>
                <option value="muscle">Muscle Building</option>
                <option value="fitness">General Fitness</option>
            </select>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="p-3 bg-[#1a1a2e] rounded-lg w-full text-white">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
        <div className="grid gap-6">
            {plan.map((dayPlan: any) => (
                <div key={dayPlan.day} className="bg-[#1a1a2e] p-4 rounded-xl border border-[#ffffff06]">
                    <h3 className="text-xl font-bold text-teal-400">{dayPlan.day}: {dayPlan.label}</h3>
                    <div className="mt-2 text-sm text-gray-400">
                        {dayPlan.exercises.map((ex: any, i: number) => (
                            <div key={i} className="flex justify-between py-1 text-white">
                                <span>{ex.icon} {ex.name}</span>
                                <span>{ex.reps}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
