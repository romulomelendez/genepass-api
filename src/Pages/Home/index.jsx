import React, { useState } from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Checkboxes } from '../../components/Checkboxes'
import { Range } from '../../components/Range'

import { View, Container, Options } from './style'

export const Home = () => {

    const [ myPassword, setMyPassword ] = useState('')

    const getRandomCaracter = (randomCharacter) => {
        
        return String.fromCharCode(randomCharacter)
    
    }

    const createPassword = () => {

        console.log('entrei na função')

        try {

            if ( document.querySelector('.numbers').checked ) {
            
                console.log('numbers checkbox is checked')
            
            }
            
            if ( document.querySelector('.upper-letters').checked ) {
    
                console.log('checkbox upper-letters is checked')
                
            }
            
            if ( document.querySelector('.lower-letters').checked ) {
                
                console.log('checkbox lower-letter is checked')
                let getRandomlowerCharacter = Math.floor(Math.random() * 26 ) + 97
                const response = getRandomCaracter(getRandomlowerCharacter)
                setMyPassword(response)
    
            }

        } catch (error) {

            console.error(error.message)

        } finally {

            console.log('finalmente')

        }
        
    }

    return (

        <Container>

            <Header />

            <View type = "text">
                
                <h4>{ myPassword }</h4>
                
            </View>

            <Options>

                <Range />
                <Checkboxes />

            </Options>

            <Button onClick = { createPassword } />

        </Container>

    )
    
}
