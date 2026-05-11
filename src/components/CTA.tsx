export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Market opportunity */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: "글로벌 GRC SaaS 시장",
              value: "$84B",
              sub: "2029년 전망 (CAGR ~9%)",
              icon: "🌏",
            },
            {
              label: "국내 SAM 목표",
              value: "100억 원",
              sub: "서비스 가능 국내 시장",
              icon: "🇰🇷",
            },
            {
              label: "국내 SaMD 시장",
              value: "5,000억 원",
              sub: "2025년 규제 강화로 급성장",
              icon: "📈",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center card-glow"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{item.value}</div>
              <div className="text-white text-sm font-medium mb-1">{item.label}</div>
              <div className="text-slate-500 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Main CTA block */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/50 via-violet-900/30 to-indigo-900/50 border border-indigo-500/30 rounded-3xl p-12 text-center">
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 text-sm text-indigo-300">
              🎯 지금이 선점의 시간입니다
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              기술은 이미 준비되어 있습니다
            </h2>
            <p className="text-xl text-slate-300 mb-3 max-w-2xl mx-auto">
              첫 유료 고객 1개사가 모든 것을 증명합니다.
            </p>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              국내에 동일한 AI 에이전트 기반 4차원 PDCA 자동화 플랫폼은 현재 존재하지 않습니다.
              글로벌 경쟁사도 AI 에이전트로 프로세스를 직접 수행하는 기능은 없습니다.
              <strong className="text-white"> 선점 기회가 지금 열려있습니다.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:contact@processware.ai"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                베타 온보딩 신청하기
              </a>
              <a
                href="mailto:contact@processware.ai"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                데모 요청하기
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                초기 3개사 베타 특별가
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                케이스 스터디 공동 작성
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                전담 온보딩 지원
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                V-Way 컨설팅 연계
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
