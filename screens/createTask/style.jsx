import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: #fff;
    height: 1000px;
`

export const InputName = styled.TextInput`
    border-bottom-width: 1px;
    border-color: #CED6E2;
    color: #2A2D33;
    margin-top: 50px;
    margin-bottom: 40px;
    padding: 5px;
    font-size: 18px;
`

export const Title = styled.Text`
    color: #000;
    font-size: 30px;
`


export const Box = styled.View`
    margin-top: 40px;
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
` 

export const Date = styled.View`
    background: #fdf0da;
    padding: 10px;
    border-radius: 15px;
    width: 55px;
`

export const Hour = styled.View`
    background: #fde6e1;
    padding: 10px;
    border-radius: 15px;
    width: 55px;
`

export const DetailsInput = styled.TextInput`
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
`

export const TypeTask = styled.TouchableOpacity`
    border-color: #CED6E2;
    border-width: 1px;
    border-radius: 10px;
    padding: 15px 10px;
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-top: 70px;
`

export const BoxTaskLogo = styled.View`
    /* background: #F5EEFD; */
    background: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
`

export const TaskLogo = styled.Text`
    font-size: 15px;
    /* color: #A362EA; */
    color: ${props => props.color};
`

export const TaskName = styled.Text`
    font-size: 23px;
    margin-left: 30px;
    margin-right: 120px;
    color: #000;
`

export const ModalType = styled.View`
    background: transparent;
    height: auto;
    width: 350px;
    margin-top: 100px;
    margin-left: 30px;
    border-radius: 20px;
`

export const ButtonCreate = styled.TouchableOpacity`
    background: #2A2D33;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-top: 70px;
`

export const ButtonName = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #fff;
`

