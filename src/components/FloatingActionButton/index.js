import React from 'react'
import { Container, Button, Link, lightColors, darkColors } from 'react-floating-action-button'
import './fab.scss'

const Fab = (props) => {
    const {} = props

    return (
        <Container>
            <Link href="wa.me/2385570401"
                tooltip="Whatsapp"
                icon="fab fa-whatsapp" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="#"
                tooltip="Facebook"
                icon="fab fa-facebook-f" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="#"
                tooltip="Instagram"
                icon="fab fa-instagram" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="#"
                tooltip="Email"
                icon="fas fa-envelope" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="#"
                tooltip="Youtube"
                icon="fab fa-youtube" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Button
                icon="fas fa-plus"
                rotate={true}
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
             />
        </Container>
    )
}

export default Fab