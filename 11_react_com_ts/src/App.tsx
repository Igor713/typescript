import './App.css'

// 4 - Importação de componente
import FirstComponent from './components/FirstComponent'

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'

// 6 - useState
import State from './components/State'
import { createContext } from 'react'
import Context from './components/Context'

// 8 - Types
type textOrNull = string | null

type fixed = 'Isso' | 'Ou' | 'Aquilo'

// 9 - Context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - Variáveis
  const name: string = 'Igor'
  const age: number = 26
  const isWorking: boolean = true

  // 2 - Funções
  const useGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - Types
  const myText: textOrNull = 'Tem algum texto aqui'
  let mySecondeText: textOrNull = null

  mySecondeText = 'opa'

  const testandoFixed: fixed = 'Ou'

  // 9 - Context
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  return (
    <>
      <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondeText && <p>Tem texto na variável</p>}
        <div>{testandoFixed}</div>

        <Context />
      </AppContext.Provider>
    </>
  )
}

export default App
