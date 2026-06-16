import { useEffect } from 'react'
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  CircleCheck,
  ClipboardCheck,
  Factory,
  FileStack,
  HeartPulse,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users,
  Workflow,
} from 'lucide-react'

const challenges = [
  ['01', '多模态病例资料', '患者信息、面像、口内照、X 光片、口扫模型与治疗记录需要统一归档。'],
  ['02', '多角色协同', '诊所、医生、设计师、工厂与运营人员在同一病例链路中承担不同任务。'],
  ['03', '长周期追踪', '从初诊到复诊调整跨越多个阶段，任何节点都需要可追踪、可回溯。'],
  ['04', '医工流程耦合', '医生确认后的临床方案直接驱动生产，制造进度又影响患者治疗节奏。'],
]

const roles = [
  { name: '诊所', en: 'CLINIC', icon: HeartPulse, copy: '建档 / 分配 / 跟进' },
  { name: '医生', en: 'DOCTOR', icon: Stethoscope, copy: '审阅 / 决策 / 复诊' },
  { name: '患者', en: 'PATIENT', icon: Users, copy: '反馈 / 上传 / 咨询' },
  { name: '工厂', en: 'FACTORY', icon: Factory, copy: '排产 / 质检 / 发货' },
  { name: '运营', en: 'ADMIN', icon: ShieldCheck, copy: '权限 / 监控 / 预警' },
]

const serviceSteps = ['患者建档', '资料采集', '医生审阅', '方案设计', '方案确认', '工单生成', '工厂生产', '质检发货', '患者佩戴', '远程反馈', '复诊调整']

const architecture = [
  ['病例中心', '患者档案 / 口扫数据 / 影像资料 / 治疗记录'],
  ['方案中心', '方案提交 / 医生审阅 / 修改意见 / 版本记录'],
  ['工单中心', '任务创建 / 状态流转 / 排期协同 / 异常处理'],
  ['生产追踪', '工厂接单 / 制作进度 / 质检状态 / 发货物流'],
  ['医患互动', '佩戴反馈 / 照片上传 / 复诊提醒 / 远程跟进'],
  ['运营与权限', '数据看板 / 组织管理 / 角色配置 / 风险预警'],
]

const features = [
  {
    no: '10', eyebrow: 'CASE MANAGEMENT', title: '病例中心', sub: '让患者资料成为可追踪的数据资产',
    copy: '将患者基础信息、口扫模型、医学影像、治疗记录与医生反馈统一归档，让不同角色快速判断病例阶段、资料完整度与处理优先级。',
    image: '/assets/aishinye/case-list.jpg', tags: ['高频筛选', '状态标签', '资料完整度', '风险标记'],
  },
  {
    no: '11', eyebrow: 'CLINICAL REVIEW', title: '方案审阅', sub: '把医生决策流程化、可回溯化',
    copy: '通过方案版本、审阅意见、退回原因与审批状态，将多轮治疗方案沟通沉淀为一条清晰的临床决策链路。',
    image: '/assets/aishinye/plan-review.jpg', tags: ['版本记录', '审阅意见', '修改留痕', '方案确认'], reverse: true,
  },
  {
    no: '12', eyebrow: 'WORK ORDER', title: '工单中心', sub: '连接治疗方案与矫治器生产',
    copy: '方案确认后，病例数据、生产要求、交付时间与执行负责人被自动带入工单，临床端与工厂端围绕同一任务协同。',
    image: '/assets/aishinye/work-order.jpg', tags: ['关联病例', '任务状态', '预计交付', '操作日志'],
  },
  {
    no: '13', eyebrow: 'MANUFACTURING', title: '生产追踪', sub: '让矫治器制造过程透明可控',
    copy: '从数据检查、排产制作到质检发货，生产节点持续同步。诊所与医生能够提前识别延期、返工和资料异常。',
    image: '/assets/aishinye/production.jpg', tags: ['排产计划', '节点提醒', '质量记录', '异常反馈'], reverse: true,
  },
  {
    no: '14', eyebrow: 'REMOTE CARE', title: '医患互动', sub: '让治疗跟进不止发生在诊室内',
    copy: '围绕阶段照片、佩戴反馈、复诊计划与医生建议建立远程随访记录，让长期治疗中的每次变化都可以被及时发现。',
    image: '/assets/aishinye/follow-up.jpg', tags: ['阶段影像', '远程判断', '复诊提醒', '医患记录'],
  },
]

function FrameHeader({ no, label }) {
  return (
    <div className="case-frame-header">
      <span>AI-SHINYE DIGITAL ORTHODONTIC CLOUD CONSOLE</span>
      <span>{label}</span>
      <b>{no}</b>
    </div>
  )
}

function ProjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="case-study">
      <nav className="case-nav">
        <a href="#work"><ArrowLeft size={16} /> BACK TO WORKS</a>
        <img src="/assets/aishinye/logo.png" alt="爱新芽 Ai-Shinye" />
        <span>2021—2026</span>
      </nav>

      <section className="case-hero case-frame">
        <FrameHeader no="01" label="PROJECT COVER" />
        <div className="case-hero-copy">
          <p className="case-kicker">AI-SHINYE MEDICAL TECHNOLOGY</p>
          <h1>Digital Orthodontic<br /><em>Cloud Console</em></h1>
          <h2>爱新芽数字化正畸云端协作后台</h2>
          <p>支撑隐形正畸产品交付的全流程云端协作平台。连接诊所、医生、患者与工厂，覆盖病例归档、方案审阅、工单生产、交付追踪与远程治疗跟进。</p>
        </div>
        <div className="case-hero-visual" aria-hidden="true">
          <div className="orthodontic-orbit orbit-one" />
          <div className="orthodontic-orbit orbit-two" />
          <div className="hero-screen"><img src="/assets/aishinye/cover.jpg" alt="" /></div>
          <div className="hero-screen secondary"><img src="/assets/aishinye/case-detail.jpg" alt="" /></div>
        </div>
        <div className="case-scroll-mark">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="case-frame case-intro">
        <FrameHeader no="02" label="PROJECT POSITIONING" />
        <div className="case-section-title">
          <span>FROM BRAND TO SYSTEM</span>
          <h2>从爱新芽产品服务，<br />到数字化交付系统</h2>
        </div>
        <div className="case-intro-grid">
          <div className="intro-statement">隐形正畸产品的交付<br />远不止一副矫治器。</div>
          <p>它背后包含患者资料采集、医生诊断、数字化方案设计、工厂生产制造、物流交付和长期佩戴跟进。后台系统承担“业务中台”的角色，把前端服务、临床决策与后端生产连接起来。</p>
        </div>
        <div className="brand-system-line">
          <span>PRODUCT &amp; SERVICE</span><i>→</i><b>AI-SHINYE CLOUD CONSOLE</b><i>→</i><span>DELIVERY &amp; FOLLOW-UP</span>
        </div>
      </section>

      <section className="case-frame strategy-section">
        <FrameHeader no="03" label="WHY / WHAT / HOW" />
        <div className="case-section-title centered">
          <span>END-TO-END ORTHODONTIC PERSPECTIVE</span>
          <h2>站在正畸全流程视角，<br />重构多角色协作效率</h2>
        </div>
        <div className="why-grid">
          <article><b>WHY</b><h3>为什么做</h3><p>业务链路长、资料分散、流程状态不透明，跨角色沟通成本持续上升。</p></article>
          <article><b>WHAT</b><h3>做什么</h3><p>将病例、方案、工单、生产、物流与反馈统一纳入云端协作平台。</p></article>
          <article><b>HOW</b><h3>怎么做</h3><p>以标准化数据、状态流转、权限机制和过程追踪建立数字化闭环。</p></article>
        </div>
      </section>

      <section className="case-frame challenge-section">
        <FrameHeader no="04" label="DESIGN CHALLENGE" />
        <div className="case-section-title centered">
          <span>COMPLEXITY BEHIND THE INTERFACE</span>
          <h2>复杂的不只是后台页面，<br />而是正畸服务交付链路</h2>
        </div>
        <div className="challenge-grid">
          {challenges.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="case-frame ecosystem-section">
        <FrameHeader no="05" label="PLATFORM ECOSYSTEM" />
        <div className="case-section-title">
          <span>MULTI-ROLE COLLABORATION</span>
          <h2>以病例为核心，<br />连接全链路角色</h2>
        </div>
        <div className="ecosystem-map">
          <div className="ecosystem-center"><Workflow /><strong>AI-SHINYE</strong><span>ORTHODONTIC CLOUD</span></div>
          {roles.map(({ name, en, icon: Icon, copy }, index) => (
            <article key={name} style={{ '--role-index': index }}><Icon /><b>{name}</b><span>{en}</span><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="case-frame loop-section">
        <FrameHeader no="06" label="SERVICE LOOP" />
        <div className="case-section-title centered">
          <span>ORTHODONTIC SERVICE LOOP</span>
          <h2>从病例提交到治疗跟进，<br />形成服务闭环</h2>
        </div>
        <div className="service-loop">
          <div className="loop-core"><Activity /><strong>CASE</strong><span>病例数据持续流转</span></div>
          <div className="loop-steps">{serviceSteps.map((step, index) => <span key={step} style={{ '--step-index': index }}>{step}</span>)}</div>
        </div>
        <p className="loop-caption">病例流转 / 方案确认 / 工单生产 / 交付追踪 / 佩戴反馈</p>
      </section>

      <section className="case-frame target-section">
        <FrameHeader no="07" label="TARGET AREA" />
        <div className="case-section-title">
          <span>HIGH-VALUE COLLABORATION AREA</span>
          <h2>聚焦高频协作与<br />高风险异常节点</h2>
        </div>
        <div className="target-chart">
          <span className="axis axis-y">流程决策 ↑</span><span className="axis axis-x">临床诊疗 → 生产履约</span>
          {['病例建档', '资料审核', '方案审阅', '工单创建', '生产排期', '质检发货', '物流追踪', '异常处理'].map((item, index) => <i key={item} style={{ left: `${10 + (index % 4) * 26}%`, top: `${15 + Math.floor(index / 4) * 55}%` }}>{item}</i>)}
          <div><b>HIGH VALUE</b><span>核心设计范围</span></div>
        </div>
      </section>

      <section className="case-frame evolution-section">
        <FrameHeader no="08" label="PRODUCT EVOLUTION" />
        <div className="case-section-title centered">
          <span>V1.0 — V3.0</span>
          <h2>3 个阶段搭建数字化<br />正畸协作中枢</h2>
        </div>
        <div className="evolution-line">
          <article><b>V1.0</b><h3>病例管理基础版</h3><p>结构化建档、资料上传、医生分配与基础状态管理。</p></article>
          <article className="active"><b>V2.0</b><h3>工单协作增强版</h3><p>打通方案审阅、工单创建、工厂接单与生产追踪。</p></article>
          <article><b>V3.0</b><h3>全流程运营中枢</h3><p>加入远程互动、异常预警、数据看板与权限体系。</p></article>
        </div>
      </section>

      <section className="case-frame architecture-section">
        <FrameHeader no="09" label="INFORMATION ARCHITECTURE" />
        <div className="case-section-title">
          <span>CASE-CENTERED ARCHITECTURE</span>
          <h2>围绕病例主链路，<br />重组后台信息架构</h2>
        </div>
        <div className="architecture-core"><FileStack /><b>病例 CASE</b><span>连接临床、生产与服务的核心数据对象</span></div>
        <div className="architecture-grid">
          {architecture.map(([title, copy]) => <article key={title}><CircleCheck /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      {features.map((feature) => (
        <section className={`case-frame feature-section ${feature.reverse ? 'reverse' : ''}`} key={feature.no}>
          <FrameHeader no={feature.no} label={feature.eyebrow} />
          <div className="feature-copy">
            <span>{feature.eyebrow}</span><h2>{feature.title}</h2><h3>{feature.sub}</h3><p>{feature.copy}</p>
            <div>{feature.tags.map(tag => <i key={tag}>{tag}</i>)}</div>
          </div>
          <div className="feature-screen"><img src={feature.image} alt={`${feature.title}界面`} loading="lazy" /></div>
        </section>
      ))}

      <section className="case-frame dashboard-section">
        <FrameHeader no="15" label="OPERATION DASHBOARD" />
        <div className="dashboard-copy">
          <span>FROM PROCESS TO INSIGHT</span><h2>运营看板</h2><h3>从流程管理到业务洞察</h3>
          <p>病例、方案、工单与治疗反馈被系统化记录后，管理者可以快速识别流程瓶颈、异常风险与协作效率。</p>
        </div>
        <div className="dashboard-stats">
          <article><b>3,891</b><span>累计病例</span></article><article><b>90</b><span>进行中病例</span></article><article><b>10</b><span>待审阅方案</span></article><article><b>96%</b><span>生产完成率</span></article>
        </div>
        <div className="dashboard-screen"><img src="/assets/aishinye/cover.jpg" alt="运营工作台界面" loading="lazy" /></div>
      </section>

      <section className="case-frame visual-section">
        <FrameHeader no="16" label="VISUAL LANGUAGE" />
        <div className="case-section-title centered"><span>PROFESSIONAL / TRUSTWORTHY / CLEAR</span><h2>定义爱新芽后台的<br />视觉语言</h2></div>
        <div className="visual-system">
          <article><div className="arch-shape" /><b>SHAPE</b><h3>牙弓与节点</h3><p>从牙弓曲线、透明牙套轮廓和流程节点提取图形语言。</p></article>
          <article><div className="color-swatches"><i /><i /><i /><i /></div><b>COLOR</b><h3>科技与临床</h3><p>以 #5260FE 为品牌主色，结合医疗青与状态色建立识别。</p></article>
          <article><div className="texture-sample" /><b>TEXTURE</b><h3>透明与精密</h3><p>通过网格、半透明材质和柔和光晕强化数字医疗气质。</p></article>
          <article><div className="type-sample">Aa<small>正畸云端协作</small></div><b>TYPE</b><h3>清晰的信息层级</h3><p>大标题、低饱和辅助文字与数据强调保证快速扫视判断。</p></article>
        </div>
      </section>

      <section className="case-frame system-section">
        <FrameHeader no="17" label="DESIGN SYSTEM" />
        <div className="system-image"><img src="/assets/aishinye/drawer.jpg" alt="爱新芽组件界面" loading="lazy" /></div>
        <div className="system-copy"><span>SCALABLE DESIGN ASSETS</span><h2>从页面设计，<br />到组件资产沉淀</h2><p>将患者信息卡、状态标签、上传器、审批操作组、工单节点和生产时间轴沉淀为可复用组件，支撑后台持续扩展。</p><div><b>40+</b><span>核心组件</span><b>11</b><span>业务模块</span></div></div>
      </section>

      <section className="case-frame key-pages-section">
        <FrameHeader no="18" label="KEY PAGES" />
        <div className="case-section-title"><span>END-TO-END EXPERIENCE</span><h2>覆盖正畸服务全流程的<br />核心后台页面</h2></div>
        <div className="page-wall">
          {[
            ['/assets/aishinye/case-analysis.jpg', '病例分析'], ['/assets/aishinye/review.jpg', '资料审核'], ['/assets/aishinye/case-detail.jpg', '病例详情'], ['/assets/aishinye/shipping.jpg', '出库发货'], ['/assets/aishinye/patient-form.jpg', '患者资料采集'], ['/assets/aishinye/plan-review.jpg', '方案审阅'],
          ].map(([src, label], index) => <figure key={label} style={{ '--page-index': index }}><img src={src} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>)}
        </div>
      </section>

      <section className="case-frame impact-section">
        <FrameHeader no="19" label="IMPACT" />
        <div className="case-section-title centered"><span>FROM TOOL TO COLLABORATION HUB</span><h2>从后台工具，到爱新芽<br />正畸服务协作中枢</h2></div>
        <div className="impact-grid">
          <article><ClipboardCheck /><b>01</b><h3>流程可视化</h3><p>复杂治疗状态统一到一条可追踪链路。</p></article>
          <article><Boxes /><b>02</b><h3>协作标准化</h3><p>以权限、状态与提醒减少重复沟通。</p></article>
          <article><PackageCheck /><b>03</b><h3>交付透明化</h3><p>生产、质检、物流进度持续同步。</p></article>
          <article><Truck /><b>04</b><h3>数据资产化</h3><p>临床与生产记录可分析、可回溯。</p></article>
        </div>
        <p className="impact-closing">设计目标不是单纯美化后台，而是通过系统化设计重构隐形正畸产品的交付方式，让诊疗流程、生产履约与患者跟进形成真正的数字化闭环。</p>
        <a className="next-project" href="#work"><span>BACK TO SELECTED WORK</span><ArrowUpRight /></a>
      </section>
    </main>
  )
}

export default ProjectDetail
