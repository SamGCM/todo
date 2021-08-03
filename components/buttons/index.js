import React from 'react'
import { Btn, Txt } from './style';

function Button({children, background, color, shadow}){
    return(
        <Btn bg={background} shadow={shadow}>
            <Txt color={color}>
                {children}
            </Txt>
        </Btn>
    )
}

export default Button