
import { GlobalStyle } from './styles/global'

import { Home } from './components/Home/index'

export const App = () => {

  return (

    <>

      <GlobalStyle />
      <h1>GENEPASS</h1>
      <h4>The Password Generator</h4>

      <main>

        <Home />

      </main>

    </>

  )

}
