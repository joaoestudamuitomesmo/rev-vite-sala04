import s from './App.module.css'

import card from '/card.png'
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
        <h1>TÍTULO DA EMPRESA</h1>
      </section>

      <section id='s2'>
        <div className={s.left}>
          <img src="" alt="" />
        </div>
        <div className={s.right}>
          <h2>SUBTITULO</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum saepe natus atque iste deserunt porro, nisi, a recusandae excepturi provident placeat aspernatur voluptatem itaque esse asperiores at laborum quam fuga.</p>
        </div>
      </section>

      <section id='s3'>
        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
          </div>
        </div>

        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
          </div>
        </div>

        <div className={s.card}>
          <img src={card} alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
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