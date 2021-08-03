import React from 'react'
import * as s from './style';
import IconMenu from 'react-native-vector-icons/Feather';
import IconAdd from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native'


import Button from '../buttons';


function Navbar(){


    // Foi criado uma array para adicionar objetos que serão as tarefas
    let list = [
        {
            name: 'Work',
            background:'#A362EA',
            color:'#fff',
            shadow:'#664689'
            },
            {
                name: 'Family',
                background:'#353943',
                color:'#F5A921',
                shadow:'#2A2D33'
            }, 
            {   
                name: 'Sports',
                background:'#353943',
                color:'#43C8DD',
                shadow:'#2A2D33'
            } ,
            {
                name: 'Personal',
                background:'#353943',
                color:'#F55C33',
                shadow:'#2A2D33'
            }
    ]

    const navigation = useNavigation()

    return(
        <s.Container>
            <s.Menu >
                <IconMenu
                    name='menu'
                    size={40}
                    color='#fff'
                />
            </s.Menu>

            {/* renderização dos objetos da array como um botão */}
            {list.map((item, index) =>{
                return <Button
                background={item.background}
                color={item.color}
                shadow={item.shadow}
                key={index}>
                    {item.name.substr(0, 1)}
                </Button>
            })}
            <s.ButtonAdd
                onPress={() => navigation.navigate('Create')}
                bg='#353943'
                color='#fff'
                shadow='#282b31'
                >
                <IconAdd
                    name='add-outline'
                    size={40}
                    color='#fff'
                    
                />
            </s.ButtonAdd>
            <s.Calendar>
                <IconMenu
                    name='calendar'
                    size={40}
                    color='#fff'
                />
                <s.Alerts>3</s.Alerts>
            </s.Calendar>
            
        </s.Container>
    )
}

export default Navbar
