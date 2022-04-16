
import { GlobalStyle } from './styles/global'

import { Home } from './Pages/Home'

import { RangeProvider } from './contexts/RangeContext'

export const App = () => {

  return (

    <>

      <GlobalStyle />
      <RangeProvider>
        
        <Home />

      </RangeProvider>

    </>

  )

}
