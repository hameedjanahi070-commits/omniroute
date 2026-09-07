import Layout from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Dashboard</h2>
        <p className="text-[#888] text-sm mb-6">Here's your nutrition summary.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-[#1a1a2e] rounded-2xl p-6 text-center border border-[#ffffff06]">
                <div className="text-4xl font-extrabold text-teal-400">0</div>
                <div className="text-xs text-[#888] uppercase tracking-wide mt-2">Consumed</div>
            </div>
             <div className="bg-[#1a1a2e] rounded-2xl p-6 text-center border border-[#ffffff06]">
                <div className="text-4xl font-extrabold text-teal-400">2000</div>
                <div className="text-xs text-[#888] uppercase tracking-wide mt-2">Remaining</div>
            </div>
             <div className="bg-[#1a1a2e] rounded-2xl p-6 text-center border border-[#ffffff06]">
                <div className="text-4xl font-extrabold text-teal-400">2000</div>
                <div className="text-xs text-[#888] uppercase tracking-wide mt-2">Daily Goal</div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
