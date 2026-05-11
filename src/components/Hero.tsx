export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-bg pt-20">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-8 text-sm text-indigo-300">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          AI-Driven Process Compliance Platform &nbsp;·&nbsp; PoC 검증 완료
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          <span className="gradient-text">어떤 표준이든,</span>
          <br />
          <span className="gradient-text">어떤 조직이든</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light leading-relaxed">
          수립부터 심사까지 — AI가 운영하는
          <br className="hidden md:block" />
          프로세스 컴플라이언스 플랫폼
        </p>
        <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
          ISO · IEC · IATF · ASPICE · CMMI · KS 등 모든 표준을{" "}
          <strong className="text-slate-400">29개 AI 에이전트</strong>로 자동화.<br />
          Plan → Do → Check → Act 전 사이클을 폐쇄 루프로 운영합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            무료로 시작하기
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
          >
            기능 살펴보기 →
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "29개", label: "AI 에이전트", sub: "4차원 PDCA 전 영역" },
            { value: "90%", label: "심사 준비 공수 절감", sub: "자동 추적성 + REC 증적" },
            { value: "4~6주", label: "표준 수립 기간", sub: "기존 6~12개월 대비" },
            { value: "60~80%", label: "비용 절감", sub: "외부 컨설팅 대비" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5 text-center card-glow"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
