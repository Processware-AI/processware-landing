const SEGMENTS = [
  {
    icon: "🏥",
    title: "SaMD 의료기기 제조사",
    badge: "1차 타겟",
    badgeColor: "bg-red-500/15 text-red-400 border-red-500/20",
    standards: ["IEC 62304", "ISO/SAE 21434", "디지털의료기기법"],
    pain: "이중 표준 대응에 전담 인력 2~3명 필요. 외부 심사 준비에 수개월 소요.",
    value: "표준 이중화 자동 추적성으로 ISO·IEC 동시 대응. 심사 준비 공수 90% 절감.",
    size: "국내 200~300개사",
  },
  {
    icon: "🚗",
    title: "자동차 SW 업체",
    badge: "1차 타겟",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    standards: ["ASPICE", "ISO 26262", "IATF 16949"],
    pain: "Tier 1/2/3 모두 의무화. 문서 수립에 6~12개월. 외부 컨설팅 비용 수억 원.",
    value: "ASPICE 문서 수립 4~6주로 단축. 기존 컨설팅 비용의 20~40%로 동일한 결과.",
    size: "Tier 1/2/3 전체",
  },
  {
    icon: "🏛️",
    title: "공공·금융 SW 개발사",
    badge: "2차 타겟",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    standards: ["CMMI DEV ML3", "K-ISMS", "전자금융감독규정"],
    pain: "CMMI 인증 취득 후 유지관리 비용 과다. 정부 조달 요건으로 인증 필수.",
    value: "CMMI ML3 취득 후 자동 유지관리. 조달청 인증 지속 유지를 플랫폼이 보장.",
    size: "조달청 등록 SW 업체",
  },
  {
    icon: "🚀",
    title: "글로벌 진출 스타트업",
    badge: "PLG 채널",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    standards: ["ISO 27001", "SOC 2 Type II", "GDPR"],
    pain: "인증 취득 전문가 없음. 글로벌 진출을 위해 인증은 필수. 빠른 취득 필요.",
    value: "셀프서비스 온보딩으로 전문가 없이도 ISO 27001 수립. Series A 전 인증 취득.",
    size: "Series A+ 스타트업",
  },
];

const COMPARISON = [
  { category: "문서 작성", existing: "컨설턴트 직접 작성 (수개월)", processware: "AI 에이전트 자동 초안 생성 (수일)" },
  { category: "심사 준비", existing: "내부 인력 전담 배치 (수주)", processware: "자동 갭 분석 + 보고서 생성 (즉시)" },
  { category: "비용", existing: "연간 1~5억 원 (컨설팅 + 인건비)", processware: "월 99만~799만 원 구독" },
  { category: "표준 전환", existing: "새 컨설팅 계약 → 수개월 재수립", processware: "교차 추적성으로 즉시 확장" },
  { category: "운영 연속성", existing: "담당자 이직 시 지식 소실", processware: "플랫폼에 지식 보존, 24/7 자동 운영" },
];

export default function Customers() {
  return (
    <section id="customers" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4 text-sm text-cyan-400">
            타겟 고객
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            규정 준수가{" "}
            <span className="gradient-text">생존 조건인</span>
            <br />
            모든 조직을 위해
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            SaMD, 자동차 SW, 공공, 스타트업 — 업종에 상관없이 표준 준수가 필수인 모든 조직에서 사용합니다.
          </p>
        </div>

        {/* Segment cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 card-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{seg.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{seg.title}</h3>
                    <span className="text-xs text-slate-500">{seg.size}</span>
                  </div>
                </div>
                <span className={`text-xs border rounded-full px-2.5 py-1 shrink-0 ${seg.badgeColor}`}>
                  {seg.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {seg.standards.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-3">
                  <div className="text-xs text-red-400 font-medium mb-1">Pain Point</div>
                  <p className="text-sm text-slate-400">{seg.pain}</p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3">
                  <div className="text-xs text-emerald-400 font-medium mb-1">Processware 가치</div>
                  <p className="text-sm text-slate-400">{seg.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/8">
            <h3 className="text-white font-bold text-xl">기존 방식 vs Processware</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-6 py-3 text-sm text-slate-500 font-medium">항목</th>
                  <th className="text-left px-6 py-3 text-sm text-slate-500 font-medium">기존 방식 (컨설팅/자체)</th>
                  <th className="text-left px-6 py-3 text-sm text-indigo-400 font-medium">✦ Processware</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.category} className={i < COMPARISON.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="px-6 py-4 text-sm text-slate-300 font-medium">{row.category}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{row.existing}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{row.processware}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
