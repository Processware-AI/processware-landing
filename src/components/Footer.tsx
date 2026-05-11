export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Processware</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">
              AI-Driven Process Compliance Platform.<br />
              어떤 표준이든, 어떤 조직이든 — 수립부터 심사까지 AI가 운영합니다.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              PoC 검증 완료 · 베타 온보딩 중
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">플랫폼</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-slate-300 transition-colors">기능 소개</a></li>
              <li><a href="#customers" className="hover:text-slate-300 transition-colors">타겟 고객</a></li>
              <li><a href="#pricing" className="hover:text-slate-300 transition-colors">요금제</a></li>
              <li><a href="#roadmap" className="hover:text-slate-300 transition-colors">로드맵</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#contact" className="hover:text-slate-300 transition-colors">데모 신청</a></li>
              <li><a href="#contact" className="hover:text-slate-300 transition-colors">베타 온보딩</a></li>
              <li><a href="mailto:contact@processware.ai" className="hover:text-slate-300 transition-colors">이메일 문의</a></li>
              <li>
                <a
                  href="https://github.com/Processware-AI/processware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Standards supported */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="text-xs text-slate-600 mb-3">지원 표준</div>
          <div className="flex flex-wrap gap-2">
            {["ISO 9001", "ISO 14001", "ISO 27001", "IEC 62304", "ISO/SAE 21434", "ASPICE", "ISO 26262", "IATF 16949", "CMMI DEV ML3", "SOC 2", "GDPR", "K-ISMS"].map((std) => (
              <span
                key={std}
                className="text-xs bg-white/5 border border-white/8 rounded-full px-2.5 py-1 text-slate-500"
              >
                {std}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>© 2026 Processware AI · V-Way Consulting. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>개인정보처리방침</span>
            <span>이용약관</span>
            <span>면책 조항: AI 생성 문서는 전문가 검토를 권장합니다</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
