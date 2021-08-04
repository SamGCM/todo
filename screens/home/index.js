import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef} from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Tasks from '../../components/task';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {  Container, Title, TitleType } from './style';



export default function Home() {

  const [task, setTask] = useState('')
  const taskRef = useRef(0)


  const getTask = async () => {
    try {
      const value = await AsyncStorage.getItem('Task')
      setTask(value)

      
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getTask()
    taskRef.current++
    
  })

  console.log(task)

  return (
      <Layout >
        <Container>
          <Title >Lista de tarefas</Title>
          <TitleType  >Work</TitleType>

          
          {/* TORNAR DINÂMICO */}
          
          <Tasks
            task={'Faça alterações para o novo desing'}
            date={'18 NOV 2021'}
            hour={'11:00 - 13:00'}
          />
        </Container>
        
        
        <Navbar/>
        <StatusBar style="auto" />
      </Layout>
  );
}