const PHASES = [
  {
    phase: "Phase 1",
    period: "0~3개월",
    title: "CLI → API 래핑",
    goal: "첫 유료 고객 온보딩",
    color: "indigo",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/10",
    dotColor: "bg-indigo-500",
    items: [
      "FastAPI 서버 구축 (/process-ingest, plan, do)",
      "멀티 테넌트 Vault 격리 (S3 + PostgreSQL)",
      "기본 웹 UI — 실행 현황 + HITL 승인",
      "Slack/Teams HITL 알림 연동",
      "베타 고객 3개사 무료 온보딩",
    ],
    milestone: "베타 3개사 → 유료 전환",
  },
  {
    phase: "Phase 2",
    period: "3~9개월",
    title: "풀스택 플랫폼 MVP",
    goal: "10개사 ARR 달성",
    color: "violet",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    dotColor: "bg-violet-500",
    items: [
      "전 차원 API 완성 (check, audit, act)",
      "RBAC + OIDC SSO 구현",
      "Jira/GitHub 양방향 동기화",
      "KPI 대시보드 시각화",
      "GAP 분석 XLSX/PDF 내보내기",
      "토큰 사용량 모니터링 + 초과 과금",
    ],
    milestone: "Growth 티어 출시",
  },
  {
    phase: "Phase 3",
    period: "9~18개월",
    title: "확장 및 성장",
    goal: "50개사, 파트너 채널",
    color: "cyan",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/10",
    dotColor: "bg-cyan-500",
    items: [
      "멀티 모델 지원 (GPT-4o, Gemini)",
      "표준 마켓플레이스",
      "교육 모듈 — 표준별 e-learning",
      "파트너 리셀러 포털",
      "글로벌 진출 (일본 자동차 Tier)",
    ],
    milestone: "Professional 티어 + 해외 진출",
  },
  {
    phase: "Phase 4",
    period: "18개월~",
    title: "Enterprise & SaaS 성숙",
    goal: "150개사, Series A",
    color: "emerald",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10",
    dotColor: "bg-emerald-500",
    items: [
      "On-premise · Private Cloud 배포",
      "AI Agent Gateway 통합 오케스트레이션",
      "Notion, Codebeamer 연동",
      "규제 특화 패키지 (SaMD, 자동차, 금융)",
      "Series A 준비",
    ],
    milestone: "Enterprise 티어 + IPO 준비",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4 text-sm text-emerald-400">
            개발 로드맵
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">4단계</span>로 완성하는
            <br />
            글로벌 컴플라이언스 플랫폼
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            PoC 검증이 완료된 지금, 기술은 이미 준비되어 있습니다.
            지금은 실행의 시간입니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/50 via-violet-500/50 via-cyan-500/50 to-emerald-500/50 z-0 mx-[calc(12.5%+24px)]" />

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {PHASES.map((p) => (
              <div key={p.phase} className="relative">
                {/* Phase dot */}
                <div className="flex justify-center mb-6">
                  <div className={`w-4 h-4 rounded-full ${p.dotColor} shadow-lg ring-4 ring-[#0a0e1a]`} />
                </div>

                <div className={`border ${p.borderColor} rounded-2xl p-6 card-glow bg-white/2`}>
                  <div className={`inline-flex items-center gap-2 ${p.bgColor} rounded-lg px-3 py-1.5 mb-4`}>
                    <span className="text-xs font-bold text-slate-400">{p.phase}</span>
                    <span className="text-xs text-slate-500">{p.period}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">목표: {p.goal}</p>

                  <ul className="space-y-2 mb-5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-indigo-400 mt-0.5 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`text-xs ${p.bgColor} border ${p.borderColor} rounded-lg px-3 py-2 text-center font-medium text-slate-300`}>
                    🎯 {p.milestone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next 30 days */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6">
            🚀 최우선 Next Action <span className="text-indigo-400">(30일 이내)</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "FastAPI 스켈레톤 구축", desc: "/process-ingest, plan API 래핑 (1~2주)", urgent: true },
              { step: "02", title: "베타 고객 1개사 선정", desc: "V-Way 기존 SaMD 고객 우선 온보딩", urgent: true },
              { step: "03", title: "클라우드 인프라 선택", desc: "AWS Korea 또는 NCloud (국내 데이터 주권)", urgent: false },
              { step: "04", title: "법인·브랜드 분리 검토", desc: "Processware AI Inc. 또는 V-Way 제품 브랜드", urgent: false },
            ].map((action) => (
              <div
                key={action.step}
                className={`rounded-xl p-4 border ${action.urgent ? "border-indigo-500/30 bg-indigo-500/10" : "border-white/8 bg-white/3"}`}
              >
                <div className="text-2xl font-bold text-slate-600 mb-2">{action.step}</div>
                <div className="text-white text-sm font-semibold mb-1">{action.title}</div>
                <div className="text-slate-500 text-xs">{action.desc}</div>
                {action.urgent && (
                  <div className="mt-2 text-xs text-indigo-400 font-medium">⚡ 최우선</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
