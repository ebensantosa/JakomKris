import React, { Component } from 'react'
import { Row, Col, Container, Spinner, Tabs, Tab} from 'react-bootstrap'
import './kontak.scss'
import { BackgroundContact, LogoEmail, LogoFacebook, LogoInstagram, LogoWhatsapp, LogoYoutube } from '../../assets'


export default class Kontak extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    render() {
        return (
            <div className = "contact-page content-page">
                <div className = "container-page">
                    <p className = "title">Kontak Kami</p>
                    <Container>
                        <Row>
                            <Col className = "image">
                                <img 
                                    src = {BackgroundContact}
                                    width = "105%"    
                                    height = "105%"
                                />
                            </Col>
                            <Col className = "tab">
                                <Tabs defaultActiveKey="Kontak" id="uncontrolled-tab-example">
                                    <Tab eventKey="Kontak" title="Kontak" className = "tab">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <a href = "https://www.instagram.com/jakomkrispbi/?hl=en">
                                                            <img 
                                                                src = {LogoInstagram}
                                                                width = "75px"
                                                                height = "75px"
                                                            />
                                                        </a>
                                                        <p>@jakomkrispbi</p>                                                
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <a href = "https://www.facebook.com/jakomkris.pbi">
                                                            <img 
                                                                src = {LogoFacebook}
                                                                width = "75px"
                                                                height = "75px"
                                                            />
                                                        </a>
                                                        <p>Jakomkris Pbi</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                <div>
                                                    <a href = "wa.me/6281261332242">
                                                        <img 
                                                            src = {LogoWhatsapp}
                                                            width = "75px"
                                                            height = "75px"
                                                        />
                                                    </a>
                                                    <p>0856-286-2525</p>
                                                </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <a href = "mailto:jakomkris@gmail.com">
                                                            <img 
                                                                src = {LogoEmail}
                                                                width = "75px"
                                                                height = "75px"
                                                            />
                                                        </a>
                                                        <p>jakomkris@gmail.com</p> 
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <a href = "https://www.youtube.com/channel/UCGHNka1kKbldKx9Yx0PGIIg">
                                                            <img 
                                                                src = {LogoYoutube}
                                                                width = "75px"
                                                                height = "75px"
                                                            />
                                                        </a>
                                                        <p>Jakomkris Pbi</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab eventKey="Alamat" title="Alamat" className = "tab">
                                        <div className="rsvp-wrapper">
                                            {this.state.loading ? (
                                                <Spinner
                                                    className="loading spinner-center"
                                                    name="three-bounce"
                                                    color="red"
                                                    fadeIn="none"
                                                    animation="grow"
                                                    variant="info"
                                                />
                                            ) : null}
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7777115902327!2d110.4071266147776!3d-7.706986394444489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583304f7edcf%3A0x4420e7a8468f5293!2sYEU%20%2F%20YAKKUM%20EMERGENCY%20UNIT!5e0!3m2!1sen!2sid!4v1631362935969!5m2!1sen!2sid"
                                                width="100%"
                                                height="300"
                                                onLoad={this.hideSpinner}
                                                frameBorder="0"
                                                marginHeight="0"
                                                marginWidth="0"
                                            />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
