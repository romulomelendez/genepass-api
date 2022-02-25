import React from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Inputs } from '../../components/Inputs'

import { View, Container, Options } from './style'


export const Home = () => {

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

                <Inputs />

            </Options>

            <Button onClick = { createPassword } />

        </Container>

    )
    
}
