import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Brush,
  CircleCheck,
  Cpu,
  FileStack,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Sparkles,
  Stethoscope,
  Workflow,
} from 'lucide-react'

const uiScreens = [
  {
    no: '01',
    title: '系统入口',
    en: 'LOGIN PORTAL',
    copy: '以轻量 3D 与浅青背景建立数字化正畸系统的第一印象，传达专业、清洁、科技的品牌气质。',
    image: '/assets/aishinye-universe/login.jpg',
    span: 'wide',
  },
  {
    no: '02',
    title: '客户端设计工具',
    en: 'ORTHODONTIC CLIENT',
    copy: '承载 3D 牙模建模、片切、间隙与附件等专业操作，将高复杂度医学设计功能纳入稳定工具栏结构。',
    image: '/assets/aishinye-universe/client-slicing.jpg',
    span: 'wide',
  },
  {
    no: '03',
    title: 'AI 头影测量',
    en: 'CEPH ANALYSIS',
    copy: '围绕标志点、参考线、角度结果与报告看板组织暗色工作台，让影像判断过程可见、可追踪。',
    image: '/assets/aishinye-universe/ceph-analysis.jpg',
    span: 'wide',
  },
  {
    no: '04',
    title: '医生端首页',
    en: 'DOCTOR WORKSPACE',
    copy: '以 Web 工作台承载病例状态、快速操作与活动入口，让医生在横向桌面视野中完成病例跟进。',
    image: '/assets/aishinye-universe/doctor-home.jpg',
    span: 'wide',
    fit: 'contain',
  },
  {
    no: '05',
    title: '移动端系统主页',
    en: 'MOBILE CONSOLE',
    copy: '将账号开通、优惠券、医生、专家、病例、工单和报表管理收纳为轻量入口，方便运营角色在移动端快速处理基础事务。',
    image: '/assets/aishinye-universe/mobile-home.jpg',
    phone: true,
  },
  {
    no: '06',
    title: 'BO 方案 3D 预览',
    en: 'BO PLAN 3D PREVIEW',
    copy: '在 Web 端集中呈现牙模预览、方案版本、医生反馈和修改意见，帮助医生快速理解治疗方案并完成审阅决策。',
    image: '/assets/aishinye-universe/bo-plan-preview.jpg',
    fit: 'contain',
    bo: true,
  },
]

const ecosystem = [
  { icon: FileStack, title: '病例与订单', copy: '后台、医生端与移动端共同围绕病例数据展开。' },
  { icon: Cpu, title: 'AI 与医学工具', copy: '头影测量、3D 设计和临床分析构成专业能力层。' },
  { icon: Stethoscope, title: '医生服务触点', copy: '专家联诊、病例审阅、训练营与线上沙龙连接医生。' },
  { icon: Megaphone, title: '运营增长触点', copy: '活动页、福利券、IP 视觉和传播物料承担转化任务。' },
]

const operationCampaigns = [
  {
    no: '01',
    title: '医生成长计划',
    en: 'DOCTOR GROWTH PLAN',
    copy: '以奖章、证书、课程与礼盒建立激励体系，强化医生学习提升与荣誉认证。',
    image: '/assets/aishinye-universe/operations/doctor-growth-plan.jpg',
  },
  {
    no: '02',
    title: '病例征集大赛',
    en: 'CASE COLLECTION',
    copy: '围绕优秀病例征集、专家评审、成果展示与投稿指南，形成完整活动闭环。',
    image: '/assets/aishinye-universe/operations/case-collection.jpg',
  },
  {
    no: '03',
    title: '活动签到季',
    en: 'CHECK-IN CLUB',
    copy: '用签到、积分、兑换与荣誉勋章增强医生日常参与感和活动留存。',
    image: '/assets/aishinye-universe/operations/check-in-club.jpg',
  },
  {
    no: '04',
    title: '年终团购季',
    en: 'GROUP BUY RULES',
    copy: '把限购机制、病例权益、转发礼品与收货流程拆解为清晰可读的规则页面。',
    image: '/assets/aishinye-universe/operations/group-buy-rules.jpg',
  },
]

const campaignCapabilities = [
  { icon: Palette, title: '主视觉设定', copy: '根据活动目标切换色彩、3D 元素与情绪强度。' },
  { icon: PanelsTopLeft, title: '机制可视化', copy: '将复杂规则拆成步骤、时间、权益和提示模块。' },
  { icon: Megaphone, title: '多端延展', copy: '覆盖主 KV、海报、社媒图、H5、指南与活动说明。' },
]

const ipTraits = ['笑容识别符号', '荧光新芽绿', '圆润治愈体态', '可延展动作表情']

const ipPages = [
  ['/assets/aishinye-universe/smile-buddy/concept.jpg', 'IP 设计理念'],
  ['/assets/aishinye-universe/smile-buddy/basic-model.jpg', '基础造型规范'],
  ['/assets/aishinye-universe/smile-buddy/action-extension.jpg', '动作延展'],
  ['/assets/aishinye-universe/smile-buddy/expression-system.jpg', '表情系统'],
  ['/assets/aishinye-universe/smile-buddy/brand-application.jpg', '品牌应用规范'],
]

function UniverseFrameHeader({ no, label }) {
  return (
    <div className="case-frame-header universe-frame-header">
      <span>AI-SHINYE PRODUCT UNIVERSE</span>
      <span>{label}</span>
      <b>{no}</b>
    </div>
  )
}

function ProductUniverseDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="case-study universe-case">
      <nav className="case-nav universe-nav">
        <a href="#work"><ArrowLeft size={16} /> BACK TO WORKS</a>
        <strong>爱新芽产品宇宙</strong>
        <span>2021—2026</span>
      </nav>

      <section className="case-frame universe-hero">
        <UniverseFrameHeader no="01" label="PROJECT COVER" />
        <div className="universe-hero-copy">
          <p className="case-kicker">PRODUCT MATRIX / OPERATION DESIGN / BRAND IP</p>
          <h1>AI-Shinye<br /><em>Design Ecosystem</em></h1>
          <h2>爱新芽数字化正畸设计生态</h2>
          <p>
            围绕数字化正畸业务，将专业产品矩阵、医生运营活动和品牌 IP 串联为一套持续生长的设计生态。它不是单个界面或海报合集，而是产品体验、增长触点与品牌资产的系统化呈现。
          </p>
        </div>
        <div className="universe-hero-visual" aria-hidden="true">
          <div className="universe-board-main"><img src="/assets/aishinye-universe/operations/showreel-cover.jpg" alt="" /></div>
          <div className="universe-board-float"><img src="/assets/aishinye-universe/smile-buddy/cover.jpg" alt="" /></div>
        </div>
        <div className="universe-stat-strip">
          {['产品宇宙', '运营活动设计', 'Smile Buddy 品牌 IP'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="case-frame universe-position">
        <UniverseFrameHeader no="02" label="ECOSYSTEM POSITIONING" />
        <div className="case-section-title centered">
          <span>FROM PRODUCT TOUCHPOINT TO BRAND UNIVERSE</span>
          <h2>从产品矩阵，延展到<br />品牌运营触点</h2>
        </div>
        <div className="universe-ecosystem-grid">
          {ecosystem.map(({ icon: Icon, title, copy }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="universe-flow">
          {['产品入口', '专业工具', '医生服务', '运营活动', '品牌 IP'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="case-frame universe-ui">
        <UniverseFrameHeader no="03" label="PRODUCT UI MATRIX" />
        <div className="case-section-title">
          <span>REPRESENTATIVE PRODUCT PAGES</span>
          <h2>用代表性页面，呈现<br />爱新芽产品宇宙</h2>
        </div>
        <div className="universe-ui-wall">
          {uiScreens.map((screen) => (
            <article className={`${screen.span === 'wide' ? 'wide' : ''} ${screen.phone ? 'phone' : ''} ${screen.bo ? 'bo' : ''}`} key={screen.title}>
              <div className="universe-ui-meta">
                <b>{screen.no}</b>
                <span>{screen.en}</span>
                <h3>{screen.title}</h3>
                <p>{screen.copy}</p>
              </div>
              <div className={`universe-ui-screen ${screen.fit === 'contain' ? 'contain' : ''}`}>
                <img src={screen.image} alt={`${screen.title}界面`} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-frame universe-campaign">
        <UniverseFrameHeader no="04" label="OPERATION CAMPAIGN DESIGN" />
        <div className="case-section-title centered">
          <span>CAMPAIGN PROMOTION / CHECK-IN INTERACTION / DOCTOR ENGAGEMENT</span>
          <h2>把运营机制，转译成<br />高识别度活动视觉</h2>
        </div>
        <div className="universe-campaign-board">
          <img src="/assets/aishinye-universe/operations/showreel-cover.jpg" alt="爱新芽运营活动视觉合集封面" loading="lazy" />
        </div>
        <div className="universe-campaign-capabilities">
          {campaignCapabilities.map(({ icon: Icon, title, copy }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="universe-campaign-grid">
          {operationCampaigns.map((campaign) => (
            <article key={campaign.title}>
              <img src={campaign.image} alt={campaign.title} loading="lazy" />
              <div>
                <b>{campaign.no}</b>
                <span>{campaign.en}</span>
                <h3>{campaign.title}</h3>
                <p>{campaign.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-frame universe-ip">
        <UniverseFrameHeader no="05" label="SMILE BUDDY BRAND IP" />
        <div className="universe-ip-copy">
          <span>THE STORY OF SMILE BUDDY</span>
          <h2>让专业医疗品牌，<br />拥有可亲近的表情</h2>
          <p>
            Smile Buddy 以“笑容”为核心符号，将大牙齿、圆润体态和高饱和新芽绿融合成可记忆的品牌角色。它承担的不只是装饰功能，而是帮助品牌在活动、科普、周边、空间和数字界面里保持情绪一致。
          </p>
          <div className="universe-ip-tags">
            {ipTraits.map((trait) => <span key={trait}><CircleCheck size={14} />{trait}</span>)}
          </div>
        </div>
        <div className="universe-ip-hero">
          <img src="/assets/aishinye-universe/smile-buddy/cover.jpg" alt="Smile Buddy IP 封面" loading="lazy" />
        </div>
        <div className="universe-ip-pages">
          {ipPages.map(([src, label]) => (
            <figure key={label}>
              <img src={src} alt={label} loading="lazy" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-frame universe-impact">
        <UniverseFrameHeader no="06" label="DESIGN IMPACT" />
        <div className="case-section-title centered">
          <span>PRODUCT / BRAND / OPERATION</span>
          <h2>让同一个品牌，<br />在不同触点里保持一致</h2>
        </div>
        <div className="universe-impact-grid">
          <article><Workflow /><b>01</b><h3>产品生态化</h3><p>把后台、工具、医生端与移动端放进统一产品矩阵。</p></article>
          <article><Boxes /><b>02</b><h3>视觉系统化</h3><p>用色彩、组件、3D 语言和版式保持品牌识别。</p></article>
          <article><Brush /><b>03</b><h3>IP 资产化</h3><p>让角色形象成为活动、科普和品牌传播的长期资产。</p></article>
          <article><Sparkles /><b>04</b><h3>运营活动化</h3><p>将专业产品能力转译为更易传播的活动视觉。</p></article>
        </div>
        <p className="universe-closing">
          第三个 Works 的重点，是把爱新芽从“一个产品项目”讲成“一个设计生态”：前端有专业可信的正畸产品矩阵，中间有围绕医生增长与转化的运营活动，外层则用 Smile Buddy 建立更亲和、更可传播的品牌资产。
        </p>
        <a className="next-project universe-next" href="#work"><span>BACK TO SELECTED WORK</span><ArrowUpRight /></a>
      </section>
    </main>
  )
}

export default ProductUniverseDetail
