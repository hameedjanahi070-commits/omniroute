import Layout from "@/components/Layout";

export default function Calculator() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Calorie Calculator 🔢</h2>
        <p className="text-[#888] text-sm mb-6">Calculate your needs.</p>
        <div className="bg-[#1a1a2e] p-6 rounded-2xl border border-[#ffffff06]">
            {/* Calculator form here */}
        </div>
      </div>
    </Layout>
  );
}
