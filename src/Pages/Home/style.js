import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 800px;
    max-width: 1000px;
    
`

export const View = styled.div `

    background-color: white;
    outline: none;
    padding: 10px;
    margin: 10px;
    height: 150px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 80pt;
    text-align: center;

`

export const Options = styled(View) `

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 800px;
    font-size: 18pt;

`