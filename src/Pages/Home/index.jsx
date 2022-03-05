import React, { useState } from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Checkboxes } from '../../components/Checkboxes'
import { Range } from '../../components/Range'

import { View, Container, Options } from './style'

export const Home = () => {

    const [ myPassword, setMyPassword ] = useState('')

    const createPassword = () => {

        console.log('entrei na função')

        try {

            if ( document.querySelector('.numbers').checked ) {
            
                console.log('numbers checkbox is checked')
            
            }
            
            if ( document.querySelector('.upper-letters').checked ) {
    
                console.log('checkbox upper-letters is checked')
                setMyPassword(Math.floor(Math.random() * 26 ) + 97)
                console.log(myPassword)
    
            }
            
            if ( document.querySelector('.lower-letters').checked ) {
    
                console.log('checkbox lower-letter is checked')
    
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
