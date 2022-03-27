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

    const createPwd = async (length) => {

        //const charArray = ['0',' 1', '2', '3', '4', '5', '6', '7', '8', '9']
        let pwd = ''
        let i = 0

        while( i < length ) {

            //charArray.toString()
            //let randomNumber = Math.floor(Math.random() * charArray.length)
            //pwd += charArray[randomNumber] 
            //i++
            let response = await getRandomCharacter( Math.floor( Math.random() * 10 ) + 48 )
            response.toString()
            pwd += response
            i++

            
        }
        
        setMyPassword(pwd)

    }

    const createPassword = () => {

        try {

            if ( document.querySelector('.numbers').checked ) {
            
                let getRandomNumber = Math.floor(Math.random() * 10 ) + 48
                const response = getRandomCharacter(getRandomNumber)
                setMyPassword(response)
            
            }
            
            if ( document.querySelector('.upper-letters').checked ) {
    
                let getRandomNumber = Math.floor(Math.random() * 26 ) + 65
                const response = getRandomCharacter(getRandomNumber)
                setMyPassword(response)
                
            }
            
            if ( document.querySelector('.lower-letters').checked ) {
                
                let getRandomNumber = Math.floor(Math.random() * 26 ) + 97
                const response = getRandomCharacter(getRandomNumber)
                setMyPassword(response)
    
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

            <Button onClick = { () => createPwd(5) } />

        </Container>

    )
    
}
