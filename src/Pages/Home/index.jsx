import React, { useState } from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Checkboxes } from '../../components/Checkboxes'
import { Range } from '../../components/Range'

import { View, Container, Options } from './style'

export const Home = () => {

    const [ myPassword, setMyPassword ] = useState('')

    const getRandomCharacter = (randomCharacter) => {
        
        return String.fromCharCode(randomCharacter)
    
    }

    const createPwd = (length) => {

        let pwd = ''
        let i = 0

        while( i < length ) {

            let response = (getRandomCharacter(Math.floor(Math.random() * 10) + 48)).toString()
            pwd += response
            i++
            
        }
        
        setMyPassword(pwd)

    }

    const verifyCheckbox = () => {

        try {

            if ( document.querySelector('.numbers').checked ) {
            
                
            
            }
            
            if ( document.querySelector('.upper-letters').checked ) {
    
                
                
            }
            
            if ( document.querySelector('.lower-letters').checked ) {
                
                
    
            }

        } catch (error) {

            console.error(error.message)

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

            <Button onClick = { () => verifyCheckbox() } />

        </Container>

    )
    
}
