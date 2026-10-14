import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Iron Temple, início" onClick={closeMenu}>
          <img src="/iron-temple-mark.svg" alt="" className="brand-mark" />
          <span className="brand-name">IRON <span>TEMPLE</span></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <a href="#espaco" onClick={closeMenu}>O espaço</a>
          <a href="#horarios" onClick={closeMenu}>Horários</a>
          <a href="#planos" onClick={closeMenu}>Planos</a>
          <a className="nav-cta" href="#visita" onClick={closeMenu}>Marca uma visita <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85"
            alt="Interior de um ginásio com equipamento de treino de força"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-rule" /> TREINO COM INTENÇÃO</p>
            <h1 id="hero-title">FORJA A TUA<br /><span>FORÇA.</span></h1>
            <p className="hero-copy">Um espaço para quem aparece, trabalha e volta mais forte. O teu próximo capítulo começa aqui.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#planos">Encontra o teu plano <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#espaco">Conhece o Iron Temple <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <p className="hero-index"><span>01</span> / 03</p>
          <p className="hero-side-note">DISCIPLINA · FORÇA · COMUNIDADE</p>
        </section>

        <section className="intro-band" id="espaco">
          <p className="section-kicker">MAIS DO QUE UM GINÁSIO <span> / </span> UM PONTO DE PARTIDA</p>
          <div className="intro-grid">
            <h2>O teu esforço.<br /><span>O teu templo.</span></h2>
            <div className="intro-description">
              <p>Treino de força, espaço para evoluir e uma comunidade que puxa por ti. Sem atalhos. Só trabalho bem feito, repetição após repetição.</p>
              <a className="underlined-link" href="#horarios">Vê quando treinar <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="values-row">
            <div><span className="value-number">01</span><span className="value-label">PESOS LIVRES</span></div>
            <div><span className="value-number">02</span><span className="value-label">TREINO ORIENTADO</span></div>
            <div><span className="value-number">03</span><span className="value-label">ENERGIA DE EQUIPA</span></div>
          </div>
        </section>

        <section className="hours-section" id="horarios">
          <div className="section-heading">
            <p className="section-kicker">ENCONTRA O TEU RITMO</p>
            <h2>O templo está<br /><span>à tua espera.</span></h2>
          </div>
          <div className="hours-content">
            <p className="hours-intro">Treina cedo, depois do trabalho ou ao fim de semana. Guarda este horário de referência e ajusta-o ao funcionamento da tua unidade.</p>
            <div className="hours-list">
              <div className="hours-item"><span>SEGUNDA — SEXTA</span><strong>06:00 — 23:00</strong></div>
              <div className="hours-item"><span>SÁBADO</span><strong>08:00 — 20:00</strong></div>
              <div className="hours-item"><span>DOMINGO</span><strong>09:00 — 14:00</strong></div>
            </div>
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="plans-heading">
            <div>
              <p className="section-kicker">ENTRA EM JOGO</p>
              <h2>Escolhe como<br /><span>queres evoluir.</span></h2>
            </div>
            <p>O primeiro passo é teu. Nós tratamos de te dar espaço para ir mais longe.</p>
          </div>
          <div className="plans-grid">
            <article className="plan-item">
              <span className="plan-number">01 / LIVRE</span>
              <h3>Acesso total</h3>
              <p>O teu treino, ao teu ritmo. Acesso ao espaço e equipamento para manter a consistência.</p>
              <a href="#visita" className="plan-link" aria-label="Saber mais sobre Acesso total">Saber mais <span aria-hidden="true">↗</span></a>
            </article>
            <article className="plan-item plan-featured">
              <span className="plan-number">02 / GUIADO</span>
              <h3>Treino acompanhado</h3>
              <p>Orientação para definir objetivos, estruturar o treino e acompanhar a tua evolução.</p>
              <a href="#visita" className="plan-link" aria-label="Saber mais sobre Treino acompanhado">Saber mais <span aria-hidden="true">↗</span></a>
            </article>
            <article className="plan-item">
              <span className="plan-number">03 / 1:1</span>
              <h3>Personal training</h3>
              <p>Atenção individual e um plano de treino ajustado às tuas metas e disponibilidade.</p>
              <a href="#visita" className="plan-link" aria-label="Saber mais sobre Personal training">Saber mais <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </section>

        <section className="visit-section" id="visita">
          <div className="visit-mark" aria-hidden="true"><img src="/iron-temple-mark.svg" alt="" /></div>
          <div className="visit-copy">
            <p className="section-kicker">O PRIMEIRO TREINO COMEÇA COM UM OLÁ</p>
            <h2>Vem conhecer<br />o <span>teu espaço.</span></h2>
          </div>
          <p className="visit-note">Fala com a equipa para conhecer os planos, confirmar horários e marcar uma visita ao espaço.</p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <img src="/iron-temple-mark.svg" alt="" className="brand-mark" />
          <span className="brand-name">IRON <span>TEMPLE</span></span>
        </a>
        <p>FORÇA CONSTRUÍDA TODOS OS DIAS.</p>
        <a className="back-top" href="#inicio">VOLTAR AO TOPO ↑</a>
      </footer>
    </>
  )
}
