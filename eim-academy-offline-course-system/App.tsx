
import React, { useState } from 'react';
import { SITE_CONFIG } from './constants';
import { LevelInfo, PortfolioItem, SubCourse } from './types';

// --- Sub-components ---

const Icon = ({ path, className = "w-6 h-6" }: { path: string, className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600" style={{ color: SITE_CONFIG.theme.primary }}>EIM Academy</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#levels" className="text-gray-600 hover:text-blue-600 font-medium transition">课程体系</a>
            <a href="#path" className="text-gray-600 hover:text-blue-600 font-medium transition">学习路径</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition">作品展示</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium transition">常见问题</a>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              立即报名
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Icon path={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg">
          <a href="#levels" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>课程体系</a>
          <a href="#path" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>学习路径</a>
          <a href="#portfolio" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>作品展示</a>
          <a href="#contact" className="block text-blue-600 font-bold" onClick={() => setIsOpen(false)}>联系我们</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          {SITE_CONFIG.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
          {SITE_CONFIG.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-200 hover:-translate-y-1 transition duration-300" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            {SITE_CONFIG.hero.primaryBtn}
          </button>
          <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl text-lg font-bold hover:bg-gray-50 transition duration-300">
            {SITE_CONFIG.hero.secondaryBtn}
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
           <img src={SITE_CONFIG.hero.heroImage} alt="Hero" className="w-full h-full object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800' }} />
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const LevelOverview = () => (
  <section id="levels" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">三个阶段，逐级进化</h2>
        <p className="text-gray-500 text-lg">从发现兴趣到解决真实世界的工程难题</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {SITE_CONFIG.levels.map((lvl) => (
          <div key={lvl.id} className="p-10 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
            <div className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: SITE_CONFIG.theme.primary }}>{lvl.badge}</div>
            <h3 className="text-2xl font-extrabold mb-3">{lvl.name}</h3>
            <div className="text-sm text-gray-400 mb-8 flex items-center justify-center gap-2">
              <Icon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4" />
              {lvl.duration}
            </div>
            <p className="text-gray-600 font-medium mb-10 min-h-[3rem] leading-relaxed">{lvl.valueProp}</p>
            <a href={`#${lvl.id}`} className="inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all" style={{ color: SITE_CONFIG.theme.primary }}>
              了解详情 <Icon path="M9 5l7 7-7 7" className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SubCourseCard = ({ course }: { course: SubCourse }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
      <img src={course.images[0]} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {course.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{course.title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-grow">
        {course.description}
      </p>
      <button className="w-full py-3 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition duration-300">
        查看大纲
      </button>
    </div>
  </div>
);

const DetailedLevel = ({ level }: { level: LevelInfo }) => (
  <section id={level.id} className="py-24 border-b border-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 space-y-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-10">
          <div>
            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold rounded-full mb-4 inline-block uppercase tracking-wider">
              {level.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">{level.name}</h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">{level.intro}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest">核心产出</h4>
              <ul className="space-y-3">
                {level.outputs.map((o, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest">适合人群</h4>
              <p className="text-sm text-gray-600 font-bold leading-relaxed">{level.target}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100/50">
            <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              参考时间表
            </h5>
            <p className="text-sm text-blue-700 leading-relaxed font-bold">{level.schedule}</p>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          {level.images.slice(0, 4).map((img, i) => (
            <div key={i} className={`rounded-[2rem] overflow-hidden bg-gray-100 shadow-xl ${i === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
              <img src={img} alt={`${level.name} ${i}`} className="w-full h-full object-cover" 
                   onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Sub Courses Grid - New Section */}
      {level.subCourses && level.subCourses.length > 0 && (
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-4">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                可选的 {level.name} 项目
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                这些是我们经过精心策划的经典 Bootcamp 课题，每一个都旨在从不同维度磨练你的工程能力。
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-8">
              了解更多可选课题 <Icon path="M17 8l4 4m0 0l-4 4m4-4H3" className="w-5 h-5" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {level.subCourses.map((course) => (
              <SubCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

const PathTimeline = () => (
  <section id="path" className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">进阶学习路径</h2>
        <p className="text-gray-400 text-lg">清晰的里程碑规划，陪伴每一个成长阶段</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gray-800"></div>
        {SITE_CONFIG.timeline.nodes.map((node, i) => (
          <div key={i} className="relative space-y-8">
            <div className="relative flex justify-center">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl border-4 border-gray-900 flex items-center justify-center text-xl font-bold z-10 shadow-xl shadow-blue-500/20" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
                {i + 1}
              </div>
            </div>
            <div className="bg-gray-800/40 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition duration-300">
              <h4 className="text-xl font-bold mb-3">{node.label}</h4>
              <div className="text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">{node.duration}</div>
              <div className="space-y-4 text-sm text-gray-300 text-left font-medium">
                <p><strong>能力:</strong> {node.capability}</p>
                <p><strong>产出:</strong> {node.outcome}</p>
                <div className="mt-6 pt-4 border-t border-gray-700 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                   要求: {node.condition}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{SITE_CONFIG.methodology.title}</h2>
        <p className="text-gray-500 text-lg">全方位的资源支持体系，确保每一个想法都能落地</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SITE_CONFIG.methodology.items.map((item, i) => (
          <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              <Icon path={item.icon} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">学员产出展示</h2>
          <p className="text-gray-500 text-lg">看他们如何从 0 到 1 创造改变</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONFIG.portfolio.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
              onClick={() => setSelected(item)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                   <span className="bg-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl">查看详情</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{tag}</span>)}
                </div>
                <h4 className="font-bold text-lg text-gray-900 leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden relative shadow-2xl animate-in zoom-in duration-300">
            <button className="absolute top-6 right-6 p-3 bg-white/80 rounded-full hover:bg-white shadow-lg transition z-10" onClick={() => setSelected(null)}>
              <Icon path="M6 18L18 6M6 6l12 12" />
            </button>
            <div className="aspect-video overflow-hidden">
              <img src={selected.imageUrl} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-10 space-y-6">
              <div className="flex gap-2">
                {selected.tags.map(tag => <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">{tag}</span>)}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900">{selected.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg font-medium">{selected.description}</p>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition" onClick={() => setSelected(null)}>关闭窗口</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">常见问题 FAQ</h2>
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                className="w-full p-8 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100/50 transition duration-300"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                <Icon path={openIndex === idx ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} className={`w-5 h-5 transition-transform ${openIndex === idx ? 'text-blue-600' : 'text-gray-400'}`} />
              </button>
              {openIndex === idx && (
                <div className="p-8 pt-0 bg-gray-50 text-gray-500 leading-relaxed font-bold animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contact" className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-3xl shadow-blue-100 relative overflow-hidden" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
      <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="relative z-10 space-y-12">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">{SITE_CONFIG.cta.title}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl w-56 h-56 flex items-center justify-center group overflow-hidden">
             <img src={SITE_CONFIG.cta.qrImage} alt="QR" className="w-full h-full object-contain group-hover:scale-110 transition duration-500" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EIM_Academy' }} />
          </div>
          <div className="text-left space-y-8 max-w-md">
            <p className="text-xl font-bold opacity-90 leading-relaxed">{SITE_CONFIG.cta.contact}</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition duration-300">预约面谈</button>
              <button className="border-2 border-white/40 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition duration-300">在线咨询</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-24 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
      <div className="col-span-2 space-y-8">
        <h3 className="text-2xl font-bold text-white tracking-tight">EIM Academy</h3>
        <p className="max-w-sm leading-relaxed font-bold">{SITE_CONFIG.footer.about}</p>
        <div className="flex gap-6">
          {SITE_CONFIG.footer.social?.map(s => (
            <a key={s.platform} href={s.url} className="text-xs font-bold text-gray-400 hover:text-white transition uppercase tracking-widest">{s.platform}</a>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h4 className="font-bold text-white text-xs uppercase tracking-[0.2em]">联系方式</h4>
        <ul className="space-y-4 text-sm font-bold">
          <li className="flex items-start gap-3"><Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-4 h-4 mt-0.5 text-blue-500" /> {SITE_CONFIG.footer.address}</li>
          <li className="flex items-start gap-3"><Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 mt-0.5 text-blue-500" /> {SITE_CONFIG.footer.email}</li>
        </ul>
      </div>
      <div className="space-y-8">
        <h4 className="font-bold text-white text-xs uppercase tracking-[0.2em]">快速导航</h4>
        <ul className="space-y-4 text-sm font-bold">
          <li><a href="#levels" className="hover:text-white transition">课程体系</a></li>
          <li><a href="#path" className="hover:text-white transition">进阶路径</a></li>
          <li><a href="#portfolio" className="hover:text-white transition">学员作品</a></li>
          <li><a href="#faq" className="hover:text-white transition">常见问题</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-gray-800 mt-20 pt-10 text-[11px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
      <span>© 2026 EIM Academy. 保留所有权利.</span>
      <span className="opacity-50 tracking-[0.3em]">Engineering / Design / Innovation</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Target Audiences Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {SITE_CONFIG.audiences.map((aud, i) => (
              <div key={i} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <h4 className="text-xl font-extrabold mb-8 text-gray-900 tracking-tight">{aud.type}</h4>
                <ul className="space-y-5 flex-grow">
                  {aud.benefits.map((b, j) => (
                    <li key={j} className="flex gap-4 text-gray-600 font-bold text-sm leading-relaxed items-start">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon path="M5 13l4 4L19 7" className="w-3 h-3" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LevelOverview />
      {SITE_CONFIG.levels.map(lvl => (
        <DetailedLevel key={lvl.id} level={lvl} />
      ))}
      <PathTimeline />
      <Methodology />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
