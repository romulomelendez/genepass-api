import { useState } from 'react'

import { View, Container } from './styles'

export const Options = () => {

    const [ rangeHeight , setRangeHeight ] = useState(8)

    const getRangeWidth = () => {

        let rangeWidth = parseInt(document.querySelector('#input-range').value)
        setRangeHeight(rangeWidth)

    }

    return (

        <Container>

            <View type = "text">
                
                <h4>123456789123</h4>
                
            </View>

            <section>

                <div>The password width is: { rangeHeight }</div>
                <div>

                    <input type = "range" id = "input-range" value = { rangeHeight } min = "4" max = "12" step = "1" onChange = { getRangeWidth } />

                </div>

            </section>

            <section>

                <input type = "checkbox" />
                <input type = "checkbox" />
                <input type = "checkbox" />
                
            </section>

        </Container>

    )
    
}
