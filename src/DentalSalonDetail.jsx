import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  CalendarClock,
  CircleCheck,
  Mic2,
  MonitorUp,
  PanelRightOpen,
  Radio,
  ScreenShare,
  Search,
  Sparkles,
  Stethoscope,
  UsersRound,
} from 'lucide-react'

const roomStats = [
  ['00:15:42', 'LIVE DURATION', '直播进行时长'],
  ['3,980', 'LIKES', '本场获赞'],
  ['8,370', 'VIEWERS', '在线观看'],
]

const challenges = [
  ['01', '多人课堂秩序', '主持、联席主持、嘉宾、观众与小助手同时在线，需要清晰表达角色、权限与麦克风状态。'],
  ['02', '临床内容优先', '头影测量、3D 牙模与病例软件共享需要成为视觉中心，会议控件不能干扰医生理解。'],
  ['03', '互动节奏可控', '连麦、聊天、点赞与成员管理都要即时可用，但不能把专业课程变成混乱讨论。'],
  ['04', '大规模在线承载', '上千名医生观看时，系统要让主持方实时感知热度，并快速处理成员与连麦请求。'],
]

const principles = [
  { title: 'Clinical First', copy: '把病例、影像和牙模放到视觉主位。', icon: Stethoscope },
  { title: 'Role Clarity', copy: '以标签、头像、状态建立课堂秩序。', icon: BadgeCheck },
  { title: 'Low-noise Control', copy: '保留高频操作，弱化非必要干扰。', icon: Blocks },
]

const features = [
  {
    no: '04',
    eyebrow: 'MULTI-SPEAKER ROOM',
    title: '多人线上沙龙空间',
    subtitle: '让大规模直播课堂保持清晰参与关系',
    copy: '九宫格布局承载主持人、嘉宾、联席主持与演示窗口。角色标签、麦克风状态、暂未入场和暂时离开等反馈被放在卡片边缘，既可快速识别，又不打断课程观看。',
    image: '/assets/xueya/salon-grid.png',
    tags: ['9-grid room', 'Role tags', 'Mute state', 'Live metrics'],
  },
  {
    no: '05',
    eyebrow: 'SCREEN SHARING',
    title: '临床内容共享演示',
    subtitle: '把病例演示从会议画面中提到主舞台',
    copy: '共享模式将 3D 牙模与口腔医学软件置于最大展示区域，右侧保留嘉宾缩略窗口，底部仅保留核心控制。医生可以专注观察病例细节，同时保持课堂互动。',
    image: '/assets/xueya/screen-share.png',
    tags: ['3D dental model', 'Case demo', 'Presenter focus', 'Toolbar hierarchy'],
    reverse: true,
  },
  {
    no: '06',
    eyebrow: 'MEMBER MANAGEMENT',
    title: '成员与角色管理',
    subtitle: '为主持方建立实时课堂控制层',
    copy: '成员管理面板区分主讲与观众，支持搜索、身份识别、在线时长与更多权限操作。它让主持人在直播过程中快速判断谁在场、谁可发言、谁需要被管理。',
    image: '/assets/xueya/member-management.png',
    tags: ['Speaker / Audience', 'Search', 'Role permission', 'Online state'],
  },
]

function SalonFrameHeader({ no, label }) {
  return (
    <div className="case-frame-header salon-frame-header">
      <span>XUEYA ONLINE SALON</span>
      <span>{label}</span>
      <b>{no}</b>
    </div>
  )
}

function DentalSalonDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="case-study salon-case">
      <nav className="case-nav salon-nav">
        <a href="#work"><ArrowLeft size={16} /> BACK TO WORKS</a>
        <strong>学牙网线上沙龙</strong>
        <span>2026</span>
      </nav>

      <section className="case-frame salon-hero">
        <SalonFrameHeader no="01" label="PROJECT COVER" />
        <div className="salon-hero-copy">
          <p className="case-kicker">DENTAL EDUCATION / LIVE CLASSROOM / UI DESIGN</p>
          <h1>Clinical Live Room<br /><em>for Dental Learning</em></h1>
          <h2>学牙网线上沙龙</h2>
          <p>
            为口腔医生继续教育场景设计的线上沙龙系统，支持多人直播、病例软件共享、3D 牙模演示、成员管理与连麦互动。它不是普通会议界面，而是面向专业课程的远程临床学习空间。
          </p>
          <a href="https://kqcs.cn/kqcs/zh-hans/%E5%9F%B9%E8%AE%AD/%E5%AD%A6%E7%89%99%E7%BD%91" target="_blank" rel="noreferrer">
            学牙网口腔医学信息网 <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="salon-hero-visual" aria-hidden="true">
          <div className="salon-device-main"><img src="/assets/xueya/screen-share.png" alt="" /></div>
          <div className="salon-device-float"><img src="/assets/xueya/mic-queue.png" alt="" /></div>
          <div className="salon-orb orb-a" />
          <div className="salon-orb orb-b" />
        </div>
        <div className="salon-stat-strip">
          {roomStats.map(([value, label, cn]) => (
            <article key={label}><b>{value}</b><span>{label}</span><p>{cn}</p></article>
          ))}
        </div>
      </section>

      <section className="case-frame salon-context">
        <SalonFrameHeader no="02" label="PROJECT POSITIONING" />
        <div className="case-section-title">
          <span>FROM WEBINAR TO CLINICAL CLASSROOM</span>
          <h2>把线上直播，转化为<br />专业口腔学习现场</h2>
        </div>
        <div className="salon-context-grid">
          <p>
            学牙网专注于口腔医学教育与医生进修，课程覆盖种植、正畸、修复及诊所管理等核心学科。线上沙龙需要同时承载课程发布、专家分享、病例讲解与同行交流。
          </p>
          <div>
            <strong>A classroom, a conference room, and a clinical demo table in one interface.</strong>
            <span>一个界面，同时承担课堂、会议室与病例演示台。</span>
          </div>
        </div>
        <div className="salon-principles">
          {principles.map(({ title, copy, icon: Icon }) => (
            <article key={title}><Icon /><b>{title}</b><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="case-frame salon-challenge">
        <SalonFrameHeader no="03" label="DESIGN CHALLENGE" />
        <div className="case-section-title centered">
          <span>COMPLEXITY BEHIND THE ROOM</span>
          <h2>复杂的不只是直播，<br />而是专业学习秩序</h2>
        </div>
        <div className="salon-challenge-grid">
          {challenges.map(([no, title, copy]) => (
            <article key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {features.map((feature) => (
        <section className={`case-frame salon-feature ${feature.reverse ? 'reverse' : ''}`} key={feature.no}>
          <SalonFrameHeader no={feature.no} label={feature.eyebrow} />
          <div className="salon-feature-copy">
            <span>{feature.eyebrow}</span>
            <h2>{feature.title}</h2>
            <h3>{feature.subtitle}</h3>
            <p>{feature.copy}</p>
            <div>{feature.tags.map((tag) => <i key={tag}>{tag}</i>)}</div>
          </div>
          <div className="salon-feature-screen">
            <img src={feature.image} alt={`${feature.title}界面`} loading="lazy" />
          </div>
        </section>
      ))}

      <section className="case-frame salon-queue">
        <SalonFrameHeader no="07" label="MICROPHONE QUEUE" />
        <div className="salon-queue-copy">
          <span>CONTROLLED INTERACTION</span>
          <h2>可控互动，<br />而不是无序发言</h2>
          <p>
            连麦列表将“已连麦”和“申请连麦”分开处理，主持人可以查看医生身份、连麦次数与上次连麦时间。它把直播提问变成可管理的队列，适合病例提问、专家答疑和临床讨论。
          </p>
          <div className="queue-points">
            {['Connected users', 'Request queue', 'Identity tags', 'Last connected'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="salon-phone-wrap">
          <img src="/assets/xueya/mic-queue.png" alt="连麦列表界面" loading="lazy" />
        </div>
      </section>

      <section className="case-frame salon-system">
        <SalonFrameHeader no="08" label="VISUAL SYSTEM" />
        <div className="case-section-title centered">
          <span>CALM / PROFESSIONAL / CLINICAL</span>
          <h2>用轻量视觉语言，<br />支撑高密度医学内容</h2>
        </div>
        <div className="salon-system-grid">
          <article><div className="salon-color-bars"><i /><i /><i /><i /></div><b>Color</b><p>浅灰承载会议空间，淡蓝突出病例演示，青色作为工具与共享状态提示。</p></article>
          <article><MonitorUp /><b>Layout</b><p>大画面优先，小窗辅助，操作栏固定底部，让医生始终知道课程主焦点。</p></article>
          <article><Mic2 /><b>Status</b><p>麦克风、角色、入场与离开状态被压缩为边缘信息，降低视觉噪声。</p></article>
          <article><Search /><b>Control</b><p>搜索、分组、队列和权限菜单形成主持方的课堂管理层。</p></article>
        </div>
      </section>

      <section className="case-frame salon-impact">
        <SalonFrameHeader no="09" label="IMPACT" />
        <div className="case-section-title centered">
          <span>FROM MEETING TOOL TO LEARNING ROOM</span>
          <h2>为口腔医生建立<br />清晰、可信、可互动的线上课堂</h2>
        </div>
        <div className="salon-impact-grid">
          <article><Radio /><b>01</b><h3>直播课堂化</h3><p>让大规模观看与专家授课保持清晰秩序。</p></article>
          <article><ScreenShare /><b>02</b><h3>病例演示优先</h3><p>强化医学图像、3D 牙模和共享软件的观看体验。</p></article>
          <article><UsersRound /><b>03</b><h3>角色管理清晰</h3><p>主持、嘉宾、观众与助手拥有明确状态与权限。</p></article>
          <article><PanelRightOpen /><b>04</b><h3>互动可管理</h3><p>连麦和成员操作被收纳为可控队列。</p></article>
        </div>
        <p className="salon-closing">
          这个项目的设计目标不是复制通用会议软件，而是为口腔医学继续教育建立一个更适合临床讲解、专家交流和医生进修的专业线上沙龙空间。
        </p>
        <a className="next-project salon-next" href="#work"><span>BACK TO SELECTED WORK</span><ArrowUpRight /></a>
      </section>
    </main>
  )
}

export default DentalSalonDetail
