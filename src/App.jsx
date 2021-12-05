
import { GlobalStyle } from './styles/global'

import { View } from './components/View/index'
import { Options } from './components/Options/index'
import { Button } from './components/Button/index'

export const App = () => {

  return (

    <>

      <GlobalStyle />
      <h1>GENEPASS</h1>
      <h4>The Password Generator</h4>

      <main>

       <View />
       <Options />
       <Button />

      </main>

    </>

  )

}
