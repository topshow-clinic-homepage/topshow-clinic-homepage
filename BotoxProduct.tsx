import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Botox Product Page
 * 
 * Design Philosophy: Modern Medical Aesthetic
 * - Clean, professional layout with emphasis on medical credibility
 * - Generous whitespace and clear hierarchy
 * - Subtle gradients and refined typography
 * - Focus on educational content with visual hierarchy
 */

export default function BotoxProduct() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const applications = [
    {
      title: "臉部除皺",
      subtitle: "撫平動態紋路",
      description: "針對額肌、眼輪匝肌、皺眉肌等表情肌收縮引起的動態紋路進行改善。肉毒桿菌素能有效減少抬頭紋、魚尾紋、皺眉紋的深度。",
      image: "https://placehold.co/400x300",
      results: ["紋路深度減少 50-80%", "表情自然流暢", "效果維持 3-4 個月"]
    },
    {
      title: "瘦小臉",
      subtitle: "改善國字臉",
      description: "針對咀嚼肌肥厚導致的寬臉型進行改善。肉毒注射使咀嚼肌逐漸萎縮，根據「用進廢退」原理，臉型從方正的國字臉逐漸變成柔和的鵝蛋臉。",
      image: "https://placehold.co/400x300",
      results: ["咀嚼肌寬度縮減 20-30%", "臉型柔和修長", "效果維持 4-6 個月"]
    },
    {
      title: "瘦小腿",
      subtitle: "改善蘿蔔腿",
      description: "針對腓腸肌肥大的肌肉型蘿蔔腿進行改善。肉毒注射使小腿肌肉逐漸放鬆並萎縮，線條從粗壯變得細緻修長。",
      image: "https://placehold.co/400x300",
      results: ["小腿圍縮減 2-4 公分", "線條修長纖細", "效果維持 4-6 個月"]
    },
    {
      title: "瘦肩膀",
      subtitle: "改善水牛肩",
      description: "針對斜方肌發達導致的厚重肩膀進行改善。肉毒注射使肩膀線條變得纖細，脖子視覺上拉長，穿衣更顯氣質。",
      image: "https://placehold.co/400x300",
      results: ["肩線纖細優雅", "脖子視覺拉長", "附加改善肩頸痠痛"]
    },
    {
      title: "腋下止汗",
      subtitle: "改善多汗症",
      description: "肉毒桿菌素能抑制汗腺的神經傳導，有效減少腋下出汗量。由於汗水減少，細菌分解汗液產生的汗臭味也跟著降低。",
      image: "https://placehold.co/400x300",
      results: ["出汗量明顯減少", "異味改善顯著", "效果維持 6-8 個月"]
    },
    {
      title: "進階應用",
      subtitle: "多元治療選擇",
      description: "除了上述常見用途，肉毒桿菌素還可用於頸闊肌拉提（娜芙蒂蒂拉提）、偏頭痛緩解、嘴角眉尾上揚等進階應用。",
      image: "https://placehold.co/400x300",
      results: ["頸部輪廓緊緻", "肌肉緊繃型頭痛緩解", "表情更年輕活力"]
    }
  ];

  const brands = [
    {
      name: "保妥適",
      enName: "Botox",
      origin: "美國",
      nickname: "經典肉毒",
      features: ["FDA 首次核准品牌", "臨床數據最完整", "全球使用最廣泛"],
      description: "作為肉毒桿菌素的開創者，保妥適擁有超過 40 年的臨床應用經驗。"
    },
    {
      name: "儷緻",
      enName: "Dysport",
      origin: "英國",
      nickname: "皇家肉毒",
      features: ["擴散範圍較廣", "見效速度快", "適合大面積治療"],
      description: "儷緻具有較強的擴散能力，特別適合需要大面積放鬆的部位。"
    },
    {
      name: "淨優明",
      enName: "Xeomin",
      origin: "德國",
      nickname: "天使肉毒",
      features: ["不含複合性蛋白質", "降低抗藥性風險", "純淨配方"],
      description: "淨優明採用獨特的純化技術，去除複合性蛋白質，減少免疫反應。"
    }
  ];

  const faqItems = [
    {
      question: "肉毒桿菌素會不會造成中毒？",
      answer: "肉毒桿菌素在醫美應用中非常安全。以瘦小臉為例，單次施打僅約 40-60U。根據毒理學研究，以體重 60 公斤成人換算，肉毒桿菌素的致死劑量約需 2,500-3,000U，與臨床使用劑量相差逾 10 倍以上，具有極高的安全係數。此外，肉毒桿菌素的藥理作用具有暫時性與可逆性，人體會在 6 個月內將藥物完全代謝。"
    },
    {
      question: "打肉毒會讓臉變僵硬嗎？",
      answer: "臉部僵硬通常是由於劑量過大或注射位置不當所致。在專業醫師的精準注射下，使用適當劑量的肉毒桿菌素，能夠在保持自然表情的前提下，有效改善皺紋與輪廓。經驗豐富的醫師會根據患者的肌肉厚度、面部結構與審美需求進行個性化治療。"
    },
    {
      question: "肉毒效果能維持多久？",
      answer: "肉毒桿菌素的效果通常維持 3-6 個月，因人而異。一般而言，首次注射的效果維持時間較短（約 3-4 個月），多次重複注射後，效果維持時間會逐漸延長至 5-6 個月。這是因為肌肉逐漸適應並保持放鬆狀態。為了維持理想效果，建議每 3-6 個月進行一次補打。"
    },
    {
      question: "肉毒有副作用嗎？",
      answer: "肉毒桿菌素的副作用通常輕微且暫時。常見的包括注射部位輕微腫脹、瘀青或短暫的頭痛。極少數情況下可能出現眼瞼下垂或眉毛位置改變，但這些症狀通常在 2-4 週內自行恢復。嚴重副作用非常罕見，且多與不當操作有關。選擇有資質的醫療機構與經驗豐富的醫師至關重要。"
    },
    {
      question: "肉毒會產生抗藥性嗎？",
      answer: "長期使用肉毒桿菌素可能導致部分患者產生抗藥性，即身體產生中和抗體。這種情況的發生率約為 5-10%，且多與高頻率注射或過量使用有關。為了降低抗藥性風險，建議遵循適當的注射間隔（通常為 3-6 個月），並與醫師溝通選擇合適的品牌與劑量。某些品牌如淨優明（Xeomin）因不含複合性蛋白質，可能降低抗藥性風險。"
    },
    {
      question: "打完肉毒多久可以化妝？",
      answer: "建議在注射後 4 小時內避免化妝，以防止細菌感染與藥物擴散。4 小時後可以輕輕進行日常護膚與化妝。但應避免在注射部位進行過度按摩或揉搓。此外，建議在注射後 1 週內避免使用含有刺激成分的護膚品，以減少皮膚敏感反應。"
    },
    {
      question: "肉毒多久打一次最好？",
      answer: "根據臨床經驗，肉毒桿菌素的最佳注射間隔為 3-6 個月。首次注射後，建議在 2 週後進行複診，以評估效果並進行必要的微調。之後，根據效果維持情況，通常每 3-4 個月進行一次補打。過於頻繁的注射（少於 3 個月）可能增加抗藥性風險，而間隔過長則可能導致效果逐漸消退。與醫師溝通制定個性化的治療計畫至關重要。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-xl font-medium text-slate-900">北秀診所</div>
          <nav className="hidden md:flex gap-8">
            <a href="#principle" className="text-slate-600 hover:text-slate-900 transition">原理</a>
            <a href="#applications" className="text-slate-600 hover:text-slate-900 transition">應用部位</a>
            <a href="#brands" className="text-slate-600 hover:text-slate-900 transition">品牌比較</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">常見問題</a>
          </nav>
          <Button className="bg-slate-900 hover:bg-slate-800">預約諮詢</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1920x1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/20"></div>
        </div>
        <div className="container relative py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              精準撫平歲月痕跡
            </h1>
            <p className="text-xl text-slate-100 mb-8 font-light">
              透過肉毒桿菌素除皺與塑形，重現年輕光采。了解最新療程原理與效果。
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                立即預約
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-6">肉毒桿菌素是什麼？</h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            肉毒桿菌素（Botulinum Toxin Type A）是一種從肉毒梭狀桿菌萃取、經過高度純化的蛋白質。在醫學美容領域，A 型肉毒桿菌素因其毒性最弱、經過嚴格純化且臨床研究最完整而被廣泛應用，安全性與效果已獲得全球醫療機構認可。
          </p>
        </div>
      </section>

      {/* Principle Section */}
      <section id="principle" className="bg-slate-100/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">作用原理</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/500x400"
                alt="Mechanism Illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">神經肌肉傳導機制</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  肌肉運動由大腦透過神經末梢分泌「乙醯膽鹼」傳導物質進行控制。乙醯膽鹼就像傳令兵，負責將「收縮」指令傳給肌肉，使肌肉產生運動。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">肉毒的作用方式</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  肉毒桿菌素注射後，會暫時性阻斷乙醯膽鹼的釋放，使神經與肌肉之間的通訊中斷。當肌肉收不到收縮指令，自然就放鬆下來，從而達到除皺、瘦臉、瘦腿等效果。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">可逆性與安全性</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  肉毒桿菌素的藥理作用具有暫時性與可逆性。人體會在 6 個月內將藥物完全代謝，神經末梢與肌肉間的傳導功能將自然恢復，無需擔心依賴性或永久累積。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="container py-16 md:py-24">
        <h2 className="text-4xl font-light text-slate-900 mb-4 text-center">六大醫美應用</h2>
        <p className="text-center text-slate-600 font-light mb-12 max-w-2xl mx-auto">
          肉毒桿菌素能抑制肌肉收縮，凡是與肌肉過度活躍有關的問題，幾乎都能用肉毒來改善。
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-slate-900 mb-1">{app.title}</h3>
                <p className="text-sm text-slate-500 mb-3 font-light">{app.subtitle}</p>
                <p className="text-slate-600 font-light text-sm mb-4 leading-relaxed">
                  {app.description}
                </p>
                <div className="space-y-2">
                  {app.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-600 font-light">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-slate-100/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">品牌比較</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-slate-900">{brand.name}</h3>
                    <p className="text-sm text-slate-500 font-light">{brand.enName}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-full font-light">
                        {brand.origin}
                      </span>
                      <span className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded-full font-light">
                        {brand.nickname}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-light text-sm mb-6 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="space-y-2">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-slate-900 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">效果時間軸</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-light">1</div>
                <div className="w-1 h-16 bg-slate-300 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-medium text-slate-900">即時效果</h3>
                <p className="text-slate-600 font-light">注射後立即可進行日常活動，無需恢復期。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-light">2</div>
                <div className="w-1 h-16 bg-slate-300 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-medium text-slate-900">初步見效（3-7 天）</h3>
                <p className="text-slate-600 font-light">臉部除皺效果開始顯現，皺紋深度逐漸減少。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-light">3</div>
                <div className="w-1 h-16 bg-slate-300 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-medium text-slate-900">最佳效果（2-4 週）</h3>
                <p className="text-slate-600 font-light">瘦臉、瘦腿等輪廓改善效果達到最明顯，肌肉充分放鬆。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-light">4</div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">效果維持（3-6 個月）</h3>
                <p className="text-slate-600 font-light">效果穩定維持，根據個人體質與代謝速度，通常需在 3-6 個月後進行補打。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precautions Section */}
      <section className="bg-slate-100/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">療程須知</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-medium text-slate-900 mb-4">術前注意事項</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">確認無重症肌無力或神經肌肉疾病</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">懷孕或哺乳中應告知醫師</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">避免服用抗凝血藥物</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">術前一週避免過度日曬</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-medium text-slate-900 mb-4">術後護理</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">4 小時內避免平躺、按摩或劇烈運動</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">1 週內避免高溫場所（三溫暖、溫泉）</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">4 小時後可進行日常化妝與護膚</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-900 font-light">•</span>
                  <span className="text-slate-600 font-light">2 週後複診評估效果並進行微調</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container py-16 md:py-24">
        <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">常見問題</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
              >
                <span className="text-lg font-medium text-slate-900 text-left">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform flex-shrink-0 ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600 font-light leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-light mb-6">準備好開始了嗎？</h2>
          <p className="text-lg text-slate-200 font-light mb-8 max-w-2xl mx-auto">
            預約免費諮詢，讓我們的專業醫療團隊為您評估最適合的肉毒桿菌治療方案。
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            立即預約諮詢
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium text-slate-900 mb-4">北秀診所</h3>
              <p className="text-sm text-slate-600 font-light">專業醫美診所，提供最新的肉毒桿菌治療服務。</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#principle" className="text-slate-600 hover:text-slate-900 font-light">原理</a></li>
                <li><a href="#applications" className="text-slate-600 hover:text-slate-900 font-light">應用部位</a></li>
                <li><a href="#brands" className="text-slate-600 hover:text-slate-900 font-light">品牌比較</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li>電話：(02) XXXX-XXXX</li>
                <li>郵箱：info@topshow.clinic</li>
                <li>地址：台北市 XX 區</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">營業時間</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li>週一至週五：10:00-19:00</li>
                <li>週六：10:00-17:00</li>
                <li>週日：休診</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600 font-light">
            <p>&copy; 2026 北秀診所。版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
