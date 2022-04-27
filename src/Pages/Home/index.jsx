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

    const { inputRange } = useContext(RangeContext)
    const { checkboxesSum } = useContext(CheckboxesContext)
    const [ myPassword, setMyPassword ] = useState('')
    let pwd = ''

    const getRandomCharacter = (randomCharacter) => {
        
        return String.fromCharCode(randomCharacter)
    
    }

    const verifyPasswordProps = () => {

        let start = 0
        let end = 0
        let exclude = ['']
        let arraySymbols = ['=', '?', '>', '<', ':', ';', '@', '', '', '/', '\\', '[', ']', '^', '_', '`', '~', '|', '{', '}']
        //let arrayLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let arrayUpperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        const checkboxesSumString = checkboxesSum.toString()

        switch (checkboxesSumString) {

            case '0':
                alert('Please mark at least one checkbox!')
                break

            case '3':

                start = 48
                end = 10
                return { start: start, end: end, exclude: false }

            case '7':

                start = 65
                end = 26
                return { start: start, end: end, exclude: false }

            case '15':
                start = 97
                end = 26
                return { start: start, end: end }

            case '10':

                start = 48
                end = 42
                exclude = arraySymbols
                return { start: start, end: end, exclude: exclude }

            case '18':
                start = 48
                end = 75
                exclude = arraySymbols.concat(arrayUpperLetters)
                return { start: start, end: end, exclude: exclude }
            
            case '22':
                start = 65
                end = 58
                exclude = arrayNumbers.concat(arraySymbols)
                return { start: start, end: end, exclude: exclude }
            
            case '25':
                start = 48
                end = 75
                exclude = arraySymbols
                return { start: start, end: end, exclude: exclude }
                
            default:
                break

        }

    }

    const createPwd = (passLength) => {

        let passVerifyResponse = verifyPasswordProps()

        if ( !passVerifyResponse?.exclude ) {

            while( pwd.length < passLength ) {

                let response = (getRandomCharacter(Math.floor(Math.random() * passVerifyResponse?.end) + passVerifyResponse?.start)).toString()
                pwd += response
                
            }

        } else {

            while( pwd.length < passLength ) {

                let response = (getRandomCharacter(Math.floor(Math.random() * passVerifyResponse?.end) + passVerifyResponse?.start)).toString()
                if (passVerifyResponse?.exclude.indexOf(response) === -1)
                    pwd += response

            }

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
