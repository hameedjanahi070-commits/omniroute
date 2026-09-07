import Layout from "@/components/Layout";
import { MEAL_DB } from "@/lib/data";
import { useState } from "react";

export default function MealPlan() {
  const [currentPlan, setCurrentPlan] = useState<any>(null);

  const generatePlan = () => {
    const plan = {
      breakfast: MEAL_DB.breakfast[Math.floor(Math.random() * MEAL_DB.breakfast.length)],
      lunch: MEAL_DB.lunch[Math.floor(Math.random() * MEAL_DB.lunch.length)],
      dinner: MEAL_DB.dinner[Math.floor(Math.random() * MEAL_DB.dinner.length)],
      snack: MEAL_DB.snack[Math.floor(Math.random() * MEAL_DB.snack.length)],
    };
    setCurrentPlan(plan);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Meal Plan Generator 📋</h2>
        <p className="text-[#888] text-sm mb-6">Generate a random healthy meal plan.</p>
        <button onClick={generatePlan} className="mb-6 w-full p-4 bg-teal-500 rounded-xl text-white font-bold">Generate New Plan</button>
        {currentPlan && (
            <div className="grid gap-4">
                {Object.entries(currentPlan).map(([meal, item]: [string, any]) => (
                    <div key={meal} className="bg-[#1a1a2e] p-4 rounded-xl border border-[#ffffff06] text-white">
                        <h4 className="capitalize font-bold text-teal-400">{meal}</h4>
                        <p>{item.name} - {item.cals} calories, {item.protein}g protein</p>
                    </div>
                ))}
            </div>
        )}
      </div>
    </Layout>
  );
}
