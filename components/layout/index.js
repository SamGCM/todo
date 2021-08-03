import React from 'react'
import { Container } from './style';

function Layout({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Layout