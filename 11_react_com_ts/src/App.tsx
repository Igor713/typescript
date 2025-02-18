import './App.css'

// 4 - Importação de componente
import FirstComponent from './components/FirstComponent'

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent'
import Destructuring from './components/Destructuring'

// 6 - useState
import State from './components/State'

function App() {
  // 1 - Variáveis
  const name: string = 'Igor'
  const age: number = 26
  const isWorking: boolean = true

  // 2 - Funções
  const useGreeting = (name: string) => {
    return `Olá, ${name}!`
  }



  return (
    <>
      <div className='App'>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (
          <p>Está trabalhando!</p>
        )}
      </div>

      <h3>{useGreeting(name)}</h3>

      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring
        title='Green Book'
        content='Green Book é um filme de comédia dramática norte-americano acerca de uma turnê na região do Sul Profundo dos Estados Unidos, feita pelo pianista de jazz clássico Don Shirley (Mahershala Ali) e Tony Vallelonga (Viggo Mortensen), um segurança ítalo-americano que trabalhou para Shirley como motorista e segurança.'
        commentsQty={10}
        tags={['fime', 'legal']}
      />

      <State />
    </>
  )
}

export default App
