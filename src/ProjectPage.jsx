import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './App.css'

const projectData = {
  lumen: {
    number: '01',
    title: 'LUMEN',
    category: 'Digital Fashion',
    year: '2026',
    description:
      'Экспериментальный цифровой проект на стыке моды, типографики и интерактивного веб-дизайна.',
    className: 'project-purple',
  },

  forma: {
    number: '02',
    title: 'FORMA',
    category: 'Architecture',
    year: '2026',
    description:
      'Минималистичная цифровая айдентика и веб-интерфейс для современной архитектурной студии.',
    className: 'project-orange',
  },

  void: {
    number: '03',
    title: 'VOID',
    category: 'Technology',
    year: '2025',
    description:
      'Футуристичный интерфейс технологического продукта с акцентом на глубину, движение и атмосферу.',
    className: 'project-blue',
  },
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projectData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <main className="project-page">
        <h1>Проект не найден</h1>
        <Link to="/">← На главную</Link>
      </main>
    )
  }

  return (
    <main className="project-page">
      <nav className="project-page-nav">
        <Link className="logo" to="/">
          NOVA<span>®</span>
        </Link>

        <Link className="back-link" to="/">
          ← Все проекты
        </Link>
      </nav>

      <section className="project-page-hero">
        <div className="project-page-meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h1>{project.title}</h1>

        <p>{project.description}</p>
      </section>

      <section className={`project-page-visual ${project.className}`}>
        <div className="project-page-object">
          <span>{project.title}</span>
        </div>
      </section>

      <section className="project-details">
        <div>
          <span className="detail-label">ЗАДАЧА</span>

          <h2>
            Создать цифровой опыт,
            <br />
            который запоминается.
          </h2>
        </div>

        <div className="detail-text">
          <p>
            Проект строится вокруг сильной типографики, минимального
            интерфейса и выразительного визуального языка.
          </p>

          <p>
            Основная задача — сохранить простоту взаимодействия,
            одновременно сделав дизайн самостоятельной частью продукта.
          </p>
        </div>
      </section>

      <section className="project-next">
        <p>NEXT PROJECT</p>
        <Link to="/">Вернуться к работам ↗</Link>
      </section>
    </main>
  )
}

export default ProjectPage