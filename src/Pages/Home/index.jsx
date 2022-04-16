import React, { useState } from 'react'

import { RangeContext } from '../../contexts/RangeContext'
import { CheckboxesContext } from '../../contexts/CheckboxesContext'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Checkboxes } from '../../components/Checkboxes'
import { useContext } from 'react'
import { Range } from '../../components/Range'

import { View, Container, Options } from './style'

export const Home = () => {

    const [ myPassword, setMyPassword ] = useState('')
    const { inputRange } = useContext(RangeContext)
    const { checkboxesData } = useContext(CheckboxesContext)

    const getRandomCharacter = (randomCharacter) => {
        
        return String.fromCharCode(randomCharacter)
    
    }

    const createPwd = (length) => {

        let pwd = ''
        let i = 0
        console.log(checkboxesData)

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

            <Button onClick = { () => createPwd(inputRange) } />

        </Container>

    )
    
}
