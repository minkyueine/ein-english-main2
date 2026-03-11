import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle, MessageCircle, Star, BookOpen,
  ArrowRight, HelpCircle, Medal,
  ChevronDown, ChevronUp, Settings,
  RotateCcw, MessageSquare, Clock, ShieldCheck, Target, GraduationCap,
  MousePointer2, Headphones, Globe,
  Check, ShieldAlert, HeartHandshake, Smile, PlayCircle,
  Gift, Timer, PenTool, History, Menu, X, Zap,
  User, LogIn, Youtube, Instagram, Facebook,
  TrendingUp, Award, Play, Mic, Video,
  Calendar, BarChart3, CreditCard, Sparkles,
  ClipboardCheck, FileText, UserCheck
} from 'lucide-react';

const useCountUp = (end, duration = 1500, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
};

const TrustBar = () => {
  const retention = useCountUp(95);
  const years = useCountUp(10);

  const items = [
    { icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8" />, gradient: "from-green-500 to-emerald-500", bg: "from-green-50 to-emerald-50", numClass: "text-emerald-600 md:bg-gradient-to-r md:from-green-500 md:to-emerald-500 md:bg-clip-text md:text-transparent", number: `${retention.count}%`, label: "재수강률", ref: retention.ref, pulse: true },
    { icon: <Award className="w-5 h-5 md:w-8 md:h-8" />, gradient: "from-amber-500 to-orange-500", bg: "from-amber-50 to-orange-50", numClass: "text-orange-600 md:bg-gradient-to-r md:from-amber-500 md:to-orange-500 md:bg-clip-text md:text-transparent", number: `${years.count}년+`, label: "운영 경력", ref: years.ref },
    { icon: <MessageSquare className="w-5 h-5 md:w-8 md:h-8" />, gradient: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50", numClass: "text-blue-600 md:bg-gradient-to-r md:from-blue-500 md:to-cyan-500 md:bg-clip-text md:text-transparent", number: "1:1", label: "실시간 교정", ref: null },
  ];

  return (
    <section className="py-8 xs:py-10 md:py-12 relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-amber-50/50 border-b border-slate-100 flex justify-center">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,179,8,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

      <div className="max-w-[1200px] w-full px-4 md:px-6 relative z-10">
        <p className="text-center text-xs font-black text-blue-600 uppercase tracking-[0.25em] mb-4 md:mb-6">검증된 수치</p>
        <div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-2 xs:gap-3 md:gap-6 lg:gap-8 pb-1 md:pb-0" ref={retention.ref}>
          {items.map((item, i) => (
            <div
              key={i}
              ref={item.ref}
              className="group relative flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-2 md:gap-4 px-1 py-4 md:px-10 md:py-6 rounded-2xl bg-white border border-slate-100 md:border-2 shadow-sm md:shadow-lg hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 hover:border-blue-200/80 transition-all duration-300 min-w-0 md:min-w-[200px] overflow-hidden w-full md:w-auto"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-80 transition-opacity`} />
              <div className={`relative z-10 w-9 h-9 xs:w-12 xs:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center p-2 shadow-sm md:shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white`}>
                {item.icon}
              </div>
              <div className="relative z-10 flex flex-col items-center md:items-start mt-1 md:mt-0">
                <span className={`text-lg xs:text-xl md:text-4xl font-black leading-none block tracking-tight ${item.numClass} ${item.pulse ? 'animate-pulse-glow' : ''}`}>
                  {item.number}
                </span>
                <span className="text-[11px] xs:text-xs md:text-sm font-bold text-slate-600 mt-1 md:mt-1.5 block break-keep">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const recentSignups = [
  { name: '김*현', time: '1분 전' },
  { name: '이*진', time: '3분 전' },
  { name: '박*은', time: '5분 전' },
  { name: '최*아', time: '8분 전' },
  { name: '정*우', time: '12분 전' },
  { name: '강*민', time: '15분 전' },
  { name: '조*연', time: '18분 전' },
  { name: '윤*서', time: '20분 전' },
  { name: '장*호', time: '22분 전' },
  { name: '임*영', time: '25분 전' },
  { name: '한*주', time: '28분 전' },
  { name: '오*윤', time: '30분 전' },
  { name: '서*환', time: '35분 전' },
  { name: '신*기', time: '38분 전' },
  { name: '권*수', time: '40분 전' },
  { name: '황*희', time: '42분 전' },
  { name: '안*준', time: '45분 전' },
  { name: '송*진', time: '48분 전' },
  { name: '전*민', time: '50분 전' },
  { name: '홍*솔', time: '52분 전' },
  { name: '유*빈', time: '55분 전' },
  { name: '고*람', time: '58분 전' },
  { name: '문*영', time: '1시간 전' },
  { name: '양*하', time: '1시간 전' },
  { name: '손*현', time: '1시간 전' },
  { name: '배*율', time: '1시간 전' },
  { name: '조*아', time: '1시간 전' },
  { name: '백*현', time: '2시간 전' },
  { name: '허*진', time: '2시간 전' },
  { name: '남*주', time: '2시간 전' },
  { name: '심*연', time: '2시간 전' },
  { name: '노*진', time: '2시간 전' },
  { name: '하*민', time: '3시간 전' },
  { name: '곽*성', time: '3시간 전' },
  { name: '성*원', time: '3시간 전' },
  { name: '차*린', time: '3시간 전' },
  { name: '주*석', time: '3시간 전' },
  { name: '우*현', time: '4시간 전' },
  { name: '구*아', time: '4시간 전' },
  { name: '신*별', time: '4시간 전' },
  { name: '임*혁', time: '4시간 전' },
  { name: '정*은', time: '5시간 전' },
  { name: '김*준', time: '5시간 전' },
  { name: '이*수', time: '5시간 전' },
  { name: '박*아', time: '5시간 전' },
  { name: '정*하', time: '6시간 전' },
  { name: '강*주', time: '6시간 전' },
  { name: '조*윤', time: '6시간 전' },
  { name: '윤*호', time: '6시간 전' },
  { name: '최*민', time: '7시간 전' },
];

const App = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("adult");
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [toastIndex, setToastIndex] = useState(-1);
  const [showToast, setShowToast] = useState(false);
  const [showKakaoPopup, setShowKakaoPopup] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowKakaoPopup(true), 3000);
    const hideTimer = setTimeout(() => setShowKakaoPopup(false), 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setToastIndex(0);
      setShowToast(true);
    }, 2500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (toastIndex < 0) return;
    const showTimer = setTimeout(() => {
      setShowToast(false);
      const nextTimer = setTimeout(() => {
        setToastIndex((prev) => (prev + 1) % recentSignups.length);
        setShowToast(true);
      }, 16000); // 4초 표시, 16초 대기 -> 총 20초 주기
      return () => clearTimeout(nextTimer);
    }, 4000);
    return () => clearTimeout(showTimer);
  }, [toastIndex]);

  const videoReviews = [
    { title: "영어미팅이 두려운 직장인의 화상영어 후기", desc: "비즈니스 영어 비법", img: "https://img.youtube.com/vi/rYJM1G7ysIE/maxresdefault.jpg", videoId: "rYJM1G7ysIE", ratio: "aspect-video", category: "adult" },
    { title: "퇴화된 영어를 심폐소생 하는 방법", desc: "직장인 영어 회화", img: "https://img.youtube.com/vi/aings9mFIUo/maxresdefault.jpg", videoId: "aings9mFIUo", ratio: "aspect-video", category: "adult" },
    { title: "영포자 미국 이민을 가다! 성인 영어 발음교정", desc: "미국 이민 준비생", img: "https://img.youtube.com/vi/LePfFnMwymU/hqdefault.jpg", videoId: "LePfFnMwymU", ratio: "aspect-video", category: "adult" },
    { title: "화상영어 한달 찐후기 (Trip to Yebina)", desc: "여행 유튜버 Yebina님", img: "https://img.youtube.com/vi/XzAh9VC1F0E/maxresdefault.jpg", videoId: "XzAh9VC1F0E", ratio: "aspect-video", category: "adult" },
    { title: "대학교 4학년이 똑똑하게 화상영어 공부하는 법", desc: "대학생 영어 공부 꿀팁", img: "https://img.youtube.com/vi/pmfUxHNiuD4/maxresdefault.jpg", videoId: "pmfUxHNiuD4", ratio: "aspect-video", category: "adult" },
    { title: "매일 30분씩 외국인과 대화해 보았다", desc: "매일 30분 영어 루틴", img: "https://img.youtube.com/vi/CNUkYt2vvMQ/maxresdefault.jpg", videoId: "CNUkYt2vvMQ", ratio: "aspect-video", category: "adult" },
    { title: "어학연수, 교환학생 갈 필요 없어요!", desc: "화상영어 선택 꿀팁", img: "https://img.youtube.com/vi/MUxWrc-Kv2I/maxresdefault.jpg", videoId: "MUxWrc-Kv2I", ratio: "aspect-video", category: "adult" },
    // Junior Videos (Shorts)
    { title: "학원 갈 시간 없다고요? 새벽 6시부터 밤 늦게까지 OK", desc: "초등 영어 회화 꿀팁", img: "https://img.youtube.com/vi/5JCF_TxaqAM/maxresdefault.jpg", videoId: "5JCF_TxaqAM", ratio: "aspect-[9/16]", category: "junior" },
    { title: "우리 아이랑 딱 맞는 영어 선생님 찾았어요!", desc: "어린이 화상영어 추천", img: "https://img.youtube.com/vi/dd9Z-TCfmCo/maxresdefault.jpg", videoId: "dd9Z-TCfmCo", ratio: "aspect-[9/16]", category: "junior" },
    { title: "처음엔 긴장했지만… Raze 선생님과 첫 수업 후 웃음꽃 활짝🌸", desc: "영어 자신감 폭발 후기", img: "https://img.youtube.com/vi/tlYmdce76Y0/maxresdefault.jpg", videoId: "tlYmdce76Y0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "Raze 선생님과 대화하며 스피킹이 자연스럽게 늘었어요", desc: "자연스러운 스피킹 연습", img: "https://img.youtube.com/vi/aYYdL6Ng5I0/maxresdefault.jpg", videoId: "aYYdL6Ng5I0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "낯가림 심한 우리 아이, 웃게 만든 Mica 선생님", desc: "낯가림 극복 영어 수업", img: "https://img.youtube.com/vi/7GUf_akwZig/maxresdefault.jpg", videoId: "7GUf_akwZig", ratio: "aspect-[9/16]", category: "junior" },
    { title: "“영어가 재밌대요!” 아이가 먼저 말한 화상영어의 힘", desc: "국제학교 아이도 만족", img: "https://img.youtube.com/vi/UQ39TuqbPH0/maxresdefault.jpg", videoId: "UQ39TuqbPH0", ratio: "aspect-[9/16]", category: "junior" },
    { title: "단어만 말하던 아이, 드디어 문장을 말하다!", desc: "문장 발화 성공 후기", img: "https://img.youtube.com/vi/CJm8DRzOQBY/maxresdefault.jpg", videoId: "CJm8DRzOQBY", ratio: "aspect-[9/16]", category: "junior" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const base = import.meta.env.BASE_URL;
  const siteUrl = 'https://einenglish.com';

  const books = [
    { title: "일반 회화 교재", tag: "BEST", desc: "실제 원어민이 쓰는 표현으로, 교과서에 없는 살아 있는 영어를 배웁니다.", img: `${base}images/materials/regular-class.png` },
    { title: "비즈니스 교재", tag: "HOT", desc: "회의·메일·보고 등 상황별 예문으로 실무에서 바로 쓰는 표현을 익힙니다.", img: `${base}images/materials/business.png` },
    { title: "파닉스 교재", tag: "NEW", desc: "알파벳과 발음 규칙부터 시작해, 읽기·쓰기의 기초를 탄탄하게 잡아 줍니다.", img: `${base}images/materials/phonics.png` },
    { title: "어린이 원서 교재", tag: null, desc: "미국·캐나다 초등교과용 영어 학습 프로그램, 3천 권 이상의 원서를 제공합니다.", img: `${base}images/materials/razkids-english-original-book.png` },
    { title: "상황 & 사진 묘사", tag: null, desc: "사진을 보고 설명하며 이야기 만들기, 상황별 질문을 통해 영어를 배웁니다.", img: `${base}images/materials/description-of-situation-and-photo.png` },
    { title: "비디오 교재", tag: null, desc: "TED 비디오를 활용하여 어휘, 듣기, 깊이 있는 말하기 능력을 키워줍니다.", img: `${base}images/materials/video.png` },
    { title: "패턴 교재", tag: null, desc: "실생활 예문과 패턴을 반복 연습하며 자연스러운 대화 능력을 키워줍니다.", img: `${base}images/materials/english-pattern.png` },
    { title: "주니어 회화", tag: null, desc: "어린이를 위한 전용 화상 수업 교재로, 실생활 주제로 재미있게 학습합니다.", img: `${base}images/materials/junior-english.png` },
    { title: "이디엄 학습", tag: null, desc: "일상생활에서 자주 쓰이는 속담과 관용구를 재미있는 이야기와 함께 배웁니다.", img: `${base}images/materials/idioms-me-and-you.png` }
  ];

  const allReviews = [
    { type: 'image', label: '수업 현장', img: `${base}images/real-success-stories/class1.png` },
    { type: 'text', author: '이*현 (30대 직장인)', title: "회의에서 3문장도 못 하던 제가, 3개월 후 발표까지 맡게 됐어요", content: '영어 울렁증이 심해서 회의 때마다 식은땀을 흘렸는데, 아인에서 비즈니스 과정을 들은 지 3개월 만에 제가 먼저 의견을 제시하게 됐습니다. 실전 위주라 바로 업무에 쓸 수 있는 게 가장 좋았어요.' },
    { type: 'image', label: '꼼꼼한 피드백', img: `${base}images/real-success-stories/feedback1.jpg` },
    { type: 'text', author: '박*은 (40대 주부)', title: "알파벳만 알던 상태에서 8주 만에 가족 여행 통역까지", content: '애들 다 키우고 늦은 나이에 시작했는데 선생님이 너무 친절하세요. 가족 여행 갔을 때 혼자서 호텔 체크인하고 주문하는 거 보고 가족들이 다 놀랐습니다. 정말 뿌듯해요!' },
    { type: 'image', label: '성장 리포트', img: `${base}images/real-success-stories/report.png` },
    { type: 'text', author: '김*현 (초등학생)', title: "단어만 말하던 아이, 3개월 만에 문장으로 대화해요", content: '애니메이션으로 배우니까 학원보다 훨씬 재밌어요! 선생님이랑 수다 떠는 시간이 매일 기다려집니다.' },
    { type: 'image', label: '수업 화면', img: `${base}images/real-success-stories/class2.jpeg` },
    { type: 'text', author: '정*아 (중학생)', title: "스피킹 50점대 → 3개월 만에 만점", content: '문법만 할 때는 몰랐는데, 직접 입으로 뱉어보니 영어 실력이 부쩍 늘어난 게 느껴져요.' },
    { type: 'image', label: '1:1 밀착 관리', img: `${base}images/real-success-stories/feedback2.png` },
    { type: 'text', author: '최*민 (취준생)', title: "오픽 AL 2번 떨어졌는데, 8주 만에 IH 달성!", content: '스크립트 무조건 외우라고 하는 학원 다니다가 포기했었는데, 아인 선생님이랑 프리토킹하면서 자연스러운 표현 익히니까 금방 늘더라고요. 감사합니다!' },
    { type: 'text', author: '강*우 (40대 사업가)', title: "출근 전 20분×3개월, 해외 클라이언트 미팅 혼자 진행", content: '일이 바빠서 학원 다닐 시간이 없었는데, 출근 전 20분씩 꾸준히 하니까 확실히 감이 안 떨어지네요. 시간 변경도 유연해서 좋습니다.' },
    { type: 'text', author: '윤*지 (대학생)', title: "에세이 첨삭 2주 만에 원어민스러운 표현 습득", content: '제가 쓴 에세이를 실시간으로 고쳐주시는데, 문법 오류뿐만 아니라 더 원어민스러운 표현으로 바꿔주시는 게 진짜 도움 많이 됩니다.' }
  ];

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-b from-slate-50 via-white to-slate-50/80 font-sans text-slate-900 overflow-x-hidden relative flex flex-col">
      {/* 상단 배너: 전체 너비 확장 */}
      <div
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white py-3.5 px-4 text-center text-xs md:text-sm font-bold tracking-wide flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 cursor-pointer hover:from-slate-800 hover:to-slate-900 transition-all duration-300 relative z-30 shadow-lg"
        onClick={scrollToHero}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] pointer-events-none" />
        <span className="relative z-10 text-center whitespace-normal leading-relaxed md:leading-normal">
          2026! ✨ 아인이 <span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 decoration-2 break-keep">무제한 매칭·첨삭·복습</span> 지원합니다.
        </span>
      </div>

      {/* 모바일 하단 고정 CTA (꽉 찬 너비로 카카오 버튼과 물리적 분리) */}
      <div className={`fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[92%] sm:max-w-[400px] z-[100] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${isVisible ? 'translate-y-0 opacity-100 sm:scale-100' : 'translate-y-20 opacity-0 sm:scale-95'} pb-[env(safe-area-inset-bottom)]`}>
        <button
          onClick={() => window.location.href = 'https://einenglish.com/apply'}
          className="group relative w-full h-[70px] sm:h-[68px] touch-target bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white overflow-hidden rounded-none sm:rounded-2xl font-black shadow-[0_-5px_20px_-10px_rgba(249,115,22,0.6)] sm:shadow-[0_15px_35px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_20px_45px_-10px_rgba(249,115,22,0.8)] sm:hover:scale-[1.02] active:scale-95 transition-all duration-300 sm:border border-orange-400/50 backdrop-blur-sm flex items-center justify-center gap-2.5"
        >
          {/* 입체감 보강 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 pointer-events-none" />
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

          <div className="flex flex-col items-center relative z-10">
            <span className="text-amber-200 text-[11px] xs:text-xs font-black tracking-wide -mb-0.5 drop-shadow-md animate-pulse">
              🔥 선착순 마감 이벤트
            </span>
            <div className="flex items-center gap-2 drop-shadow-lg mt-0.5">
              <span className="text-lg xs:text-xl tracking-tight">무료체험 신청하기</span>
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300 text-white" strokeWidth={3} />
            </div>
          </div>
        </button>
      </div>

      <nav className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200 px-4 md:px-6 py-3 flex justify-center items-center transition-all">
        <div className="max-w-[1200px] w-full flex justify-between items-center gap-3">
          {/* Logo - 사진 스타일: 원형 로고 + 브랜드명 */}
          <div className="flex items-center min-w-0 flex-shrink-0 cursor-pointer gap-2" onClick={scrollToHero}>
            <div className="w-9 h-9 rounded-full bg-[#e8826a] flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src={`${base}eine-english-logo.png`} alt="아인잉글리쉬 로고" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-[#c46a52] font-black text-base md:text-lg tracking-tight hidden sm:inline">아인잉글리쉬</span>
          </div>

          {/* Desktop Menu - 사진 스타일 */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center min-w-0 shrink">
            {/* 무료체험신청 + 말풍선 배지 */}
            <div className="relative shrink-0 flex items-center">
              <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 bg-[#e8826a] text-white text-[11px] font-black px-2 py-0.5 rounded-md whitespace-nowrap shadow-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[4px] after:border-transparent after:border-t-[#e8826a] z-[60] animate-bounce-subtle pointer-events-none">
                3,000원 할인
              </div>
              <button onClick={() => window.location.href = `${siteUrl}/apply`} className="text-slate-800 hover:text-[#e8826a] transition-colors text-sm font-bold shrink-0 relative z-10">
                무료체험신청
              </button>
            </div>

            <div className="relative group shrink-0">
              <button className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap flex items-center gap-0.5 text-slate-800">
                아인잉글리쉬 <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                <div className="w-44 bg-white border border-slate-100 shadow-xl rounded-xl py-2">
                  <a href={`${siteUrl}/about`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">왜 아인 화상영어일까?</a>
                  <a href={`${siteUrl}/about/intro`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">아인잉글리쉬 소개</a>
                  <a href={`${siteUrl}/about/manual`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">수강 매뉴얼</a>
                </div>
              </div>
            </div>

            <div className="relative group shrink-0">
              <button className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap flex items-center gap-0.5 text-slate-800">
                교육과정 <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                <div className="w-44 bg-white border border-slate-100 shadow-xl rounded-xl py-2">
                  <a href={`${siteUrl}/process/curriculum-map`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">커리큘럼 맵</a>
                  <a href={`${siteUrl}/process?tab=junior`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">주니어회화</a>
                  <a href={`${siteUrl}/process?tab=basic`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">일반회화</a>
                  <a href={`${siteUrl}/process?tab=free`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">프리토킹</a>
                  <a href={`${siteUrl}/process?tab=special`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">특별과정</a>
                  <a href={`${siteUrl}/process?tab=intro`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">교재소개</a>
                </div>
              </div>
            </div>

            <div className="relative group shrink-0">
              <button className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap flex items-center gap-0.5 text-slate-800">
                수강신청하기 <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                <div className="w-44 bg-white border border-slate-100 shadow-xl rounded-xl py-2">
                  <a href={`${siteUrl}/study`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">강사 찾기</a>
                  <a href={`${siteUrl}/study/search`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">스마트 매칭</a>
                  <a href={`${siteUrl}/study/tuition`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">수강료 조회</a>
                </div>
              </div>
            </div>

            <div className="relative group shrink-0">
              <button className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap flex items-center gap-0.5 text-slate-800">
                성공수강후기 <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                <div className="w-44 bg-white border border-slate-100 shadow-xl rounded-xl py-2">
                  <a href={`${siteUrl}/review`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">성공수강후기</a>
                  <a href={`${siteUrl}/cscenter/blog?tab=7`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">유튜버수강후기</a>
                  <a href={`${siteUrl}/cscenter/blog?tab=8`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">어린이영상후기</a>
                </div>
              </div>
            </div>

            <div className="relative group shrink-0">
              <button className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap flex items-center gap-0.5 text-slate-800">
                고객센터 <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                <div className="w-44 bg-white border border-slate-100 shadow-xl rounded-xl py-2">
                  <a href={`${siteUrl}/cscenter`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">공지&이벤트</a>
                  <a href={`${siteUrl}/cscenter/faq`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">자주 묻는 질문(FAQ)</a>
                  <a href={`${siteUrl}/cscenter/blog?tab=1`} className="block px-4 py-2.5 text-xs xs:text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-[#e8826a]">블로그</a>
                </div>
              </div>
            </div>

            <div className="relative shrink-0">
              <a href={`${siteUrl}/cscenter`} className="hover:text-[#e8826a] px-1.5 py-3 transition-colors text-sm font-bold whitespace-nowrap block text-slate-800">이벤트</a>
              <span className="absolute top-0 right-[-6px] w-3.5 h-3.5 bg-[#e8826a] text-white text-[10px] font-bold flex items-center justify-center rounded-full leading-none">N</span>
            </div>

            {/* 우측: 로그아웃, 소셜, 마이페이지 */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
              <a href={`${siteUrl}/member/login`} className="text-slate-600 hover:text-[#e8826a] text-xs font-medium transition-colors">로그아웃</a>
              <div className="flex items-center gap-1.5">
                <a href="https://www.youtube.com/channel/UChnQmwavrX_nGvXgG8j8ErQ" className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-all"><Youtube size={14} /></a>
                <a href="https://www.facebook.com/einenglish" className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-all"><Facebook size={14} /></a>
                <a href="https://www.instagram.com/einenglish" className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-all"><Instagram size={14} /></a>
                <a href="https://blog.naver.com/einenglish" className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-all"><BookOpen size={14} /></a>
              </div>
              <a href={`${siteUrl}/member/mypage`} className="flex flex-col items-center gap-0.5 text-slate-800 hover:text-[#e8826a] transition-colors group">
                <User size={20} className="text-slate-600 group-hover:text-[#e8826a]" strokeWidth={2} />
                <span className="text-xs font-bold">마이페이지</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle - 터치 영역 44px 이상 확보 */}
          <button className="lg:hidden p-3 -m-1 text-slate-600 shrink-0 touch-manipulation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#e8f4f0] lg:hidden animate-fade-in overflow-y-auto">
          {/* 소셜 아이콘 + 닫기 */}
          <div className="flex justify-between items-center px-5 pt-4 pb-2">
            <div className="flex gap-3">
              <a href="https://www.youtube.com/channel/UChnQmwavrX_nGvXgG8j8ErQ" className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500"><Youtube size={16} /></a>
              <a href="https://www.facebook.com/einenglish" className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/einenglish" className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500"><Instagram size={16} /></a>
              <a href="https://blog.naver.com/einenglish" className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500"><BookOpen size={16} /></a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-600">
              <X size={28} />
            </button>
          </div>

          {/* 로그인 배너 */}
          <div className="mx-4 mt-2 bg-[#e8826a] rounded-xl px-5 py-5 text-white">
            <p className="text-lg font-black mb-1">안녕하세요, 로그인 해주세요.</p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-90 flex items-center gap-2">
                <a href={`${siteUrl}/member/register`} className="hover:underline">회원가입</a>
                <span>|</span>
                <a href={`${siteUrl}/member/find`} className="hover:underline">아이디/비밀번호 찾기</a>
              </div>
              <a href={`${siteUrl}/member/login`} className="bg-white text-[#e8826a] px-5 py-1.5 rounded-full text-sm font-bold">로그인</a>
            </div>
          </div>

          {/* 메뉴 목록 */}
          <div className="mt-4 mx-4 bg-white rounded-xl overflow-hidden shadow-sm">
            <a href={`${siteUrl}/apply`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-5 py-4 border-b border-slate-100 text-lg font-black text-slate-800">
              무료체험신청
              <span className="w-2 h-2 bg-red-500 rounded-full ml-1.5 -mt-2"></span>
            </a>
            {[
              {
                key: 'about', label: '아인잉글리쉬', subs: [
                  { label: '왜 아인 화상영어일까?', href: `${siteUrl}/about` },
                  { label: '아인잉글리쉬 소개', href: `${siteUrl}/about/intro` },
                  { label: '수강 매뉴얼', href: `${siteUrl}/about/manual` },
                ]
              },
              {
                key: 'curriculum', label: '교육과정', subs: [
                  { label: '커리큘럼 맵', href: `${siteUrl}/process/curriculum-map` },
                  { label: '주니어회화', href: `${siteUrl}/process?tab=junior` },
                  { label: '일반회화', href: `${siteUrl}/process?tab=basic` },
                  { label: '프리토킹', href: `${siteUrl}/process?tab=free` },
                  { label: '특별과정', href: `${siteUrl}/process?tab=special` },
                  { label: '교재소개', href: `${siteUrl}/process?tab=intro` },
                ]
              },
              {
                key: 'enroll', label: '수강신청하기', subs: [
                  { label: '강사 찾기', href: `${siteUrl}/study` },
                  { label: '스마트 매칭', href: `${siteUrl}/study/search` },
                  { label: '수강료 조회', href: `${siteUrl}/study/tuition` },
                ]
              },
              {
                key: 'reviews', label: '성공수강후기', subs: [
                  { label: '성공수강후기', href: `${siteUrl}/review` },
                  { label: '유튜버수강후기', href: `${siteUrl}/cscenter/blog?tab=7` },
                  { label: '어린이영상후기', href: `${siteUrl}/cscenter/blog?tab=8` },
                ]
              },
              {
                key: 'support', label: '고객센터', subs: [
                  { label: '공지&이벤트', href: `${siteUrl}/cscenter` },
                  { label: '자주 묻는 질문(FAQ)', href: `${siteUrl}/cscenter/faq` },
                  { label: '블로그', href: `${siteUrl}/cscenter/blog?tab=1` },
                ]
              },
            ].map((menu) => (
              <div key={menu.key} className="border-b border-slate-100">
                <button onClick={() => setOpenMobileSubmenu(openMobileSubmenu === menu.key ? null : menu.key)} className="flex items-center justify-between w-full px-5 py-4 text-lg font-black text-slate-800 text-left">
                  {menu.label}
                  <ChevronDown size={20} className={`text-slate-400 transition-transform duration-200 ${openMobileSubmenu === menu.key ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSubmenu === menu.key && (
                  <div className="pb-2">
                    {menu.subs.map((sub, j) => (
                      <a key={j} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-8 py-3 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`${siteUrl}/cscenter`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-5 py-4 text-lg font-black text-slate-800">
              이벤트
            </a>
          </div>

          {/* 하단 여백 확보 */}
          <div className="mt-6 pb-8"></div>
        </div>
      )}

      <header className="relative pt-6 pb-8 xs:pt-8 xs:pb-12 md:pt-20 md:pb-32 px-4 md:px-6 text-center border-b border-slate-200/80 overflow-hidden flex justify-center">
        {/* 배경: 이미지 + 그라데이션 */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/92 to-slate-100/95 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_80%,rgba(249,115,22,0.05),transparent_50%)] z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] z-0" />
        <div className="max-w-[1200px] w-full relative z-10">
          {/* 5. 시각·카피·CTA 3영역: 시선 고정 → 결핍 자극 → 행동 유도 */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xs:gap-10 md:gap-12 mb-8 xs:mb-10">
            {/* 1. 시각 영역: 화상영어 UI 합성 (좌측/모바일 상단) - Shorts 9:16 세로 비율 */}
            <div className="w-full lg:w-[35%] order-1 lg:order-1 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/80 bg-slate-900 flex flex-col w-full max-w-[320px] ring-4 ring-orange-500/10">
                {/* 화상 회의 UI 프레임 - Zoom/Skype 스타일 */}
                <div className="h-10 shrink-0 bg-slate-800/95 flex items-center justify-between px-4 border-b border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-white text-xs font-bold">1:1 화상 수업</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-green-600/80 flex items-center justify-center">
                      <Mic size={12} className="text-white" fill="currentColor" />
                    </span>
                    <span className="w-6 h-6 rounded bg-slate-600 flex items-center justify-center">
                      <Video size={12} className="text-white" />
                    </span>
                  </div>
                </div>
                {/* 영상 영역 - Shorts 9:16 세로 비율 */}
                <div className="relative aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/f5bjXclR5ek?autoplay=1&mute=1&loop=1&playlist=f5bjXclR5ek&controls=0&showinfo=0&rel=0"
                    title="화상영어 수업"
                    className="absolute inset-0 w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* 웹캠 프레임 오버레이 - 화상 수업 느낌 */}
                  <div className="absolute bottom-3 right-3 w-16 h-12 md:w-20 md:h-14 rounded-lg border-2 border-white/60 bg-slate-800/80 flex items-center justify-center z-10 shadow-lg">
                    <Video size={16} className="text-white/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 카피 영역: 결핍 자극 + 솔루션 (우측/모바일 영상 하단) */}
            <div className="w-full lg:w-[65%] order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest rounded-full mb-4 xs:mb-6">1:1 화상영어</span>
              <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 xs:mb-6 leading-[1.25] tracking-tight text-slate-900 drop-shadow-sm">
                숏폼 보며 끄덕이던 그 표현,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">외국인 앞에서도 바로 나올까요?</span>
              </h1>
              <p className="text-sm xs:text-base md:text-lg lg:text-xl text-slate-600 font-bold leading-relaxed mb-6 xs:mb-8 max-w-xl mx-auto lg:mx-0">
                눈으로만 보는 영어는 이제 그만.<br />
                <span className="text-slate-700">실제 원어민이 쓰는 표현</span>을 검증된 튜터와 1:1로 직접 입 밖으로 꺼내서 완벽하게 내 것으로 만드세요.
              </p>

              {/* 3. 버튼 영역: 망설임 제거 */}
              <div className="flex flex-col items-center lg:items-start">
                <button
                  onClick={() => window.location.href = 'https://einenglish.com/apply'}
                  className="w-full max-w-md bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 xs:py-5 md:py-6 text-lg xs:text-xl font-black rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_16px_50px_-10px_rgba(249,115,22,0.7)] hover:scale-[1.02] active:scale-95 transition-all border-2 border-orange-400/50"
                >
                  무료체험신청하기 <ArrowRight size={22} strokeWidth={3} />
                </button>
                <p className="mt-3 w-full max-w-md text-slate-500 text-xs xs:text-sm font-bold text-center lg:text-left">
                  *오늘 신청 시 첫 수업 무료 · 왕초보도 부담 없는 15분 테스트
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-100 rounded-2xl py-4 px-5 md:py-5 md:px-8 mb-6 md:mb-8 shadow-lg inline-block w-full max-w-2xl">
            <p className="text-slate-800 text-sm md:text-base font-black flex flex-col items-center justify-center gap-2 md:gap-2.5 leading-tight text-center">
              <span className="flex items-center gap-2 text-orange-600"><Gift size={20} className="shrink-0" /> 15분 무료체험 + 강점 리포트</span>
              <span className="text-slate-600 text-[11px] xs:text-xs md:text-sm font-medium flex flex-wrap justify-center items-center gap-1.5 xs:gap-2">
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-emerald-500 shrink-0" /> 결제 정보 없이 100% 무료</span>
                <span className="text-slate-300 hidden xs:inline">|</span>
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-emerald-500 shrink-0" /> 신용카드 입력 없음</span>
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Trust Bar: 히어로 바로 아래 배치 */}
      <TrustBar />

      {/* 2. 페인포인트 섹션: 공감 문구 + 해결 흐름 */}
      <section className="py-8 xs:py-12 md:py-16 px-4 md:px-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-100 flex justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.04),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(248,250,252,0.8),transparent_50%)] pointer-events-none" />
        <div className="max-w-[760px] w-full relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs xs:text-sm font-black uppercase tracking-[0.2em] rounded-full mb-4">이런 고민 있으시죠?</span>
            <h2 className="text-base xs:text-lg md:text-xl font-black text-slate-800 mb-2 leading-snug">공감되는 순간, 해결이 시작됩니다</h2>
            <p className="text-slate-600 text-sm xs:text-base font-bold leading-relaxed">나만 그런 게 아니에요. 많은 분들이 같은 고민을 갖고 시작하셨어요.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { emoji: "💭", tag: "머리가 하얘지는", q: "외국인 앞에만 서면 아는 단어도 안 떠오르고, 말문이 꽉 막히시나요?", img: `${base}images/painpoint/1-mind-blank.png` },
              { emoji: "🔄", tag: "뻔한 반복에 지친", q: "매번 같은 교재, 'How are you?' 수준의 대화만 반복하고 계시진 않나요?", img: `${base}images/painpoint/2-repetitive.png` },
              { emoji: "😰", tag: "회의만 오면", q: "회의 때마다 식은땀, 손떨림… 발표 순서만 와도 심장이 쿵쾅거리시나요?", img: `${base}images/painpoint/3-meeting.png` },
              { emoji: "😣", tag: "영어 울렁증", q: "알아듣는데 말이 안 나오고, 말하려다가 또 막히시나요?", img: `${base}images/painpoint/4-english-anxiety.png` }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col bg-white/95 backdrop-blur-sm border-2 border-slate-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={item.img} alt={item.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-xl md:text-2xl shrink-0">{item.emoji}</span>
                    <span className="text-sm font-black text-slate-600 uppercase tracking-wider bg-white/90 px-3 py-1.5 rounded-full">{item.tag}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed break-keep mb-3">{item.q}</p>
                  <p className="text-blue-600 text-sm font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity mt-auto">맞다면 ↓ 해결책을 확인하세요</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-10 text-center overflow-hidden shadow-xl shadow-blue-200/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <CheckCircle size={18} className="text-white" />
                <span className="text-white text-sm font-black">해결책</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">아인잉글리쉬가 해결해 드립니다</h3>
              <p className="text-blue-100 font-bold leading-relaxed mb-6 text-base md:text-lg">
                1:1 맞춤형 실시간 문장 교정으로, <span className="text-white">틀린 순간 바로 고쳐주는</span> 집중 케어.<br />
                뻔한 교재 대신 <span className="text-white">당신의 목표와 상황에 딱 맞는</span> 커리큘럼으로, 말문이 트입니다.
              </p>
              <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-black text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                무료체험 신청하기 <ArrowRight size={20} strokeWidth={3} className="inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="py-10 xs:py-14 md:py-20 bg-black text-white text-center relative overflow-hidden flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
          alt="Office Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(234,179,8,0.06),transparent)] pointer-events-none" />
        <div className="max-w-[1200px] w-full px-4 md:px-6 relative z-10">
          <h3 className="text-base font-extrabold text-amber-500/90 mb-6 xs:mb-8 md:mb-12 uppercase tracking-[0.3em] xs:tracking-[0.4em] text-center">Awards & History</h3>
          <p className="text-amber-400/70 text-xs sm:text-sm font-bold mb-4 md:hidden text-center">← 스와이프해서 더 보기</p>

          <div className="flex overflow-x-auto gap-4 md:gap-5 pb-4 snap-x scrollbar-hide justify-start md:justify-center">
            {[
              { year: "2025", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2024", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2024", name: "한국소비자만족 1위", img: "ksci_2024.png", desc: "교육부문 대상" },
              { year: "2023", name: "랭키닷컴 1위", img: "rankey.png", desc: "영어교육 분야" },
              { year: "2023", name: "한국소비자만족 1위", img: "ksci_2023.png", desc: "고객만족 브랜드" },
              { year: "2022", name: "한국소비자베스트", img: "best_2022.png", desc: "브랜드 대상" },
              { year: "2021", name: "대한민국 브랜드", img: "kbba.png", desc: "어학 부문" },
              { year: "2020", name: "원격평생교육원", img: "edu.png", desc: "서울시 인증" }
            ].map((award, idx) => (
              <div key={idx} className="flex-shrink-0 w-[140px] md:w-auto flex flex-col items-center group cursor-default snap-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-3 relative">
                  <img
                    src={`${base}images/awards/${award.img}`}
                    alt={award.name}
                    className="w-full h-full object-contain relative z-10"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-2xl bg-white/10 items-center justify-center border border-white/10">
                    <Medal className="text-white/20" size={24} />
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-400/80 mb-0.5 tracking-widest">{award.year}</div>
                <div className="text-xs md:text-sm font-black tracking-tight mb-0.5 text-white">{award.name}</div>
                <div className="text-xs text-slate-400 font-bold">{award.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-8 xs:py-10 md:py-16 px-4 md:px-6 bg-white border-b border-slate-200/80 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="max-w-[760px] mx-auto">
            <div className="text-center mb-6 xs:mb-8 md:mb-16">
              <p className="text-xs xs:text-sm font-bold text-blue-600 uppercase tracking-[0.25em] mb-3">Review</p>
              <h3 className="text-base xs:text-lg md:text-xl lg:text-2xl font-black text-slate-500 italic leading-snug">"이미 수많은 수강생이 증명했습니다"</h3>
            </div>

            <p className="text-xs xs:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">텍스트 후기</p>
            <div className="flex overflow-x-auto snap-x md:grid md:grid-cols-2 gap-4 md:gap-5 pb-4 px-4 -mx-4 md:mx-0 md:px-0 scrollbar-hide">
              {[
                { text: "영어 울렁증이 심해서 회의 때마다 식은땀을 흘렸는데, 아인에서 교정받은 지 3개월 만에 제가 먼저 의견을 제시하게 됐습니다.", author: "이*현 (30대 직장인)" },
                { text: "가족 여행 갔을 때 혼자서 호텔 체크인하고 주문하는 거 보고 가족들이 다 놀랐습니다. 정말 뿌듯해요!", author: "박*은 (40대 주부)" },
                { text: "스크립트 무조건 외우라고 하는 학원 다니다가 포기했었는데, 아인 선생님이랑 프리토킹하면서 자연스러운 표현 익히니까 금방 늘더라고요. 감사합니다!", author: "최*민 (취준생)" },
                { text: "애니메이션으로 배우니까 학원보다 훨씬 재밌어요! 선생님이랑 수다 떠는 시간이 매일 기다려집니다.", author: "김*현 (초등학생)" }
              ].map((review, i) => (
                <div key={i} className="flex-none w-[85vw] md:w-auto snap-center bg-white p-6 xs:p-8 md:p-10 rounded-2xl xs:rounded-[2rem] md:rounded-[2.5rem] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.12)] hover:border-blue-100/80 transition-all duration-300 group">
                  <div>
                    <div className="text-yellow-400 flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={14} className="xs:w-[18px] xs:h-[18px]" />)}
                    </div>
                    <p className="text-base xs:text-lg md:text-xl font-bold text-slate-700 mb-6 xs:mb-8 leading-relaxed break-keep">
                      "{review.text.includes('아인에서 교정받은지 3개월 만에')
                        ? review.text.split('아인에서 교정받은지 3개월 만에').map((part, idx, arr) => (
                          <React.Fragment key={idx}>
                            {part}
                            {idx === 0 && arr.length > 1 && <span className="bg-yellow-100/80 px-1 rounded mx-1">아인에서 교정받은지 3개월 만에</span>}
                          </React.Fragment>
                        ))
                        : review.text.split('아인에서').map((part, idx, arr) => (
                          <React.Fragment key={idx}>
                            {part}
                            {idx === 0 && arr.length > 1 && <span className="bg-yellow-100/80 px-1 rounded mx-1">아인에서</span>}
                          </React.Fragment>
                        ))
                      }"
                    </p>
                  </div>
                  <div className="font-bold text-slate-500 text-sm md:text-base border-t border-slate-50 pt-4 xs:pt-6 flex justify-between items-center">
                    <span>{review.author}</span>
                    <MessageCircle size={20} className="text-slate-200 group-hover:text-blue-100 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-600 hover:text-slate-900 font-bold text-sm flex items-center gap-2 transition-colors">
                리얼 수강후기 더 보기 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="video-reviews" className="py-8 xs:py-10 md:py-16 px-4 md:px-6 bg-white border-b border-slate-100 flex justify-center">
        <div className="max-w-[1200px] w-full">

          <div className="pt-8 xs:pt-10 md:pt-12">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">영상 후기</p>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-6 xs:mb-8 md:mb-10 text-center uppercase tracking-tight leading-snug">Real Video Reviews <span className="text-red-500 text-xs xs:text-sm align-top animate-pulse">● REC</span></h3>

            {/* Adult Reviews Row */}
            <div className="mb-10 xs:mb-12">
              <div className="flex items-center justify-between mb-4 xs:mb-6 px-4">
                <div className="flex items-center gap-3">
                  <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Adult</span>
                  <h4 className="text-lg font-black text-slate-700">성인/직장인 베스트<br className="md:hidden" /> 영상 후기</h4>
                </div>
                <button onClick={() => { setSelectedCategory('adult'); setShowAllReviewsModal(true); }} className="text-sm font-bold text-slate-400 hover:text-slate-900 flex items-center gap-1 transition-colors p-2 -m-2">
                  전체보기 <ArrowRight size={14} />
                </button>
              </div>
              <div className="flex overflow-x-auto gap-4 md:gap-5 pb-4 xs:pb-6 snap-x px-6 -mx-6 scrollbar-hide">
                {videoReviews
                  .filter(video => video.category === 'adult')
                  .map((video, i) => (
                    <div key={i} className={`flex-none h-32 xs:h-40 md:h-48 group relative ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-xl overflow-hidden cursor-pointer shadow-sm md:shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-center`} onClick={() => setSelectedVideo(video)}>
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all border border-white/30">
                          <Play size={18} className="text-white ml-0.5 md:w-6 md:h-6" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h4 className="text-white font-bold text-xs leading-tight mb-0.5 line-clamp-2 drop-shadow-md">{video.title}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Junior Reviews Row */}
            <div className="mb-8 xs:mb-10">
              <div className="flex items-center justify-between mb-4 xs:mb-6 px-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Junior</span>
                  <h4 className="text-lg font-black text-slate-700">주니어/학생 베스트<br className="md:hidden" /> 영상 후기</h4>
                </div>
                <button onClick={() => { setSelectedCategory('junior'); setShowAllReviewsModal(true); }} className="text-sm font-bold text-slate-400 hover:text-slate-900 flex items-center gap-1 transition-colors p-2 -m-2">
                  전체보기 <ArrowRight size={14} />
                </button>
              </div>
              <div className="flex overflow-x-auto gap-4 md:gap-5 pb-4 xs:pb-6 snap-x px-6 -mx-6 scrollbar-hide">
                {videoReviews
                  .filter(video => video.category === 'junior')
                  .map((video, i) => (
                    <div key={i} className={`flex-none h-56 min-h-[220px] xs:h-64 md:h-72 group relative ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'} bg-black rounded-xl overflow-hidden cursor-pointer shadow-sm md:shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-center`} onClick={() => setSelectedVideo(video)}>
                      <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center pb-8 border-none pointer-events-none">
                        <div className="w-10 h-10 md:w-16 md:h-16 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all border border-white/30 shadow-lg pointer-events-auto">
                          <Play size={18} className="text-white md:w-7 md:h-7 ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none">
                        <h4 className="text-white font-black text-sm md:text-base leading-tight mb-1 line-clamp-2 drop-shadow-md">{video.title}</h4>
                        <p className="text-slate-300 text-[11px] md:text-xs font-bold line-clamp-1">{video.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>


          </div>


        </div>
      </section>

      {/* Free Level Test CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1200px] w-full relative z-10 flex justify-center">
          <div className="max-w-[760px]">
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight drop-shadow-md">
              "저도 이렇게 영어가 늘 수 있을까요?"
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-10 font-medium leading-relaxed">
              망설이지 마세요. 아인잉글리쉬와 함께라면 가능합니다.<br className="hidden md:block" />
              지금 바로 무료 레벨테스트로 내 실력을 확인해보세요.
            </p>
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
              무료체험신청하기 <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section id="unlimited" className="py-10 xs:py-12 md:py-16 px-4 md:px-6 bg-slate-900 text-white overflow-hidden relative flex justify-center">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-xs font-bold text-amber-200 tracking-widest uppercase">Premium Service</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
            영어 실력?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 italic px-2">무제한(Unlimited)</span>으로<br />
            수직상승 시켜드립니다.
          </h2>
          <p className="text-sm xs:text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-20 font-medium leading-relaxed">아인만의 ‘무제한 맞춤 솔루션’으로<br className="md:hidden" /> 망설임 없이 시작하세요.</p>
          {/* Unified "무제한 3종 세트" Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-600/50 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group hover:border-slate-500/60 transition-all shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-xs font-black px-4 py-1.5 rounded-full mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Zap size={14} fill="currentColor" />
                <span>무제한 3종 패키지</span>
              </div>

              {/* Main Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
                매칭 · 첨삭 · 복습<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400">모두 무제한</span>으로 제공
              </h3>

              {/* Feature List */}
              <div className="space-y-5 relative z-10">
                {[
                  { icon: <RotateCcw size={20} className="text-blue-400" />, title: "무제한 매칭", desc: "강사 교체 횟수 제한 없음" },
                  { icon: <PenTool size={20} className="text-green-400" />, title: "무제한 첨삭", desc: "영어 일기·에세이 무한 첨삭" },
                  { icon: <History size={20} className="text-purple-400" />, title: "무제한 복습", desc: "모든 수업 녹화본 평생 소장" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-700/80 rounded-xl flex items-center justify-center border border-slate-600/50 group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-black text-base md:text-lg mb-1">{item.title}</div>
                      <div className="text-slate-300 text-sm font-medium">{item.desc}</div>
                    </div>
                    <div className="flex-shrink-0 text-green-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <Check size={20} strokeWidth={3} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-600/50">
                <p className="text-slate-200 text-sm font-bold text-center">
                  💎 추가 비용 없이 <span className="text-green-400">모든 혜택</span>을 누리세요
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-[2px] inline-block w-full max-w-2xl hover:scale-[1.02] transition-transform cursor-pointer shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] group">
            <div className="bg-[#0f172a] rounded-[1.4rem] py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 h-full relative overflow-hidden" onClick={() => window.location.href = 'https://einenglish.com/apply'}>
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-lg font-bold text-slate-300 relative z-10">지금 신청하면 <span className="text-white underline decoration-red-500 decoration-2 underline-offset-4">체험비 0원</span></div>
              <div className="flex items-center gap-3 text-2xl md:text-3xl font-black italic relative z-10">
                무제한 혜택 받기 <ArrowRight strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-400 text-sm font-bold tracking-wide">※ 체험 후기 작성 시 3,000원 적립금 100% 추가 증정</p>
        </div>
      </section>

      <section id="safe-zone" className="py-10 xs:py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-blue-50/80 to-slate-50/50 flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-center">
          <div className="max-w-4xl w-full border-4 xs:border-[6px] md:border-[8px] border-slate-900 rounded-[2rem] xs:rounded-[2.5rem] md:rounded-[3rem] p-6 xs:p-8 md:p-16 bg-white relative overflow-hidden shadow-[0_24px_60px_-16px_rgba(15,23,42,0.2)]">
            <div className="absolute top-0 right-0 p-10 opacity-[0.04] pointer-events-none"><HeartHandshake size={300} /></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 leading-tight uppercase italic tracking-tighter text-slate-900">
                <ShieldCheck className="text-blue-600 drop-shadow-md" size={60} /> 손해 볼 것 전혀 없습니다
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-center md:text-left mb-16">
                <div className="space-y-6">
                  <h4 className="text-blue-600 font-black text-2xl border-b-2 border-blue-100 pb-3 mb-6 uppercase tracking-tighter italic">100% Free</h4>
                  <div className="flex items-center justify-center md:justify-start gap-4 font-bold text-lg text-slate-700 bg-blue-50/50 p-3 rounded-xl"><CheckCircle className="text-blue-600 shrink-0" size={24} fill="white" /> 15분 1:1 체험</div>
                  <div className="flex items-center justify-center md:justify-start gap-4 font-bold text-lg text-slate-700 bg-blue-50/50 p-3 rounded-xl"><CheckCircle className="text-blue-600 shrink-0" size={24} fill="white" /> 강점 찾기 리포트</div>
                  <p className="text-slate-400 font-bold text-sm md:pl-2">카드 정보 입력 없이 100% 무료로 제공됩니다.</p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-slate-400 font-black text-2xl border-b-2 border-slate-100 pb-3 mb-6 uppercase tracking-tighter italic">Zero Risk</h4>
                  <div className="flex items-center justify-center md:justify-start gap-4 font-bold text-lg text-slate-400 line-through decoration-red-400/50 decoration-2 p-3"><ShieldAlert size={24} className="shrink-0" /> 상담 전화 강요</div>
                  <div className="flex items-center justify-center md:justify-start gap-4 font-bold text-lg text-slate-400 line-through decoration-red-400/50 decoration-2 p-3"><ShieldAlert size={24} className="shrink-0" /> 유료 자동 전환</div>
                  <p className="text-slate-400 font-bold text-sm md:pl-2">체험만 해보고 마음에 안 들면 언제든 그만두세요.</p>
                </div>
              </div>
              <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="w-full max-w-md bg-slate-900 text-white px-10 py-5 text-xl font-black rounded-2xl hover:bg-black hover:scale-105 transition-all shadow-xl">무료체험신청하기</button>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-10 xs:py-12 md:py-16 px-4 md:px-6 border-b border-slate-100 bg-white flex justify-center">
        <div className="max-w-[1200px] w-full text-center">
          <p className="text-xs xs:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 xs:mb-4">Why Choose Us</p>
          <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-black italic uppercase mb-4 xs:mb-6 md:mb-8 tracking-tighter text-slate-900 leading-snug">WHY EINE ENGLISH?</h2>
          <p className="text-sm xs:text-base md:text-base text-slate-500 font-bold mb-8 md:mb-12 leading-relaxed">숫자로 증명하는 아인의 차별점</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                number: "95%",
                label: "재수강률",
                desc: "왜 95%인가? 매 수업마다 실시간 교정·피드백을 받아서 '실제로 늘어난다'는 체감이 큽니다. 그래서 한 번 시작하면 끝까지 이어갑니다.",
                color: "from-red-500 to-orange-500"
              },
              {
                number: "10년+",
                label: "운영 경력",
                desc: "왜 10년인가? 2010년대부터 축적한 커리큘럼과 시스템이 검증됐습니다. 트렌드가 아닌, 시간이 증명한 방법론입니다.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                number: "1:1",
                label: "실시간 교정",
                desc: "왜 1:1인가? 그룹 수업에서는 '틀려도 넘어가는' 순간이 많습니다. 아인은 1:1로 틀린 순간 바로 고쳐, 말문이 확실히 트입니다.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white border-2 border-slate-200 hover:border-slate-300 p-8 md:p-10 rounded-3xl transition-all duration-300 hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                  {/* Big Number */}
                  <div className={`text-6xl md:text-7xl font-black mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent leading-none`}>
                    {item.number}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-900 tracking-tight">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="infra" className="py-10 xs:py-12 md:py-24 px-4 md:px-6 border-b border-slate-200 bg-slate-50 flex justify-center">
        <div className="max-w-[1200px] w-full text-center">
          <p className="text-xs xs:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 xs:mb-4">Why Ein English</p>
          <h2 className="text-xl xs:text-2xl md:text-4xl font-black mb-6 xs:mb-8 md:mb-16 tracking-tight text-slate-900">아인만의 차별화된 시스템</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { t: "명문대 강사진", d: "상위 1% 검증된 베테랑의 맞춤 피드백.", img: `${base}images/service-infra/teacher.png`, icon: <GraduationCap size={48} className="text-white/90" />, color: "bg-blue-600" },
              { t: "스마트 매칭", d: "내 스케줄에 맞춰 시간 자유 선택.", img: `${base}images/service-infra/smartmatching.png`, icon: <MousePointer2 size={48} className="text-white/90" />, color: "bg-slate-900" },
              { t: "카톡 지원", d: "평일 18시까지 실시간 문의 해결.", img: `${base}images/service-infra/kakao-talk-support.png`, icon: <Headphones size={48} className="text-white/90" />, color: "bg-amber-400" },
              { t: "ESL 교재", d: "글로벌 스탠다드 & 아인 전용 자료.", img: `${base}images/service-infra/esl-book.png`, icon: <Globe size={48} className="text-white/90" />, color: "bg-red-500" }
            ].map((item, i) => (
              <div key={i} className="aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer">
                <img src={item.img} alt={item.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Brand Color Tint - Reduced opacity for clarity */}
                <div className={`absolute inset-0 opacity-10 ${item.color}`}></div>
                {/* Text Readability Gradient - lighter gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute left-auto top-auto right-0 bottom-0 w-full h-full p-6 md:p-8 flex flex-col justify-between text-white z-10">
                  <div className="bg-white/20 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3 leading-tight">{item.t}</h3>
                    <p className="text-white/90 font-medium text-xs md:text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="management" className="py-10 xs:py-12 md:py-24 px-4 md:px-6 border-b border-slate-100 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/40 flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />
        <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-blue-400/40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-amber-400/50 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-blue-300/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-[10%] w-3 h-3 rounded-full bg-amber-300/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="max-w-[1200px] w-full relative z-10">
          <div className="text-center mb-8 xs:mb-10 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-200/80 rounded-full px-5 py-2 mb-6 shadow-lg shadow-blue-100/50 animate-pulse-glow">
              <Sparkles size={16} className="text-blue-600" />
              <p className="text-xs xs:text-sm font-black text-blue-600 uppercase tracking-[0.2em]">Learning Care</p>
            </div>
            <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-5xl font-black mb-3 xs:mb-4 md:mb-6 tracking-tight text-slate-900 animate-fade-in-up">
              완주를 돕는 밀착 관리 시스템
            </h2>
            <p className="text-sm xs:text-base md:text-lg lg:text-xl text-slate-600 font-bold italic animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>"아인은 가르치는 것을 넘어, 당신의 완주를 관리합니다."</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 mt-8 xs:mt-12">
            <div className="relative w-full max-w-[400px] border-[8px] md:border-[12px] border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[0_24px_60px_-16px_rgba(15,23,42,0.2)] p-6 xs:p-8 md:p-10 bg-white overflow-hidden group hover:shadow-[0_32px_80px_-20px_rgba(59,130,246,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/60 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-125 group-hover:bg-blue-300/50 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100/80 rounded-full -ml-12 -mb-12 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
              <h4 className="text-2xl font-black text-center text-blue-600 mb-12 italic uppercase relative z-10 flex items-center justify-center gap-2">
                <ClipboardCheck size={28} className="animate-pulse" /> CHECK POINT
              </h4>
              <ul className="space-y-6 text-left md:text-center lg:text-left relative z-10 flex flex-col items-center md:items-start lg:items-start">
                {[
                  { text: "정밀한 평가 기준", icon: <Target size={18} className="text-blue-600" /> },
                  { text: "매 수업 후 피드백 리포트", icon: <FileText size={18} className="text-blue-600" /> },
                  { text: "일일/월간 성장 분석표", icon: <BarChart3 size={18} className="text-blue-600" /> },
                  { text: "꾸준한 말하기 연습 시스템", icon: <Calendar size={18} className="text-blue-600" /> },
                  { text: "학습 지속 매니저 케어", icon: <UserCheck size={18} className="text-blue-600" /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 group/li w-full max-w-[280px] hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0 group-hover/li:scale-110 group-hover/li:shadow-lg group-hover/li:border-blue-300 transition-all duration-300 border border-blue-100">
                      {React.cloneElement(item.icon, { className: 'text-blue-600 w-4 h-4 md:w-5 md:h-5' })}
                    </div>
                    <span className="font-bold text-slate-700 text-sm xs:text-base md:text-lg tracking-tight group-hover/li:text-slate-900 group-hover/li:font-black transition-all duration-300 break-keep leading-snug">{item.text}</span>
                    <Check size={16} className="text-green-500 ml-auto opacity-100 md:opacity-0 group-hover/li:opacity-100 transition-opacity duration-300 shrink-0 md:w-[18px] md:h-[18px]" strokeWidth={3} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 space-y-12">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-12 tracking-tight italic text-slate-800 break-keep">
                  평균 <span className="text-red-500 animate-pulse-glow">95%가 넘는</span> <span className="whitespace-nowrap"><span className="text-red-500">재수강률</span>이</span><br />
                  이 퀄리티를 증명합니다
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 만족도 차트 */}
                  <div className="bg-white p-6 xs:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                    <p className="text-sm font-bold text-slate-500 mb-6 text-center group-hover:text-blue-600 transition-colors">만족도 89% → 95% 상승</p>
                    <div className="flex items-end justify-center gap-4 md:gap-6 mt-4">
                      <div className="flex flex-col items-center gap-2 flex-1 max-w-[100px]">
                        <span className="text-2xl font-black text-slate-400">89%</span>
                        <div className="w-full bg-slate-100 rounded-t-lg overflow-hidden h-32 flex flex-col justify-end">
                          <div className="h-[89%] bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-lg flex items-center justify-center">
                            <span className="text-white font-black text-xs">2024</span>
                          </div>
                        </div>
                        <span className="text-xs xs:text-sm font-bold text-slate-500">2024년</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 flex-1 max-w-[100px]">
                        <span className="text-2xl font-black text-blue-600 animate-bounce-subtle">95%</span>
                        <div className="w-full bg-blue-50 rounded-t-lg overflow-hidden h-32 flex flex-col justify-end border border-blue-100">
                          <div className="h-[95%] bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg flex items-center justify-center shadow-md">
                            <span className="text-white font-black text-xs">2025</span>
                          </div>
                        </div>
                        <span className="text-xs xs:text-sm font-bold text-blue-600">2025년</span>
                      </div>
                    </div>
                  </div>
                  {/* 회원 수 차트 */}
                  <div className="bg-white p-6 xs:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
                    <p className="text-sm font-bold text-slate-500 mb-6 text-center group-hover:text-orange-600 transition-colors">회원 수 76% 성장</p>
                    <div className="flex items-end justify-center gap-4 md:gap-6 mt-4">
                      <div className="flex flex-col items-center gap-2 flex-1 max-w-[100px]">
                        <span className="text-2xl font-black text-slate-400">57%</span>
                        <div className="w-full bg-slate-100 rounded-t-lg overflow-hidden h-32 flex flex-col justify-end">
                          <div className="h-[57%] bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-lg flex items-center justify-center">
                            <span className="text-white font-black text-xs">2024</span>
                          </div>
                        </div>
                        <span className="text-xs xs:text-sm font-bold text-slate-500">2024년</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 flex-1 max-w-[100px]">
                        <span className="text-2xl font-black text-orange-500 animate-bounce-subtle">76%</span>
                        <div className="w-full bg-orange-50 rounded-t-lg overflow-hidden h-32 flex flex-col justify-end border border-orange-100">
                          <div className="h-[100%] bg-gradient-to-t from-orange-600 to-orange-500 rounded-t-lg flex items-center justify-center shadow-md">
                            <span className="text-white font-black text-xs">2025</span>
                          </div>
                        </div>
                        <span className="text-xs xs:text-sm font-bold text-orange-600">2025년</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-10 xs:py-12 md:py-24 px-4 md:px-6 bg-[#0a0a0a] text-white overflow-hidden text-left relative flex justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-[1200px] w-full relative z-10 text-center">
          <p className="text-xs xs:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 xs:mb-4">Curriculum</p>
          <Settings className="mx-auto text-blue-500 mb-6 xs:mb-8 animate-spin-slow" size={32} />
          <h2 className="text-xl xs:text-2xl md:text-5xl font-black mb-6 xs:mb-8 md:mb-12 uppercase italic tracking-tighter">나에게 맞는 학습과정</h2>

          {/* 3. 타겟별 전문 커리큘럼 패키지 - 기한·목표·횟수 명확 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
            {[
              { target: '워킹홀리데이 준비반', weeks: 8, sessions: 40, goal: '현지 취업·일상 회화 완성', tag: '선착순 마감', color: 'from-amber-500 to-orange-500' },
              { target: '비즈니스 영어 집중반', weeks: 4, sessions: 20, goal: '회의·메일 표현 마스터', tag: '직장인 인기', color: 'from-blue-500 to-indigo-500' },
              { target: '주니어 3개월 성장 패키지', weeks: 12, sessions: 36, goal: '문장 발화·자신감 UP', tag: '학부모 추천', color: 'from-green-500 to-emerald-500' }
            ].map((pkg, i) => (
              <div key={i} onClick={() => window.location.href = 'https://einenglish.com/apply'} className="bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-1 group">
                <span className="inline-block bg-red-500/90 text-white text-xs font-black px-2.5 py-1 rounded mb-3">{pkg.tag}</span>
                <h3 className="text-lg md:text-xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">{pkg.target}</h3>
                <p className="text-2xl md:text-3xl font-black mb-2">
                  <span className={`bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>{pkg.weeks}주 {pkg.sessions}강</span> 완성
                </p>
                <p className="text-slate-400 text-sm font-bold">{pkg.goal}</p>
                <p className="text-slate-500 text-xs xs:text-sm font-medium mt-2">무료 상담 후 맞춤 안내</p>
              </div>
            ))}
          </div>

          <p className="text-slate-400 font-bold text-sm mb-8">아래에서 더 많은 과정을 확인하세요</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { t: '일반 회화', d: '여행·일상에서 바로 써먹는 실전 표현 위주 말하기.', img: `${base}images/curriculum/regular-class.png?v=2`, color: 'bg-blue-600' },
              { t: '프리토킹', d: '자유로운 주제로 대화하며 자연스러운 문장 습득.', img: `${base}images/curriculum/free-talking.png?v=2`, color: 'bg-orange-500' },
              { t: '주니어 회화', d: '아이가 스스로 말하고 싶어지게 만드는 과정.', img: `${base}images/curriculum/junior-class.png?v=2`, color: 'bg-green-500' },
              { t: '공인시험 준비', d: 'TOEIC·OPIc 등 시험 유형별 실전 템플릿.', img: `${base}images/curriculum/test-prep.png?v=2`, color: 'bg-purple-500' },
              { t: '인터뷰 영어', d: '면접 답변 구성 및 자신감 향상 반복 훈련.', img: `${base}images/curriculum/interview.png?v=2`, color: 'bg-cyan-500' },
              { t: '비즈니스 회화', d: '이메일·회의 등 실제 업무 상황 시뮬레이션.', img: `${base}images/curriculum/business.png?v=2`, color: 'bg-pink-500' }
            ].map((course, i) => (
              <div key={i} className="group relative aspect-video xs:aspect-[1.4/1] md:aspect-[1.2/1] rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-end p-6 md:p-10 text-left cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img src={course.img} alt={course.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Gradient: Dark at bottom for text, clear at top for photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <h3 className="text-sm xs:text-base md:text-2xl font-black mb-1 xs:mb-2 md:mb-3 relative z-10 text-white uppercase tracking-tight">{course.t}</h3>
                <p className="text-xs md:text-sm text-gray-200 font-medium relative z-10 leading-relaxed line-clamp-2 text-center">{course.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 xs:mt-12 md:mt-16 animate-fade-in-up">
            <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="group w-full xs:w-auto inline-flex items-center justify-center gap-2 xs:gap-3 bg-white/5 hover:bg-white/10 text-white px-5 py-4 xs:px-6 md:px-8 rounded-xl xs:rounded-full font-bold text-sm xs:text-base md:text-lg transition-all border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <span className="bg-blue-600 text-white text-xs font-black px-2 py-0.5 rounded tracking-wider">FREE</span>
              내 레벨에 딱 맞는 과정이 궁금하다면? <span className="text-blue-400 group-hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30">무료 진단하기</span> <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section id="animation" className="py-10 xs:py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-center border-b border-slate-700 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <p className="text-xs xs:text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 xs:mb-4">Animation Contents</p>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black mb-4 xs:mb-6 md:mb-6 italic tracking-tight text-white">
            📺 애니메이션으로 배우는<br className="md:hidden" /> 살아있는 영어
          </h2>
          <p className="text-sm xs:text-base md:text-xl text-slate-300 mb-8 xs:mb-10 md:mb-12 font-medium">
            아이들이 좋아하는 인기 애니메이션으로<br />재미있게 영어 실력 UP
          </p>

          {/* Horizontal Scroll - CSS 마퀴 자동 왼쪽 스크롤 (시퀀스 2회 반복으로 무한 루프) */}
          <div className="overflow-hidden px-6 -mx-6 mb-8 pb-8">
            <div className="flex gap-4 md:gap-5 w-max animate-marquee-fast pause-marquee">
              {(() => {
                const animItems = [
                  { t: 'BLUEY', i: `${base}images/animation/bluey.png` },
                  { t: 'DC KIDS', i: `${base}images/animation/dc-kids.png` },
                  { t: 'MAX & RUBY', i: `${base}images/animation/max&ruby.png` },
                  { t: 'PIP AND POSY', i: `${base}images/animation/pip-and-posy.png` },
                  { t: 'POWERPUFF GIRLS', i: `${base}images/animation/powerpuff-girls.png` },
                  { t: 'ROB THE ROBOT', i: `${base}images/animation/robtherobot.png` },
                  { t: 'VOOKS SCIENCE', i: `${base}images/animation/vooks-science.png` }
                ];
                return [...animItems, ...animItems].map((item, i) => (
                  <div key={i} className="flex-none w-64 md:w-80 aspect-video bg-slate-800 rounded-2xl md:rounded-[1.5rem] flex flex-col items-center justify-center font-black text-slate-300 border-2 border-slate-700 group cursor-pointer hover:bg-slate-700 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-slate-700">
                      <img src={item.i} alt={item.t} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <span className="text-sm md:text-base relative z-10 text-white font-black drop-shadow-md tracking-wider">{item.t}</span>
                  </div>
                ));
              })()}
            </div>
          </div>

          <button onClick={() => window.location.href = 'https://einenglish.com/apply'} className="mt-8 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-black text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <PlayCircle size={24} className="relative z-10" />
            <span className="relative z-10">무료체험 신청하기</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>
        </div>
      </section>

      {/* Textbooks Section */}
      <section id="textbooks" className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 relative overflow-hidden flex justify-center border-t border-slate-200/50">
        {/* 우측 상단 흐릿한 배경 포인트 (프리미엄 느낌) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1200px] w-full relative z-10">
          <div className="text-center mb-12 md:mb-20">
            {/* 세련된 상단 태그 */}
            <span className="inline-block px-4 py-1.5 bg-indigo-100/80 text-indigo-600 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6 border border-indigo-200/50 shadow-sm backdrop-blur-sm">Premium Textbooks</span>

            {/* 타이포그래피 강화 (이모지 제거, 고급스러운 폰트 웨이트) */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-[1.2]">
              수준별 맞춤 제공, <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">9종의 프리미엄 교재</span>
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
              알파벳 기초부터 고급 비즈니스 회화까지.<br className="hidden md:block" />
              수강생의 분명한 목표 도달을 위해 체계적으로 설계되었습니다.
            </p>
            {/* 9종 교재: 모바일 가로 스와이프 / 데스크톱 그리드 */}
            <div className="flex overflow-x-auto snap-x md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20 pb-4 md:pb-0 px-4 -mx-4 md:mx-0 scrollbar-hide">
              {books.map((book, i) => (
                <div key={i} className="group flex-none w-[75vw] sm:w-[45vw] md:w-auto snap-center bg-white rounded-3xl p-2 pb-5 md:pb-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] hover:border-indigo-100 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer" onClick={() => window.location.href = 'https://einenglish.com/process?tab=intro'}>
                  {/* 썸네일 영역: 고급 입체감 효과 */}
                  <div className="h-40 md:h-52 bg-white rounded-2xl overflow-hidden relative mb-4 md:mb-6">
                    <img src={book.img} alt={book.title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out" />
                    {/* 은은한 내부 그림자로 깊이감(Depth) 부여 */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* 고급스러운 뱃지 */}
                    {book.tag && (
                      <span className="absolute top-3 right-3 text-[10px] md:text-xs font-black bg-slate-900/90 text-white px-3 md:px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg z-10 backdrop-blur-md border border-white/20">
                        {book.tag}
                      </span>
                    )}
                  </div>

                  {/* 텍스트 영역: 여백 구조 개선 */}
                  <div className="px-5 md:px-8 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-base md:text-xl font-black mb-2 md:mb-3 tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors">{book.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium line-clamp-2 md:line-clamp-3">
                      {book.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 메인 액션 버튼 (무료체험 신청하기 버튼만 유지) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.href = 'https://einenglish.com/apply'}
                className="relative overflow-hidden w-full sm:w-auto group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.3)] active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <BookOpen size={20} className="relative z-10" />
                <span className="relative z-10">무료체험 신청하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-10 xs:py-12 md:py-20 px-4 md:px-6 bg-slate-50 border-b border-slate-100 text-center flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="mb-8 xs:mb-10 md:mb-12">
            <p className="text-xs xs:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 xs:mb-4">Process</p>
            <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-black mb-3 xs:mb-4 md:mb-4 uppercase italic tracking-wide xs:tracking-widest text-slate-900">How It Works</h2>
            <p className="text-slate-500 font-bold text-sm xs:text-base md:text-lg italic">5단계로 시작하는 영어 말문 트기</p>
          </div>

          {/* Process Steps - 아이콘·그라데이션·흐름선 */}
          <div className="relative">
            {/* 연결선 (데스크톱) */}
            <div className="hidden md:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 to-rose-200 rounded-full opacity-50" />
            <div className="flex overflow-x-auto snap-x md:grid md:grid-cols-5 gap-4 md:gap-2 relative z-10 pb-4 md:pb-0 px-4 -mx-4 md:mx-0 scrollbar-hide">
              {[
                { t: "무료 신청", d: "결제 정보 없이 시간 선택", icon: Calendar, gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50", border: "hover:border-blue-300", num: "from-blue-500 to-cyan-500" },
                { t: "1:1 체험", d: "15분 프리토킹", icon: Video, gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50", border: "hover:border-violet-300", num: "from-violet-500 to-purple-500" },
                { t: "레벨 분석", d: "강점·약점 진단", icon: BarChart3, gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "hover:border-amber-300", num: "from-amber-500 to-orange-500" },
                { t: "수강 결정", d: "원하는 기간 선택", icon: CreditCard, gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", border: "hover:border-emerald-300", num: "from-emerald-500 to-teal-500" },
                { t: "집중 관리", d: "매 수업 교정·피드백", icon: Sparkles, gradient: "from-rose-500 to-pink-500", bg: "bg-rose-50", border: "hover:border-rose-300", num: "from-rose-500 to-pink-500" }
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative group h-full flex-none w-[75vw] sm:w-[45vw] md:w-auto snap-center">
                    <div className={`relative bg-white border-2 border-slate-100 ${step.border} p-5 md:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center gap-4 text-center h-full overflow-hidden`}>
                      {/* 배경 그라데이션 (호버 시) */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`} />
                      {/* 번호 + 아이콘 */}
                      <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.num} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                        <Icon size={26} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500">
                        {i + 1}
                      </div>
                      {/* 내용 */}
                      <div className="flex-1 relative z-10">
                        <h4 className="text-base md:text-lg font-black mb-1.5 text-slate-800 tracking-tight">
                          {step.t}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug break-keep">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 mb-6">
              <HelpCircle size={28} className="text-blue-400" />
            </div>
            <span className="text-blue-400 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Questions?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">자주 묻는 질문</h2>
            <p className="text-slate-300 font-medium text-base md:text-lg">가장 많이 궁금해하시는 내용을 정리했습니다.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "체험 수업은 정말 무료인가요?", a: "네. 카드 정보 입력 없이, 레벨 점검을 겸한 15분 1:1 무료체험 수업까지 모두 무료입니다.", icon: "🎁" },
              { q: "왕초보도 따라갈 수 있나요?", a: "알파벳부터 다시 시작하는 커리큘럼이 준비되어 있어 완전 초보도 부담 없이 시작할 수 있습니다.", icon: "📚" },
              { q: "수업 시간·강사 변경이 가능한가요?", a: "네. 마이페이지에서 직접 변경하거나, 카톡 또는 고객센터를 통해 도움을 받으실 수 있습니다.", icon: "🔄" },
              { q: "수강료는 어떻게 되나요?", a: "레벨·횟수·기간에 따라 상이합니다. 무료체험 후 상담을 통해 맞춤 안내를 받으실 수 있습니다.", icon: "💰" },
              { q: "환불이 가능한가요?", a: "네. 이용약관에 따라 미사용 분에 대한 환불이 가능합니다. 자세한 내용은 고객센터로 문의해 주세요.", icon: "🛡️" },
              { q: "강사는 어떤 분들이신가요?", a: "필리핀 명문대 출신의 검증된 튜터진입니다. 상위 1% 선발 기준을 적용하고 있습니다.", icon: "👨‍🏫" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/40 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group">
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-lg group-hover:bg-blue-500/30 transition-colors">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-white group-hover:text-blue-100 transition-colors">
                      <span className="text-blue-400 font-black shrink-0">Q.</span>
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-medium pl-6 border-l-2 border-blue-500/40 text-slate-200">
                      <span className="text-blue-400/80 font-bold mr-2">A.</span> {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-10 xs:py-12 md:py-24 px-4 md:px-6 border-b border-slate-100 bg-white text-center flex justify-center">
        <div className="max-w-[1200px] w-full">
          <p className="text-xs xs:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 xs:mb-4">Success Stories</p>
          <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-black mb-10 xs:mb-12 md:mb-24 tracking-tighter text-slate-900">수강생들의 솔직한 성공 후기</h2>


          {/* Mixed Reviews Grid - Mobile Optimized to horizontal scroll */}
          <div className={`flex md:grid ${showAllReviews ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-4'} gap-4 md:gap-6 mb-12 md:mb-20 transition-all duration-500 ease-in-out overflow-x-auto snap-x scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0 pb-4 md:pb-0`}>
            {(showAllReviews ? allReviews : allReviews.slice(0, 4)).map((item, idx) => (
              <div key={idx} className={`w-[85vw] md:w-full flex-none snap-center bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group ${item.type === 'image' ? 'aspect-video md:aspect-square' : ''}`}>
                {item.type === 'image' ? (
                  <div className="relative w-full h-full">
                    <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 md:p-8 flex flex-col justify-between h-full min-h-[240px] text-left">
                    <div>
                      <div className="flex text-yellow-400 mb-4 gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                      </div>
                      <h5 className="font-bold text-lg md:text-xl mb-3 text-slate-800 leading-tight break-keep">"{item.title}"</h5>
                      <p className="text-base md:text-base font-medium leading-relaxed text-slate-500 break-keep">
                        {item.content}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                      <span className="text-sm font-bold text-slate-400">{item.author}</span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <MessageSquare size={14} fill="currentColor" className="opacity-50" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button onClick={() => setShowAllReviews(!showAllReviews)} className="bg-slate-900 text-white px-8 xs:px-12 md:px-16 py-4 xs:py-5 md:py-6 font-black text-sm xs:text-base md:text-lg hover:bg-black transition-all rounded-xl xs:rounded-2xl md:rounded-[2rem] shadow-xl hover:scale-105">
              {showAllReviews ? '후기 목록 접기' : '리얼 수강후기 더 보기 (Expand)'}
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden flex justify-center">
        {/* 장식용 배경 요소들 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1000px] w-full relative z-10 flex justify-center">
          <div className="w-full bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-14 lg:p-16 relative overflow-hidden flex flex-col items-center text-center">

            {/* 상단 뱃지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8 md:mb-10 shadow-sm border border-blue-100/50">
              <Gift size={16} className="text-blue-500" />
              <span className="text-xs md:text-sm font-black tracking-wide">15분 무료체험 + 강점 리포트 무료 제공</span>
            </div>

            {/* 메인 카피 */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight mb-4 md:mb-6">
              말문이 트이는 <br className="hidden xs:block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">3개월의 변화</span>
            </h2>

            <p className="text-base md:text-xl text-slate-600 font-bold mb-10 md:mb-12 max-w-2xl leading-relaxed">
              1:1 실시간 교정으로 틀린 순간 바로 고쳐드립니다.<br className="hidden md:block" />
              고민은 시간만 늦출 뿐, 오늘 당장 내 실력을 확인해보세요.
            </p>

            {/* 메인 버튼 */}
            <div className="w-full max-w-md mx-auto mb-8">
              <button
                onClick={() => window.location.href = 'https://einenglish.com/apply'}
                className="group relative w-full h-[64px] md:h-[72px] bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-orange-600 hover:to-rose-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">무료체험 신청하기</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* 100% Free & Zero Risk 요약 박스: 모바일 최적화 (가로 나열) */}
            <div className="grid md:grid-cols-2 gap-3 xs:gap-4 md:gap-10 mb-8 md:mb-12">
              <div className="bg-blue-50/50 rounded-2xl md:rounded-3xl py-4 xs:py-5 md:py-8 px-4 xs:px-6 md:px-10 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-center items-center text-center">
                <span className="text-blue-600 font-black text-base xs:text-lg md:text-xl italic mb-3 xs:mb-4 tracking-wider">100% FREE</span>
                <div className="flex flex-row flex-wrap justify-center gap-2 xs:gap-3">
                  <div className="flex items-center gap-1.5 xs:gap-2 text-slate-600 bg-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-xl border border-slate-100 shadow-sm w-fit justify-center">
                    <CheckCircle size={18} className="text-blue-500 shrink-0" />
                    <span className="text-sm font-black whitespace-nowrap">15분 1:1 체험</span>
                  </div>
                  <div className="flex items-center gap-1.5 xs:gap-2 text-slate-600 bg-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-xl border border-slate-100 shadow-sm w-fit justify-center">
                    <CheckCircle size={18} className="text-blue-500 shrink-0" />
                    <span className="text-sm font-black whitespace-nowrap">강점 찾기 리포트</span>
                  </div>
                </div>
                <p className="mt-4 text-[11px] xs:text-xs font-bold text-slate-400">카드 정보 입력 없이 100% 무료로 제공됩니다.</p>
              </div>

              <div className="bg-slate-50/80 rounded-2xl md:rounded-3xl py-4 xs:py-5 md:py-8 px-4 xs:px-6 md:px-10 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all flex flex-col justify-center items-center text-center">
                <span className="text-slate-500 font-black text-base xs:text-lg md:text-xl italic mb-3 xs:mb-4 tracking-wider">ZERO RISK</span>
                <div className="flex flex-row flex-wrap justify-center gap-2 xs:gap-3">
                  <div className="flex items-center gap-1.5 xs:gap-2 text-slate-500 bg-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden w-fit justify-center">
                    <div className="absolute top-1/2 left-2 right-2 h-[1.5px] bg-red-400/80 -translate-y-1/2 -rotate-2"></div>
                    <ShieldAlert size={18} className="text-slate-400 shrink-0" />
                    <span className="text-sm font-bold text-slate-400 whitespace-nowrap line-through decoration-transparent">상담 전화 강요</span>
                  </div>
                  <div className="flex items-center gap-1.5 xs:gap-2 text-slate-500 bg-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-xl border border-slate-100 shadow-sm w-fit justify-center">
                    <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm font-black text-slate-700 whitespace-nowrap">불필요한 연락 없는</span>
                  </div>
                </div>
                <p className="mt-4 text-[11px] xs:text-xs font-bold text-slate-400">오직 회원님이 원하실 때만 상담을 진행합니다.</p>
              </div>
            </div>

          </div>
        </div>
      </section >

      <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 font-medium text-xs flex flex-col items-center">
        {/* Top Footer: Links & Social */}
        <div className="max-w-[1200px] w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-200">
          <div className="flex gap-6 font-bold">
            <a href={`${siteUrl}/terms/term`} className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href={`${siteUrl}/terms/privacy`} className="hover:text-slate-900 transition-colors">개인정보처리방침</a>
          </div>
          <div className="flex gap-2">
            <a href="https://www.youtube.com/channel/UChnQmwavrX_nGvXgG8j8ErQ" className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><Youtube size={16} /></a>
            <a href="https://www.facebook.com/einenglish" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/einenglish" className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={16} /></a>
            <a href="https://blog.naver.com/einenglish" className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><BookOpen size={16} /></a>
          </div>
        </div>

        {/* Main Footer: Business Info */}
        <div className="max-w-[1200px] w-full px-6 py-10">
          <img src={`${base}eine-english-logo.png`} alt="아인잉글리쉬" className="h-8 mb-6 object-contain opacity-80 filter grayscale hover:grayscale-0 transition-all" />

          <div className="grid md:grid-cols-2 gap-y-2 gap-x-8 max-w-4xl text-xs xs:text-sm leading-relaxed text-slate-500">
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">상호명 :</span>
              <span>아인잉글리쉬 원격평생교육원</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">대표 :</span>
              <span>강민규</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">사업자등록번호 :</span>
              <span>634-98-00756</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold whitespace-nowrap">통신판매업신고번호 :</span>
              <span>제2022-서울구로-1595호</span>
            </div>
            <div className="flex gap-2 md:col-span-2">
              <span className="font-bold whitespace-nowrap">주소 :</span>
              <span>서울시 구로구 디지털로 30길 31</span>
            </div>
            <div className="flex gap-2 md:col-span-2">
              <span className="font-bold whitespace-nowrap">이메일 :</span>
              <span>einenglish3@gmail.com</span>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 text-slate-400 text-xs xs:text-sm">
            © 2022 아인잉글리쉬. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* All Reviews Modal */}
      {
        showAllReviewsModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 animate-fade-in bg-white/90 backdrop-blur-md" onClick={() => setShowAllReviewsModal(false)}>
            <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="p-6 md:p-8 flex justify-between items-center border-b border-slate-100 bg-white z-10">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                  {selectedCategory === 'adult' ? '성인/직장인' : '주니어/학생'} <span className="text-blue-600">영상 후기 전체보기</span>
                </h3>
                <button onClick={() => setShowAllReviewsModal(false)} className="bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-red-500 p-2 rounded-full transition-all">
                  <X size={24} />
                </button>
              </div>

              {/* Grid Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {videoReviews
                    .filter(video => video.category === selectedCategory)
                    .map((video, i) => (
                      <div key={i} className={`group relative bg-black rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${video.ratio === 'aspect-[9/16]' ? 'aspect-[9/16]' : 'aspect-video'}`} onClick={() => setSelectedVideo(video)}>
                        <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          <h4 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2 drop-shadow-md">{video.title}</h4>
                          <p className="text-slate-300 text-xs font-medium line-clamp-1">{video.desc}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Video Modal */}
      {
        selectedVideo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
              <button onClick={() => setSelectedVideo(null)} className="text-white hover:text-red-500 transition-colors p-3 md:p-2 bg-white/10 rounded-full backdrop-blur-md">
                <X size={32} />
              </button>
            </div>
            <div className={`relative ${selectedVideo.ratio === 'aspect-[9/16]' ? 'h-[75vh] md:h-[80vh] max-h-[85vh] max-w-full w-[calc(100vw-3rem)] sm:w-auto aspect-[9/16]' : 'w-full max-w-5xl aspect-video'} bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10`} onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        )
      }

      {/* 실시간 신청 현황 토스트 */}
      {
        showToast && toastIndex >= 0 && (
          <div className="fixed bottom-24 xs:bottom-28 left-4 xs:left-5 md:left-6 z-[98] animate-fade-in pl-[env(safe-area-inset-left)] pb-[env(safe-area-inset-bottom)]">
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 max-w-[280px] animate-slide-in-left">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-green-600" strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  {recentSignups[toastIndex].name}님이 무료체험을 신청했어요
                </p>
                <p className="text-xs text-slate-400 font-medium">{recentSignups[toastIndex].time}</p>
              </div>
            </div>
          </div>
        )
      }

      {/* Floating Buttons + 카카오톡 팝업 */}
      <div className="fixed bottom-[85px] sm:bottom-4 right-4 xs:right-5 md:bottom-6 md:right-6 z-[99] flex flex-col items-end gap-2 xs:gap-3 pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] transition-all duration-300">
        {/* 카카오톡 팝업 - 3초 후 표시, 7초 후 사라짐 (모바일에서는 자리 차지 방지용으로 숨김) */}
        {showKakaoPopup && (
          <div className="hidden md:block absolute bottom-full right-0 mb-2 w-[280px] xs:w-[320px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in">
            <div className="relative p-4">
              <button onClick={() => setShowKakaoPopup(false)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                <X size={16} />
              </button>
              <div className="flex gap-3">
                <div className="relative shrink-0">
                  <img src={`${base}images/service-infra/teacher.png`} alt="매니저" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-sm font-black text-slate-800 mb-1">아인잉글리쉬 매니저</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-2">영어 원어민 회화, 어디서부터 시작할지 막막하신가요?</p>
                  <a href="https://pf.kakao.com/_TpqVu/friend" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline">
                    딱 맞는 수업 추천해 드릴게요! <ArrowRight size={14} strokeWidth={4} />
                  </a>
                </div>
              </div>
            </div>
            {/* 말풍선 꼬리 */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
          </div>
        )}
        <div className="flex items-center gap-2 xs:gap-3">
          <div className="bg-white px-3 py-1.5 xs:px-4 xs:py-2 rounded-full shadow-xl border border-slate-100 animate-bounce-subtle">
            <span className="text-xs xs:text-sm font-bold text-slate-700 whitespace-nowrap">1:1 카카오톡 상담 😊</span>
          </div>
          <a href="https://pf.kakao.com/_TpqVu/friend" className="relative w-12 h-12 xs:w-14 xs:h-14 bg-[#FEE500] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border-2 border-[#FEE500]">
            <span className="text-[#3C1E1E] font-black text-xs xs:text-sm">TALK</span>
            {showKakaoPopup && <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-black flex items-center justify-center">1</span>}
          </a>
        </div>
      </div>

    </div >
  );
};

export default App;
