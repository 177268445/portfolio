import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  CircleDot,
  Copy,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  X,
} from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const projects = [
  {
    index: '01',
    title: '爱新芽数字化正畸后台管理端',
    en: 'AI-SHINYE CLOUD CONSOLE',
    type: 'MEDICAL / SAAS / 2021—2026',
    image: '/assets/aishinye/work-entry.jpg',
    accent: '#5260FE',
    metric: '全流程数字化闭环',
    copy: '连接诊所、医生、患者与工厂，覆盖病例、方案、生产与治疗跟进。',
    href: '#/work/aishinye',
  },
  {
    index: '02',
    title: 'AI 头影测量系统',
    en: 'AI CEPHALOMETRICS',
    type: 'AI / MEDICAL / 2024',
    image: '/assets/project-ai.png',
    accent: '#64e6d5',
    metric: '核心任务 +25%',
    copy: '把复杂的医学算法结果，转译为可信、可编辑、可交付的临床工具。',
  },
  {
    index: '03',
    title: '跨端设计系统',
    en: 'DESIGN SYSTEM 01',
    type: 'SYSTEM / BRAND / 2023',
    image: '/assets/hero-medical.png',
    accent: '#f0a96e',
    metric: '协作效率 +30%',
    copy: '一套覆盖 Web、App 与桌面端的设计语言，让复杂产品保持同一种秩序。',
  },
]

const strengths = [
  {
    no: '01',
    title: '复杂业务体验设计',
    en: 'COMPLEX UX',
    copy: '理解临床角色与工作流，将高门槛专业任务拆解为清晰、低负担的产品体验。',
    tags: ['信息架构', '交互策略', '多角色协作'],
  },
  {
    no: '02',
    title: '视觉与品牌表达',
    en: 'VISUAL DIRECTION',
    copy: '从产品界面到品牌触点，建立兼具医学可信度与科技审美的统一视觉叙事。',
    tags: ['视觉设计', '品牌语言', '动态表达'],
  },
  {
    no: '03',
    title: 'AI 产品转译',
    en: 'AI TRANSLATION',
    copy: '连接算法能力与真实用户，让模型结果变得可理解、可验证，也真正可操作。',
    tags: ['AI 工作流', '数据可视化', '可信体验'],
  },
  {
    no: '04',
    title: '系统化设计能力',
    en: 'DESIGN SYSTEM',
    copy: '从零搭建设计系统与协作规范，以组件、规则和评审机制稳定产品品质。',
    tags: ['原子化设计', '跨端规范', '设计走查'],
  },
]

function useReveal(route) {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [route])
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const heroRef = useRef(null)
  useReveal(route)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) heroRef.current.style.setProperty('--scroll', `${window.scrollY * 0.18}px`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (route.startsWith('#/work/aishinye')) return <ProjectDetail />

  const copyEmail = async () => {
    await navigator.clipboard.writeText('lin.yue@example.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="返回首页">
          <span>LY</span><i>26</i>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#strengths" onClick={() => setMenuOpen(false)}>能力</a>
        </nav>
        <a className="contact-button" href="#contact">
          <span>联系我</span><ArrowUpRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换导航">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/hero-medical.png" aria-hidden="true" />
        <div className="hero-poster" aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-kicker hero-enter">
            <span className="status-dot" />
            <span>BASED IN HANGZHOU · AVAILABLE FOR SELECTED WORK</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-enter delay-1">DESIGNING</span>
            <span className="hero-enter delay-2 outline-line">CLARITY <i>IN</i></span>
            <span className="hero-enter delay-3 title-indent">COMPLEXITY.</span>
          </h1>
          <div className="hero-bottom hero-enter delay-4">
            <p>林悦，视觉 / AI / 品牌设计师<br />用系统思维，为复杂科技创造清晰而有温度的表达。</p>
            <a className="round-link" href="#work" aria-label="查看精选项目"><ArrowDown /></a>
          </div>
        </div>
        <div className="hero-index">PORTFOLIO · 2026</div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label" data-reveal><span>01</span> PROFILE / 关于我</div>
        <div className="about-grid">
          <div className="portrait-wrap" data-reveal>
            <img src="/assets/portrait.png" alt="林悦个人肖像" />
            <div className="portrait-caption"><span>LIN YUE</span><span>HANGZHOU, CN</span></div>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">VISUAL DESIGNER / AI DESIGNER / BRAND DESIGNER</p>
            <h2>让严谨的技术，<br />拥有清晰的表情。</h2>
            <p className="about-lead">5 年医疗 SaaS 产品设计经验，专注口腔数字化领域。我习惯从真实业务与人的感受出发，在医学严谨性、技术限制和体验价值之间找到平衡。</p>
            <div className="experience-row">
              <div><span>2021—2026</span><strong>爱新芽医疗科技</strong></div>
              <p>负责数字化正畸产品矩阵的全链路设计，覆盖管理后台、医生 App、医学设计软件、AI 测量工具与品牌官网。</p>
            </div>
            <div className="contact-list">
              <a href="mailto:lin.yue@example.com"><Mail size={15} />lin.yue@example.com</a>
              <span><MapPin size={15} />杭州，中国</span>
              <a href="https://behance.net/linyue" target="_blank" rel="noreferrer"><ArrowUpRight size={15} />Behance</a>
            </div>
          </div>
        </div>
        <div className="stats" data-reveal>
          <div><strong>05<sup>Y</sup></strong><span>产品设计经验</span></div>
          <div><strong>05<sup>+</sup></strong><span>核心产品落地</span></div>
          <div><strong>40<sup>%</sup></strong><span>还原误差降低</span></div>
          <div><strong>03<sup>X</sup></strong><span>跨端设计覆盖</span></div>
        </div>
      </section>

      <section className="projects section" id="work">
        <div className="shell projects-heading" data-reveal>
          <div className="section-label"><span>02</span> SELECTED WORK / 精选项目</div>
          <h2>WORK THAT<br /><em>WORKS.</em></h2>
          <p>不止是好看的界面。每个项目都从问题出发，以结果完成闭环。</p>
        </div>
        <div className="project-list shell">
          {projects.map((project) => (
            <article className="project-card" key={project.index} data-reveal style={{ '--accent': project.accent }}>
              <a className="project-media" href={project.href || '#contact'} aria-label={`查看${project.title}`}>
                <img src={project.image} alt={`${project.title}项目封面`} loading="lazy" />
                <div className="project-overlay" />
                <span className="project-number">{project.index}</span>
                <span className="metric">{project.metric}</span>
                <span className="view-project"><ArrowUpRight /></span>
              </a>
              <div className="project-meta">
                <div><span>{project.type}</span><h3>{project.title}</h3></div>
                <div><strong>{project.en}</strong><p>{project.copy}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="strengths-top" data-reveal>
          <div className="section-label"><span>03</span> CAPABILITIES / 个人优势</div>
          <h2>从洞察到落地，<br />保持同一种精度。</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.no} data-reveal>
              <div className="strength-no">{item.no}<Asterisk size={18} /></div>
              <div className="strength-body">
                <span>{item.en}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </div>
              <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <CircleDot className="card-icon" />
            </article>
          ))}
        </div>
        <div className="tools-marquee" data-reveal>
          <div>FIGMA <i>+</i> PROTOPIE <i>+</i> AFTER EFFECTS <i>+</i> PHOTOSHOP <i>+</i> USER RESEARCH <i>+</i> DESIGN SYSTEM <i>+</i></div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="noise" aria-hidden="true" />
        <div className="contact-inner shell">
          <div className="contact-top" data-reveal>
            <span>04 / CONTACT</span>
            <p>有合适的项目，或只是想聊聊设计，<br />都欢迎来信。</p>
          </div>
          <div className="contact-main" data-reveal>
            <p>LET'S MAKE</p>
            <a href="mailto:lin.yue@example.com">SOMETHING<br /><em>MEANINGFUL.</em><MoveRight /></a>
          </div>
          <div className="contact-footer">
            <div><span>EMAIL</span><button onClick={copyEmail}>{copied ? '已复制邮箱' : 'lin.yue@example.com'}<Copy size={14} /></button></div>
            <div><span>SOCIAL</span><a href="https://behance.net/linyue" target="_blank" rel="noreferrer">BEHANCE <ArrowUpRight size={14} /></a></div>
            <div><span>LOCAL TIME</span><strong>HANGZHOU · GMT+8</strong></div>
            <p>© 2026 LIN YUE</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
