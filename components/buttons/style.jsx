import styled from 'styled-components/native'

export const Btn = styled.TouchableOpacity`
    margin-top: 20px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: ${props => props.bg};
    border-radius: 10px;
    border: .5px solid ${props => props.shadow};
    border-bottom-width: 5px;
`

export const Txt = styled.Text`
    color: ${props => props.color};
    font-size: 20px;
`