import Layout from "@/components/Layout";
import FoodScanner from "@/components/FoodScanner";
import { useState, useEffect } from "react";

interface FoodItem {
    id: number;
    name: string;
    cals: number;
}

export default function Logger() {
  const [showScanner, setShowScanner] = useState(false);
  const [logs, setLogs] = useState<FoodItem[]>([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemCals, setNewItemCals] = useState("");

  useEffect(() => {
    const savedLogs = localStorage.getItem("foodLogs");
    if (savedLogs) {
        setLogs(JSON.parse(savedLogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foodLogs", JSON.stringify(logs));
  }, [logs]);

  const addLog = () => {
    if (!newItemName || !newItemCals) return;
    setLogs([...logs, { id: Date.now(), name: newItemName, cals: parseInt(newItemCals) }]);
    setNewItemName("");
    setNewItemCals("");
  };

  const totalCals = logs.reduce((sum, item) => sum + item.cals, 0);

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
            setLogs([...logs, { id: Date.now(), ...food }]);
            setShowScanner(false);
        }}/>}

        <div className="bg-[#1a1a2e] p-6 rounded-2xl border border-[#ffffff06] mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Add Food</h3>
            <div className="flex gap-2">
                <input type="text" placeholder="Food name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} className="w-full p-3 bg-[#0f0f1a] rounded-lg text-white" />
                <input type="number" placeholder="Cals" value={newItemCals} onChange={(e) => setNewItemCals(e.target.value)} className="w-24 p-3 bg-[#0f0f1a] rounded-lg text-white" />
                <button onClick={addLog} className="p-3 bg-teal-500 rounded-lg text-white font-bold">Add</button>
            </div>
        </div>

        <div className="bg-[#1a1a2e] p-6 rounded-2xl border border-[#ffffff06]">
            <h3 className="text-xl font-bold text-white mb-4">Today's Log</h3>
            {logs.map(log => (
                <div key={log.id} className="flex justify-between p-3 border-b border-[#ffffff06] text-white">
                    <span>{log.name}</span>
                    <span>{log.cals} cal</span>
                </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[#ffffff06] text-xl font-bold text-white text-right">
                Total: {totalCals} calories
            </div>
        </div>
      </div>
    </Layout>
  );
}
