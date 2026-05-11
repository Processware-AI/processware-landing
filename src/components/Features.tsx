const FEATURES = [
  {
    icon: "🔄",
    title: "4차원 PDCA 폐쇄 루프",
    desc: "Plan → Do → Check → Act 전 사이클을 업계 유일 수준의 완전 자동화로 구현. NCR 발행부터 프로세스 개정까지 단일 루프로 처리.",
    badge: "업계 유일",
  },
  {
    icon: "📋",
    title: "표준 무관(Standard-Agnostic) 설계",
    desc: "ISO, CMMI, ASPICE, IATF, IEC 62304, ISO/SAE 21434 등 어떤 구조화 문서든 /process-ingest 한 줄로 편입. 표준 교차 추적성 자동 관리.",
    badge: "핵심 차별점",
  },
  {
    icon: "🤖",
    title: "29개 AI 에이전트 자동화",
    desc: "차원별 분산된 29개 에이전트가 문서 작성, 심사, 개정을 24/7 자동 수행. HITL 게이트로 인간 판단이 필요한 지점만 선별 개입.",
    badge: "29개 에이전트",
  },
  {
    icon: "🛡️",
    title: "RBAC 6역할 + ISO §9.2 독립성",
    desc: "auditor, executor, process_owner, qmr, admin, viewer 역할 기반 접근 제어. ISO 9.2 조항 독립성 강제로 엔터프라이즈급 거버넌스 보장.",
    badge: "엔터프라이즈",
  },
  {
    icon: "📦",
    title: "레거시 백필 (/process-backfill)",
    desc: "기존 조직의 증적 문서를 자동으로 표준 형식에 맞게 변환·편입. '0에서 시작'하는 부담 없이 현행 시스템을 그대로 플랫폼에 온보딩.",
    badge: "도입 장벽 제거",
  },
  {
    icon: "🔗",
    title: "Redmine / Jira / GitHub 연동",
    desc: "Redmine 단방향 Push 구현 완료. MVP에서 Jira·GitHub 양방향 동기화, Slack·Teams HITL 알림 연동 지원.",
    badge: "즉시 연동",
  },
  {
    icon: "📊",
    title: "KPI 대시보드 & GAP 분석",
    desc: "표준 조항 대비 현재 이행 상태를 실시간 시각화. GAP 분석 결과를 XLSX/PDF로 인증기관 제출 포맷으로 내보내기.",
    badge: "심사 대비",
  },
  {
    icon: "🔐",
    title: "OIDC/SAML SSO + 멀티 테넌시",
    desc: "테넌트 단위 Vault 격리로 조직 간 데이터 완전 분리. Active Directory, Okta 등 엔터프라이즈 IAM 시스템과 즉시 연동.",
    badge: "보안",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-4 text-sm text-indigo-700">
            핵심 기능
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            컨설팅이 아닌,{" "}
            <span className="gradient-text">자동화된 플랫폼</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI 에이전트가 24/7 표준 문서를 작성하고, 이행 여부를 심사하며, 개선안을 제안합니다.
            사람은 최종 판단만 내리면 됩니다.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 card-glow group shadow-sm"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-slate-900 font-semibold text-base leading-tight">{f.title}</h3>
              </div>
              <span className="inline-block text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5 mb-3">
                {f.badge}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* PoC result banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 border border-indigo-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-4xl">✅</div>
            <div className="flex-1">
              <div className="text-sm text-indigo-700 font-medium mb-1">PoC 검증 결과</div>
              <h3 className="text-xl text-slate-900 font-bold mb-2">
                단일 PDCA 루프에서 Critical NCR 3건 + Data Gap 2건 해소 실증
              </h3>
              <p className="text-slate-600 text-sm">
                NCR-001 Critical 발행 → 차원 4 사이클 → PRO v1.0→v1.1 자동 개정 →{" "}
                <strong className="text-slate-700">KPI Critical 4 → 1 회복</strong>.
                이는 플랫폼의 핵심 가치 제안인 '규정 준수 자동화로 인한 심사 준비 공수 절감'을 수치로 증명한 것입니다.
              </p>
            </div>
            <div className="flex gap-6 text-center shrink-0">
              <div>
                <div className="text-3xl font-bold text-indigo-600">4→1</div>
                <div className="text-xs text-slate-500 mt-1">KPI Critical</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600">5건</div>
                <div className="text-xs text-slate-500 mt-1">이슈 자동 해소</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
