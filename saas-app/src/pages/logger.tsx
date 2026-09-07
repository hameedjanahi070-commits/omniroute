import Layout from "@/components/Layout";
import FoodScanner from "@/components/FoodScanner";
import { useState } from "react";

export default function Logger() {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Food Logger 📝</h2>
        <p className="text-[#888] text-sm mb-6">Track your daily intake or AI scan.</p>

        <button
            onClick={() => setShowScanner(!showScanner)}
            className="mb-4 w-full p-4 bg-[#1a1a2e] rounded-xl text-teal-400 font-bold border border-teal-500/20"
        >
            {showScanner ? "Close Scanner" : "✨ AI Scan Food"}
        </button>

        {showScanner && <FoodScanner onScanResult={(food) => {
            console.log("Scanned:", food);
            setShowScanner(false);
            alert("Scanned: " + food.name + " (" + food.cals + " cal)");
        }}/>}

        {/* Existing Logger logic here */}
      </div>
    </Layout>
  );
}
