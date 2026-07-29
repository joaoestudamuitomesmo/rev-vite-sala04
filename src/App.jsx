import { useState } from 'react'
import s from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <a href="#s1">Home</a>
      <a href="#s2">Sobre</a>
      <a href="#s3">Produtos</a>
    </nav>

    <main>
      <section id='s1'>
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
          <img src="" alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
          </div>
        </div>

        <div className={s.card}>
          <img src="" alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
          </div>
        </div>

        <div className={s.card}>
          <img src="" alt="car" />
          <div>
            <h3>Titulo card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum expedita vel provident vero laborum doloribus fuga</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </footer>
    </>
  )
}

export default App