import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Tasks from '../../components/task';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {  Container, Title, TitleType } from './style';


export default function Home() {

  const [task, setTask] = useState({
    name: '',
    date: '',
    hour: ''
  })

  const [keys, setKeys] = useState([])



  function getInfo(){
    return AsyncStorage.getItem('teste2') // Pega um dado especifico no local storage
    .then(data => JSON.parse(data)) 
    .then(data => {
      setTask(data)
    })
  }

  const getAllKeys = async () => { // Pega todas as keys do local storage e retorna um array
    let key = []
    try {
      key = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
    setKeys(key)
  }

  useEffect(( ) => {
    getInfo()
    getAllKeys()
  }, [])
  

  const taskInLocalStorage = keys.map(item => {
    return item
  })

  console.log(taskInLocalStorage)

  return (
      <Layout >
        <Container>
          <Title>Lista de tarefas</Title>
          <TitleType>Work</TitleType>

          
          {/* TORNAR DINÂMICO */}
          <Tasks 
              task={task.name} 
              date={task.date} 
              hour={task.hour} 
            />

        </Container>
        
        
        <Navbar/>
        <StatusBar style="auto" />
      </Layout>
  );
}