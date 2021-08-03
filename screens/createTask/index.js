import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { Modal} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

import { Title, Container, InputName, Date, Hour, DetailsInput, Box, TypeTask, TaskLogo, BoxTaskLogo, TaskName, ModalType, ButtonCreate, ButtonName } from './style';
import Icon from 'react-native-vector-icons/Feather';
import Clock from 'react-native-vector-icons/SimpleLineIcons';
import Right from 'react-native-vector-icons/AntDesign';



export default function CreateTask() {


  const [modalVisible, setModalVisible] = useState(false);

  const [taskLogo, setTaskLogo] = useState('W')
  const [taskName, setTaskName] = useState('Work')
  const [bg, setBg] = useState('#F5EEFD')
  const [color, setColor] = useState('#A362EA')

  const [inputName, setInputName] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputHour, setInputHour] = useState('')

  const navigation = useNavigation()


  // Salva no local storage
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      return e
    }
  }


  //Lista para renderizar as opções de tipos de task
  let list = [
    {
        name: 'Work',
        background:'#F5EEFD',
        color:'#A362EA'
    },
    {
        name: 'Family',
        background:'#fff9ed',
        color:'#F5A921'
    }, 
    {   
        name: 'Sports',
        background:'#e9f8fa',
        color:'#43C8DD'
    } ,
    {
        name: 'Personal',
        background:'#faede9',
        color:'#F55C33'
    }
  ]

  

  return (
      <Container >
        <StatusBar style="auto" />
        <Title>Criar</Title>
        <Title>Nova Tarefa</Title>
        <InputName placeholder='Nome da tarefa...' 
          onChangeText={setInputName}
        >
          
        </InputName>
        
        <Box>
          <Date >
            <Icon
              name='calendar'
              size={35}
              color='#F5A921'
            />
          </Date>
          <DetailsInput placeholder='Insira a data...' 
            onChangeText={setInputDate}
          >
            
          </DetailsInput>
        </Box>

        

        <Box>
          <Hour >
            <Clock
              name='clock'
              size={35}
              color='#F55C33'
            />
          </Hour>

          <DetailsInput placeholder='Insira a hora...'
            onChangeText={setInputHour}
          >
            
          </DetailsInput>
        </Box>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        
      >
        <ModalType >
          {list.map((item, index) =>{
                return <TypeTask key={index} onPress={() => {
                  setModalVisible(!modalVisible)
                  setTaskName(item.name)
                  setTaskLogo(item.name.substr(0, 1))
                  setBg(item.background)
                  setColor(item.color)
                  }}>
                    <BoxTaskLogo  bg={item.background}>
                      <TaskLogo color={item.color}>
                        {item.name.substr(0, 1)}
                      </TaskLogo>
                    </BoxTaskLogo>
                    <TaskName>{item.name}</TaskName>
                </TypeTask>
            })}
        </ModalType>
      </Modal>

      
        <TypeTask onPress={() => setModalVisible(true)} >
          <BoxTaskLogo bg={bg}>
            <TaskLogo color={color}>
              {taskLogo}
            </TaskLogo>
          </BoxTaskLogo>
          <TaskName>{taskName}</TaskName>
          <Right
            name='right'
            size={30}
            color='#CED6E2'
          />
        </TypeTask>
      
        <ButtonCreate
          onPress={() => {
            storeData(
              inputName
              ,{
                name: inputName,
                date: inputDate,
                hour: inputHour
              }
            )
            navigation.goBack()
          }}
        >
          <ButtonName>CRIAR TAREFA</ButtonName>
        </ButtonCreate>

      </Container>
  );
}