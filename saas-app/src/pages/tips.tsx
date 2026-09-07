import Layout from "@/components/Layout";
import { TIPS_DATA } from "@/lib/data";

export default function Tips() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-6">Calorie Tips 💡</h2>
        {TIPS_DATA.map((category: any) => (
            <div key={category.category} className="mb-8">
                <h3 className="text-xl font-bold text-teal-400 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {category.tips.map((tip: any, i: number) => (
                        <div key={i} className="bg-[#1a1a2e] p-4 rounded-xl border border-[#ffffff06]">
                            <h4 className="font-bold flex items-center gap-2"><span>{tip.icon}</span>{tip.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </Layout>
  );
}
