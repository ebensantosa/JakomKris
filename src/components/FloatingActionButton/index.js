import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import './fab.scss'

const Fab = (props) => {
    const {title, active, disabled, size, variant, block, className, ...rest} = props

    return (
        <Container className = "container-item">
            <Link href="wa.me/2385570401"
                tooltip="Contact Our Whatsapp"
                icon="far fa-sticky-note" 
            />
            <Link href="#"
                tooltip="See our Facebook"
                icon="fas fa-user-plus" 
            />
            <Link href="wa.me/2385570401"
                tooltip="Contact Our Whatsapp"
                icon="far fa-sticky-note" 
            />
            <Link href="#"
                tooltip="See our Facebook"
                icon="fas fa-user-plus" />
            <Button className="fab-button"
                icon="fas fa-plus"
                rotate={true}
             />
        </Container>
    )
}

export default Fab