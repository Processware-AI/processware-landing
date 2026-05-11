const STEPS = [
  {
    dim: "차원 1",
    phase: "Plan",
    color: "from-indigo-600 to-indigo-400",
    borderColor: "border-indigo-200",
    bgColor: "bg-indigo-50",
    command: "/process-plan",
    title: "표준 수립 자동화",
    desc: "국제·국내 표준을 ingestion한 후, AI 에이전트가 표준 조항과 조직 컨텍스트를 매핑해 POL·PRO·WI 문서 초안을 자동 생성합니다.",
    items: ["표준 조항 자동 파싱", "조직 내부 문서 매핑", "8종 문서 유형 자동 생성", "추적성 매트릭스 구성"],
  },
  {
    dim: "차원 2",
    phase: "Do",
    color: "from-violet-600 to-violet-400",
    borderColor: "border-violet-200",
    bgColor: "bg-violet-50",
    command: "/process-do",
    title: "이행 지원 & 증적 관리",
    desc: "수립된 프로세스에 따라 이행 활동을 추적하고, 증적 데이터를 자동 수집·연결합니다. Redmine·Jira와 실시간 동기화.",
    items: ["이행 체크리스트 자동화", "증적 문서 자동 연결", "Redmine/Jira 연동 동기화", "이행률 실시간 모니터링"],
  },
  {
    dim: "차원 3",
    phase: "Check",
    color: "from-cyan-600 to-cyan-400",
    borderColor: "border-cyan-200",
    bgColor: "bg-cyan-50",
    command: "/process-check",
    title: "AI 내부 심사",
    desc: "AI 심사 에이전트가 표준 조항 대비 이행 갭을 자동 분석하고 NCR(부적합 보고서)을 발행합니다. 외부 심사 준비 공수를 90% 절감.",
    items: ["표준 조항별 갭 분석", "NCR 자동 발행", "심사 보고서 XLSX/PDF 내보내기", "KPI 대시보드 시각화"],
  },
  {
    dim: "차원 4",
    phase: "Act",
    color: "from-emerald-600 to-emerald-400",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    command: "/process-act",
    title: "프로세스 자동 개정",
    desc: "NCR 기반으로 프로세스 문서를 자동 개정하고 버전을 관리합니다. 개정된 문서는 다시 Plan 사이클로 연결되어 폐쇄 루프를 완성.",
    items: ["NCR → 개선안 자동 도출", "문서 버전 자동 관리", "개정 이력 완전 추적", "다음 PDCA 사이클 자동 연결"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-4 text-sm text-violet-700">
            4차원 PDCA 폐쇄 루프
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            표준 수립부터 개정까지{" "}
            <span className="gradient-text">AI가 자동으로</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            7개 슬래시 커맨드로 4차원 PDCA 전 사이클을 완전 자동화.
            사람은 HITL 게이트에서 최종 승인만 내립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.phase}
              className={`relative border ${step.borderColor} rounded-2xl p-6 card-glow bg-white shadow-sm`}
            >
              {/* Step number connector */}
              {i < STEPS.length - 1 && (
                <div className="hidden xl:block absolute top-10 -right-3 z-10 w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>
              )}

              <div className={`inline-flex items-center gap-2 ${step.bgColor} rounded-lg px-3 py-1.5 mb-4`}>
                <span className="text-xs font-mono text-slate-600">{step.dim}</span>
                <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.phase}
                </span>
              </div>

              <h3 className="text-slate-900 font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.desc}</p>

              <div className="font-mono text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2 mb-4">
                {step.command}
              </div>

              <ul className="space-y-1.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="text-indigo-600 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Commands list */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="text-sm text-slate-500 mb-4 font-medium">7개 슬래시 커맨드</div>
          <div className="flex flex-wrap gap-2">
            {[
              "/process-ingest",
              "/process-plan",
              "/process-do",
              "/process-check",
              "/process-audit",
              "/process-act",
              "/process-backfill",
            ].map((cmd) => (
              <span
                key={cmd}
                className="font-mono text-sm text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-1.5"
              >
                {cmd}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
