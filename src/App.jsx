
import { GlobalStyle } from './styles/global'

import { Options } from './components/Options/index'

export const App = () => {

  return (

    <>

      <GlobalStyle />
      <h1>GENEPASS</h1>
      <h4>The Password Generator</h4>

      <main>

        <Options />

      </main>

    </>

  )

}
