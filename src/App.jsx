
import { GlobalStyle } from './styles/global'

import { Home } from './Pages/Home'

import { RangeProvider } from './contexts/RangeContext'
import { CheckboxesProvider } from './contexts/CheckboxesContext'

export const App = () => {

  return (

    <>

      <GlobalStyle />
      <RangeProvider>
      <CheckboxesProvider>

        <Home />

      </CheckboxesProvider>
      </RangeProvider>

    </>

  )

}
