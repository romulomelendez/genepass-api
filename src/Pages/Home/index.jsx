import React, { useState } from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'

import { View, Container, Options } from './style'


export const Home = () => {

    const [ rangeHeight , setRangeHeight ] = useState(8)
    //const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const getRangeWidth = () => {

        let rangeWidth = parseInt(document.querySelector('#input-range').value)
        setRangeHeight(rangeWidth)

    }

    const createPassword = () => {

        if ( document.querySelector('.numbers').checked ) {
            
            console.log('numbers checkbox is checked')
        
        }
        
        if ( document.querySelector('.upper-letters').checked ) {

            console.log('checkbox upper-letters is checked')

        }
        
        if ( document.querySelector('.lower-letters').checked ) {

            console.log('checkbox lower-letter is checked')

        }
        
    }

    return (

        <Container>

            <Header />

            <View type = "text">
                
                <h4>123456789123</h4>
                
            </View>

            <Options>

                

            </Options>

            <Button onClick = { createPassword } />

        </Container>

    )
    
}
