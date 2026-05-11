"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-b border-slate-200 shadow-sm shadow-slate-200/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
            P
          </div>
          <span className="text-slate-900 font-bold text-xl tracking-tight">Processway</span>
          <span className="ml-2 text-xs bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5">
            Beta
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">기능</a>
          <a href="#customers" className="hover:text-slate-900 transition-colors">고객사</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">요금제</a>
          <a href="#roadmap" className="hover:text-slate-900 transition-colors">로드맵</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:block text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            문의하기
          </a>
          <a
            href="#pricing"
            className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            무료로 시작하기
          </a>
        </div>
      </div>
    </nav>
  );
}
