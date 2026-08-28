import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProjectPage from './ProjectPage'
import './App.css'


const services = [
  {
    number: '01',
    title: 'Web Design',
    text: 'Продуманный дизайн сайтов с акцентом на типографику, композицию и удобство.',
  },
  {
    number: '02',
    title: 'Development',
    text: 'Адаптивная разработка быстрых современных сайтов на React.',
  },
  {
    number: '03',
    title: 'Brand Identity',
    text: 'Визуальный стиль, который помогает бренду выглядеть узнаваемо.',
  },
]


const projects = [
  {
    number: '01',
    title: 'LUMEN',
    slug: 'lumen',
    category: 'Digital fashion',
    year: '2026',
    className: 'project-purple',
  },
  {
    number: '02',
    title: 'FORMA',
    slug: 'forma',
    category: 'Architecture',
    year: '2026',
    className: 'project-orange',
  },
  {
    number: '03',
    title: 'VOID',
    slug: 'void',
    category: 'Technology',
    year: '2025',
    className: 'project-blue',
  },
]
function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .project-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      {
        threshold: 0.15,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  
  return (
    <main className="site">
      <nav className="navbar">
        <a className="logo" href="#">
          NOVA<span>®</span>
        </a>

        <div className="nav-links">
          <a href="#work">Работы</a>
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </div>

        <a className="nav-button" href="#contact">
          Обсудить проект
        </a>
      </nav>

      <section className="hero">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <p className="eyebrow">DIGITAL DESIGN STUDIO · 2026</p>

        <h1>
          Создаём сайты,
          <br />
          которые хочется
          <br />
          <span>рассматривать.</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            Дизайн и разработка цифровых продуктов для брендов,
            которым недостаточно просто «нормального сайта».
          </p>

          <a href="#work" className="round-button">
            <span>Смотреть</span>
            <span>проекты ↘</span>
          </a>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>SELECTED PROJECT</span>
            <span>001 / 024</span>
          </div>

          <div className="visual">
            <div className="orb"></div>
            <div className="glass-panel">
              <small>NEW EXPERIENCE</small>
              <strong>Beyond ordinary.</strong>
            </div>
          </div>

          <div className="hero-card-bottom">
            <div>
              <small>CLIENT</small>
              <p>Archetype Lab</p>
            </div>

            <div>
              <small>SERVICE</small>
              <p>Web / Identity</p>
            </div>

            <div>
              <small>YEAR</small>
              <p>2026</p>
            </div>
          </div>
        </div>
      </section>

<section className="services reveal" id="services">        <div className="section-heading">
          <p>Что мы делаем</p>
          <h2>
            Идея. Дизайн.
            <br />
            Код.
          </h2>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button aria-label={`Подробнее о ${service.title}`}>↗</button>
            </article>
          ))}
        </div>
      </section>
<section className="work reveal" id="work">
  <div className="work-heading">
    <div>
      <p className="eyebrow">SELECTED WORK · 2025—2026</p>

      <h2>
        Избранные
        <br />
        <span>проекты.</span>
      </h2>
    </div>

    <p className="work-description">
      Несколько цифровых проектов, в которых дизайн,
      типографика и технология работают как единая система.
    </p>
  </div>

  <div className="projects-grid">
    {projects.map((project) => (
  <Link
    to={`/project/${project.slug}`}
    className="project-link"
    key={project.number}
  >
    <article
      className="project-card project-reveal"
      style={{ '--delay': `${project.number * 0.12}s` }}
    >
      <div className={`project-preview ${project.className}`}>
        <span className="project-number">
          {project.number}
        </span>

        <div className="project-object">
          <span>{project.title}</span>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>

        <div>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  </Link>
))}
  </div>
</section>

<section className="project-section reveal">     <div className="project-copy">
          <p className="eyebrow">FEATURED WORK</p>
          <h2>
            Не просто
            <br />
            красиво.
            <br />
            <span>Осмысленно.</span>
          </h2>

          <p>
            Каждый элемент интерфейса должен выполнять задачу.
            Красота без функции быстро превращается в декорацию.
          </p>
        </div>

        <div className="project-art">
          <div className="art-window">
            <div className="art-nav">
              <span>MONO / 02</span>
              <span>•••</span>
            </div>

            <div className="art-title">
              <small>EXPERIMENTAL</small>
              <strong>MONOLITH</strong>
            </div>

            <div className="monolith"></div>
          </div>
        </div>
      </section>

<section className="contact reveal" id="contact">        <p>Есть идея?</p>

        <h2>
          Давайте сделаем
          <br />
          что-нибудь <span>крутое.</span>
        </h2>

        <a href="mailto:hello@example.com">hello@example.com ↗</a>
      </section>

      <footer>
        <a className="logo" href="#">
          NOVA<span>®</span>
        </a>

        <p>Design & Development</p>
        <p>© 2026</p>
      </footer>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

export default App