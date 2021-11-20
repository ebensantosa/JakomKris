import React, { Component } from 'react'
import './informasiDetail.scss'
import { Card, Container, Row, Col, Image, Button, Tab, Tabs, Nav, Spinner, Table } from "react-bootstrap";

export default class InformasiDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'informasi detail',

        }


    }


    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)
    }

    render() {
        return (
            <div className="informasi-detail content-page">
                <h2 className="title">Nama Gereja  :</h2>
                <p className="title">Alamat Gereja :</p>


                <Tabs defaultActiveKey="informasiUmum" id="uncontrolled-tab-example" variant="pills" className="mb-3">

                    <Tab className="tab" eventKey="informasiUmum" title="Informasi Umum">
                        <Card className="cardBencanaLeft">

                        </Card>


                        <Card className="cardBencanaLeft">
                            <p className="title-map">Peta Gereja</p>
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
                        </Card>
                    </Tab>
                    <Tab eventKey="rencanaKesiapanBangunan" title="Rencana Kesiapan Bangunan">
                        <Table className="tab" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nomor</th>
                                    <th>Rencana kesiapsiagaan</th>
                                    <th>Rencana tanggap darurat</th>
                                    <th>Sistem peringatan dini</th>

                                    <th>Bangunan gereja permanen</th>

                                    <th>Rencana tanggap darurat</th>
                                    <th>Rencana tanggap darurat</th>
                                    <th>Rencana kesiapsiagaan</th>
                                    <th>Rencana tanggap darurat</th>
                                    <th>Sistem peringatan dini</th>

                                    <th>Bangunan gereja permanen</th>

                                    <th>Rencana tanggap darurat</th>
                                    <th>Rencana tanggap darurat</th>
                           
                           
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                            
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                        
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                         
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="rencanaKesiapanPihakGereja" title="Rencana Kesiapan Pihak Gereja">

                    </Tab>
                    <Tab eventKey="kesadaranGerejaTerhadapBencana" title="Kesadaran Gereja terhadap bencana">

                    </Tab>

                </Tabs>

            </div>
        )
    }
}
