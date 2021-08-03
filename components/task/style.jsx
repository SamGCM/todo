import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 20px;
    background: #ffffff;
    width: auto;
    flex: 1;
`

export const Task = styled.View`
    border:1px solid #C4CEDC;
    background: white;
    width: 100%;
    padding: 10px;
    margin: 12.5px 0;
    border-radius: 5px;
`

export const TextTask = styled.Text`
    font-size: 15px;
` 

export const DetailsTask = styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
` 

export const InfoTask = styled.Text`
    font-size: 10px;
    color: #C4CEDC;
`


