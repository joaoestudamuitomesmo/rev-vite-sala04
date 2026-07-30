import s from './App.module.css'

import card from '/card.png'
import card2 from '/euquero.png'
import facebook from '/facebook.png'
import instagram from '/instagram.png'
import github from '/github.png'

function App() {

  return (
    <>
    <nav>
      <a href="#s1">Home</a>
      <a href="#s2">Sobre</a>
      <a href="#s3">Produtos</a>
    </nav>

    <main>
      <section id='s1' className={s.s1}>
        <h1>Opa</h1>
      </section>

      <section id='s2' className={s.s2}>
        <div className={s.left}>
          <img src={card2} alt="" />
        </div>
        <div className={s.right}>
          <h2>+55 41 8813-3455</h2>
          <p>+55 41 8813-3455</p>
        </div>
      </section>

      <section id='s3' className={s.s3}>
        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h2>+55 41 8813-3455</h2>
            <p>+55 41 8813-3455</p>
          </div>
        </div>

        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h2>+55 41 8813-3455</h2>
            <p>+55 41 8813-3455</p>
          </div>
        </div>

        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h2>+55 41 8813-3455</h2>
            <p>+55 41 8813-3455</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <a href=""><img src={facebook} width={40}></img></a>
      <a href=""><img src={instagram} width={40}></img></a>
      <a href=""><img src={github} width={40}></img></a>
    </footer>
    </>
  )
}

export default App