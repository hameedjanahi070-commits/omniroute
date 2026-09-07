import Layout from "@/components/Layout";
import { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(1.2);
  const [result, setResult] = useState<number | null>(null);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) return;

    let bmr = 10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161);
    const tdee = bmr * activity;
    setResult(Math.round(tdee));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Calorie Calculator 🔢</h2>
        <p className="text-[#888] text-sm mb-6">Calculate your daily caloric needs.</p>
        <div className="bg-[#1a1a2e] p-6 rounded-2xl border border-[#ffffff06]">
          <div className="grid gap-4">
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white" />
            <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white" />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white" />

            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white">
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Lightly active</option>
              <option value={1.55}>Moderately active</option>
              <option value={1.725}>Very active</option>
              <option value={1.9}>Extra active</option>
            </select>

            <button onClick={calculateBMR} className="w-full p-3 mt-4 bg-teal-500 rounded-lg text-white font-bold">
              Calculate TDEE
            </button>

            {result && (
              <div className="mt-4 p-4 text-center bg-[#0f0f1a] rounded-xl text-teal-400 font-bold text-xl">
                Your TDEE is approx {result} calories/day
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
