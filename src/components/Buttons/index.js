import React from 'react'
import { Button } from 'react-bootstrap'
import './buttons.scss'

const Buttons = (props) => {
    const {title, active, disabled, size, variant, block, className, ...rest} = props

    return (
        <Button 
            className={"buttons "+className} 
            variant={variant} 
            active={active} 
            disabled={disabled} 
            size={size} 
            block={block}
            {...rest}
        >
            {title}
        </Button>
    )
}

export default Buttons