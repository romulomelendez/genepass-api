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

            <Button onClick = { () => createPwd(5) } />

        </Container>

    )
    
}
