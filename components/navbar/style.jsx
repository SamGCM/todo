import styled from 'styled-components/native'

export const Container = styled.View`
    background: #222429;
    width: 80px;
    height: 950px;
    display: flex;
    align-items: center;
    margin-top: 30px;
`

export const Menu = styled.TouchableOpacity`
    margin-top: 50px;
    margin-bottom: 80px;
`

export const Calendar = styled.TouchableOpacity`
    position: absolute;
    bottom: 170px;
`

export const ButtonAdd = styled.TouchableOpacity`
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

export const Alerts = styled.Text`
    background: #F55C33;
    color: #fff;
    text-align: center;
    bottom: 15px;
    left: 20px;
    width: 25px;
    height: 25px;
    font-size: 15px;
    position: relative;
    border-radius: 50px;
    padding: 1px;
`

