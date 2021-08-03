import React from 'react'
import { Container, Title, TitleType, Task, TextTask, DetailsTask, InfoTask, } from './style';



function Tasks({task, date, hour}){

    return(
        <Container>
            <Task>
                <TextTask>{task}</TextTask>
                <DetailsTask>
                    <InfoTask>{date}</InfoTask>
                    <InfoTask>{hour}</InfoTask>
                </DetailsTask>
            </Task>
        </Container>
    )
}

export default Tasks