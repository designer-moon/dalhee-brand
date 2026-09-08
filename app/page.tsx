const disciplines = [
  ["01", "Brand direction", "브랜드의 말투와 시각 언어를 한 방향으로 정렬합니다."],
  ["02", "Digital experience", "웹과 제품의 접점이 자연스럽게 이어지는 경험을 설계합니다."],
  ["03", "AI-powered making", "새로운 도구를 빠르게 익혀 아이디어를 실제 결과물로 전환합니다."],
];

const signals = ["Brand systems", "Responsive web", "Creative direction", "AI workflows", "Visual storytelling"];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="주요 탐색"><a className="monogram" href="#top" aria-label="홈">DM.</a><div className="navLinks"><a href="#about">About</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div></nav>
    <section className="hero" id="top">
      <div className="eyebrow"><span /> Seoul · Open to good ideas</div>
      <h1>Ideas into<br /><em>living brands.</em></h1>
      <div className="heroBottom"><p className="intro">안녕하세요, moon입니다.<br />브랜드의 감각을 발견하고, 디지털 경험과 시스템으로 완성하는 디자이너입니다.</p><a className="roundLink" href="#about" aria-label="소개 보기">↓</a></div>
      <div className="orbit" aria-hidden="true"><span>DESIGN · BRAND · AI · </span></div>
    </section>
    <section className="statement" id="about"><p className="sectionLabel">01 / About</p><div><h2>감각은 시작이고,<br />시스템이 완성입니다.</h2><p>흩어진 아이디어에서 핵심을 찾고, 누구나 일관되게 경험할 수 있는 브랜드로 만듭니다. 최근에는 AI를 창작의 지름길이 아닌, 생각의 폭과 실행의 밀도를 높이는 동료로 활용하고 있습니다.</p></div></section>
    <section className="marquee" aria-label="전문 영역"><div>{[...signals, ...signals].map((signal, index) => <span key={`${signal}-${index}`}>{signal} ✦</span>)}</div></section>
    <section className="approach" id="approach">
      <div className="approachHead"><p className="sectionLabel">02 / What I do</p><h2>From first thought<br />to final touch.</h2></div>
      <div className="disciplineList">{disciplines.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}</div>
    </section>
    <section className="proof"><p className="sectionLabel">03 / Current focus</p><div className="proofCard"><p>NOW EXPLORING</p><h2>Beauty, wellness<br />& intelligent design.</h2><div className="proofMeta"><span>브랜드 아키텍처</span><span>디자인 시스템</span><span>AI 크리에이티브</span></div></div></section>
    <footer id="contact"><p className="sectionLabel">04 / Let&apos;s connect</p><h2>Good work starts<br />with a good conversation.</h2><div className="footerRow"><p>새로운 브랜드, 더 나은 경험, 재미있는 실험을 함께 이야기해요.</p><a href="https://github.com/designer-moon" target="_blank" rel="noreferrer">GitHub ↗</a></div><div className="signature">moon</div></footer>
  </main>;
}
