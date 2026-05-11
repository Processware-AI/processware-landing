const PLANS = [
  {
    name: "Starter",
    target: "스타트업 · 검증 목적",
    price: "990,000",
    period: "/월",
    color: "border-white/10",
    features: [
      "표준 1개 편입",
      "사용자 5명",
      "/process-ingest, plan, do",
      "기본 대시보드",
      "이메일 지원",
    ],
    cta: "시작하기",
    ctaStyle: "bg-white/10 hover:bg-white/15 text-white",
    popular: false,
  },
  {
    name: "Growth",
    target: "중소기업 · 단일 표준",
    price: "2,990,000",
    period: "/월",
    color: "",
    features: [
      "표준 3개 편입",
      "사용자 20명",
      "전 슬래시 커맨드",
      "Jira · Slack · Teams 연동",
      "GAP 분석 리포트",
      "KPI 대시보드",
      "우선 이메일 지원",
    ],
    cta: "Growth 시작하기",
    ctaStyle: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25",
    popular: true,
  },
  {
    name: "Professional",
    target: "중견기업 · 복수 표준",
    price: "7,990,000",
    period: "/월",
    color: "border-white/10",
    features: [
      "표준 10개 편입",
      "사용자 50명",
      "전 슬래시 커맨드",
      "RBAC 6역할 + SSO",
      "GitHub · GitLab 연동",
      "GAP 분석 XLSX/PDF",
      "토큰 사용량 대시보드",
      "전담 CS 지원",
    ],
    cta: "시작하기",
    ctaStyle: "bg-white/10 hover:bg-white/15 text-white",
    popular: false,
  },
  {
    name: "Enterprise",
    target: "대기업 · 커스텀 요구사항",
    price: "협의",
    period: "",
    color: "border-white/10",
    features: [
      "표준 무제한",
      "사용자 무제한",
      "On-premise · Private Cloud",
      "전 표준 연동 커스텀",
      "SLA 보장 (99.9%)",
      "규제 특화 패키지",
      "전담 컨설턴트 배정",
      "POC 무료 지원",
    ],
    cta: "영업팀 문의",
    ctaStyle: "bg-white/10 hover:bg-white/15 text-white",
    popular: false,
  },
];

const ADD_ONS = [
  { icon: "⚡", title: "AI 토큰 초과 과금", desc: "티어별 월 기본 토큰 포함, 초과 시 per-1K token 요금" },
  { icon: "🎓", title: "교육·훈련 모듈", desc: "표준별 e-learning 구독 (월 30만 원/사용자)" },
  { icon: "📄", title: "심사 리포트 팩", desc: "XLSX/HTML/PDF 인증기관 제출용 (건당 과금)" },
  { icon: "🤝", title: "초기 표준 편입 지원", desc: "전문가 온보딩 서비스 (200~500만 원/표준)" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-4 text-sm text-indigo-400">
            요금제
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            조직 규모에 맞는{" "}
            <span className="gradient-text">합리적인 요금제</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            외부 컨설팅 비용의 20~40%로 동일한 결과, 연간 60~80% 비용 절감.
            초기 3개사는 베타 특별가로 온보딩합니다.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col card-glow ${
                plan.popular
                  ? "pricing-popular"
                  : `bg-white/3 border ${plan.color}`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  가장 인기
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.target}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price === "협의" ? "" : "₩"}
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
                {plan.price !== "협의" && (
                  <div className="text-xs text-slate-500 mt-1">VAT 별도</div>
                )}
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400 text-xs shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Revenue projection */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-8 mb-8">
          <h3 className="text-white font-bold text-xl mb-6">수익 성장 시나리오</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { year: "Year 1 (2026)", clients: "10개사", mrr: "300만 원", arr: "3.6억 원", note: "V-Way 기존 고객 전환" },
              { year: "Year 2 (2027)", clients: "50개사", mrr: "400만 원", arr: "24억 원", note: "인바운드 + 파트너 채널" },
              { year: "Year 3 (2028)", clients: "150개사", mrr: "500만 원", arr: "90억 원", note: "글로벌 진출 포함" },
            ].map((row, i) => (
              <div key={row.year} className={`text-center ${i < 2 ? "border-r border-white/8 pr-6" : ""}`}>
                <div className="text-sm text-slate-500 mb-2">{row.year}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{row.arr}</div>
                <div className="text-sm text-slate-400 mb-1">ARR 목표</div>
                <div className="text-xs text-slate-500">{row.clients} · 평균 MRR {row.mrr}</div>
                <div className="text-xs text-slate-600 mt-1">{row.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">추가 수익 모듈</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADD_ONS.map((addon) => (
              <div
                key={addon.title}
                className="bg-white/3 border border-white/8 rounded-xl p-4 card-glow"
              >
                <span className="text-xl mb-2 block">{addon.icon}</span>
                <div className="text-white text-sm font-medium mb-1">{addon.title}</div>
                <div className="text-slate-500 text-xs">{addon.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
