import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    max-width: 800px;

    button { 

        padding: 10px;
        height: 50px;
        width: 200px;
        border: 1px solid black;
        border-radius: 10px;
        margin-left: 610px;
        background-color: white;
        font-weight: bold;
        cursor: pointer;
        
    }
    
    button:hover { background-color: #cecece; }
    
`

export const View = styled.div `

    background-color: white;
    outline: none;
    padding: 10px;
    margin: 10px;
    height: 150px;
    width: 800px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 80pt;

`

export const Options = styled(View) `

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 18pt;

    section.checkboxes-section {
        
        display: flex;
        flex-direction: column;
        
        div {

            display: flex;
            flex-direction: row;

            input {
            
                height: 20px;
                width: 20px;
                margin: 10px;
        
            }

            label { margin-top: 7px; }

        }

    }

`