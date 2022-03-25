import React from 'react'
import { Container, Button, Link, lightColors, darkColors } from 'react-floating-action-button'
import './fab.scss'

const Fab = (props) => {
    const {} = props

    return (
        <Container>
            <Link href="wa.me/6281261332242"
                tooltip="Whatsapp"
                icon="fab fa-whatsapp" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="https://www.facebook.com/jakomkris.pbi"
                tooltip="Facebook"
                icon="fab fa-facebook-f" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="https://www.instagram.com/jakomkrispbi/?hl=en"
                tooltip="Instagram"
                icon="fab fa-instagram" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="mailto:jakomkris@gmail.com"
                tooltip="Email"
                icon="fas fa-envelope" 
                styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
            />
            <Link href="https://www.youtube.com/channel/UCGHNka1kKbldKx9Yx0PGIIg"
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