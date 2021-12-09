import { useState } from 'react'

import { View, Container, Options } from './styles'

export const Home = () => {

    const [ rangeHeight , setRangeHeight ] = useState(8)
    const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const getRangeWidth = () => {

        let rangeWidth = parseInt(document.querySelector('#input-range').value)
        setRangeHeight(rangeWidth)

    }

    const createPassword = () => {

        console.log('entrei eh o button!')

    }

    return (

        <Container>

            <View type = "text">
                
                <h4>123456789123</h4>
                
            </View>

            <Options>

                <section>

                    <div>The password width is: { rangeHeight }</div>
                    <div>

                        <input type = "range" id = "input-range" value = { rangeHeight } min = "4" max = "12" step = "1" onChange = { getRangeWidth } />

                    </div>

                </section>

                <section className = "checkboxes-section">

                    <div>

                        <input type = "checkbox" className = "numbers" />
                        <label>Numbers</label>

                    </div>

                    <div>

                        <input type = "checkbox" className = "upper-letters" />
                        <label>Upper Letters</label>

                    </div>

                    <div>

                        <input type = "checkbox" className = "lower-letters" />
                        <label>Lower Letters</label>

                    </div>

                </section>

            </Options>

            <button type = "button" onClick = { createPassword }>CREATE PASSWORD!</button> 

        </Container>

    )
    
}
