import React, { Component } from 'react'
import './summaryDashboard.scss'
import { Container, Row, Col, Card, Image, Table, Button } from 'react-bootstrap';
import { Danger } from '../../assets';
import axios from 'axios';
import Carousel from 'react-grid-carousel'
import { ReactWeathers, VaksinChart, DoughnutChart, DoughnutChart2, DoughnutChart3, BarKesadaranGereja } from '../../components';
import Chart from "react-google-charts";

export default class SummaryDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'summary dashboard',
            persons: [],
            autogempas: [],
            covids: [],
            vaksins: []
        }
    }

    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)
        axios.get(`https://cuaca-gempa-rest-api.vercel.app/weather/jawa-barat/bandung`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })

        axios.get(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
            .then(res => {
                const autogempas = res.data;
                this.setState({ autogempas });
            })

        axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
            .then(res => {
                const covids = res.data;
                this.setState({ covids });
            })

        axios.get(`https://vaksincovid19-api.vercel.app/api/vaksin`)
            .then(res => {
                const vaksins = res.data;
                this.setState({ vaksins });
            })
    }

    render() {
        return (
            <div className="summary-dashboard content-page">
                <div className="container-page">
                    <Container fluid>
                        <h2 className="title"> Dashboard </h2>
                        <p> Ringkasan Informasi gereja tangguh bencana </p>
                        <Row>
                            <Col sm={3}>
                                <Card >
                                    <Card.Header>Data Covid-19 Indonesia</Card.Header>
                                    <Card.Body>
                                        {this.state.covids != null ?
                                            <p>Jumlah Positif : {this.state.covids.positif};</p>
                                            :
                                            null
                                        }

                                        {this.state.covids != null ?
                                            <p>Jumlah dirawat : {this.state.covids.dirawat}</p>
                                            :
                                            null
                                        }

                                        {this.state.covids != null ?
                                            <p>Jumlah sembuh : {this.state.covids.sembuh}</p>
                                            :
                                            null
                                        }

                                        {this.state.covids != null ?
                                            <p>Jumlah meninggal : {this.state.covids.meninggal}</p>
                                            :
                                            null
                                        }
                                        <Card.Text>
                                            {this.state.covids != null ?
                                                <div>
                                                    Update :
                                                    <p> {this.state.covids.lastUpdate}</p>
                                                </div>
                                                :
                                                null
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={9}><Card>
                                <VaksinChart />
                            </Card></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    {this.state.vaksins != null ?
                                        <div>
                                            <h1 className="text-center">{this.state.vaksins.totalsasaran}</h1>
                                            <p className="text-center">TARGET SASARAN VAKSINASI</p>
                                        </div>
                                        :
                                        null
                                    }
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    {this.state.vaksins != null ?
                                        <div>
                                            <h1 className="text-center">{this.state.vaksins.vaksinasi1}</h1>
                                            <p className="text-center">VAKSINASI KE-1</p>
                                        </div>
                                        :
                                        null
                                    }
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    {this.state.vaksins != null ?
                                        <div>
                                            <h1 className="text-center">{this.state.vaksins.vaksinasi2}</h1>
                                            <p className="text-center">VAKSINASI KE-2</p>
                                        </div>
                                        :
                                        null
                                    }
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    {this.state.vaksins != null ?
                                        <div>
                                            <h1 className="text-center">{this.state.vaksins.sasaranvaksinpetugaspublik}</h1>
                                            <p className="text-center">VAKSINASI PETUGAS PUBLIK</p>
                                        </div>
                                        :
                                        null
                                    }
                                </Card>
                            </Col>
                        </Row>

                        <p> Informasi Cuaca Yogyakarta dan Kota palu </p>
                        <Row>
                            <Col sm={7}>

                                <Card>

                                    <ReactWeathers />

                                </Card>
                            </Col>
                            <Col sm={5}>
                                {this.state.autogempas.Infogempa != null ?
                                    <Card className="gempaTerkini">

                                        <Row>
                                            <Col xs={5}>
                                                <div>
                                                    <img className="imageGempa" src={"https://data.bmkg.go.id/DataMKG/TEWS/" + this.state.autogempas.Infogempa.gempa.Shakemap}></img>
                                                    <Button className="imageGempa" variant="primary">Zoom Image</Button>
                                                </div>
                                            </Col>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <tbody>
                                                        <tr>
                                                            <td>Tanggal</td>
                                                            <td>{this.state.autogempas.Infogempa.gempa.Tanggal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Magnitudo</td>
                                                            <td> {this.state.autogempas.Infogempa.gempa.Magnitude}</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Kedalaman</td>
                                                            <td> {this.state.autogempas.Infogempa.gempa.Kedalaman}</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Lokasi</td>
                                                            <td colSpan="2">{this.state.autogempas.Infogempa.gempa.Lintang}- {this.state.autogempas.Infogempa.gempa.Bujur}</td>

                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "5px" }}>
                                            <Col xs={2}> <Image className="icon" src="https://www.bmkg.go.id/asset/img/gempabumi/lokasi.png" rounded /> </Col>
                                            <Col> <td> {this.state.autogempas.Infogempa.gempa.Wilayah}</td></Col>
                                        </Row>
                                        <Row style={{ marginTop: "5px" }}>
                                            <Col xs={2}> <Image className="icon" src="https://www.bmkg.go.id/asset/img/gempabumi/tsunami.png" rounded /> </Col>
                                            <Col> <td> {this.state.autogempas.Infogempa.gempa.Potensi}</td></Col>
                                        </Row>
                                    </Card>
                                    :
                                    null
                                }
                            </Col>


                        </Row>
                        <p> Informasi Gereja Yogyakarta dan Kota palu </p>
                        <Row>

                            <Col>
                                <Card>
                                    <Card bg="success" text="white">
                                        <Card.Header className="text-center">Total Jemaat Gereja Tangguh Bencana</Card.Header>
                                        <h2 className="text-center">Total: 32248</h2>
                                    </Card>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card bg="success" text="white">
                                        <Card.Header className="text-center">Kesiapan bangunan Gereja dalam menghadapi bencana</Card.Header>
                                        <h2 className="text-center">44.2625661%</h2>
                                    </Card>
                                </Card>
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Card>
                                    <Card bg="success" text="white">
                                        <Card.Header className="text-center">Kesiapan team gereja dalam menghadapi bencana</Card.Header>
                                        <h2 className="text-center">43.5542118%</h2>
                                    </Card>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card bg="success" text="white">
                                        <Card.Header className="text-center">Kesadaran Gereja terhadap bencana</Card.Header>
                                        <h2 className="text-center">43.16707169%</h2>
                                    </Card>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <DoughnutChart />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <DoughnutChart2 />
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <DoughnutChart3 />
                                </Card>
                            </Col>


                        </Row>


                        <Row>
                            <Col>
                                <Carousel cols={2} rows={1} loop className="Carousel">
                                    <Carousel.Item>
                                        <Card>
                                            <BarKesadaranGereja />
                                        </Card>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Card>
                                            <BarKesadaranGereja />
                                        </Card>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Card>
                                            <BarKesadaranGereja />
                                        </Card>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>


                        </Row>


                        <Row>
                            <Col>
                                Kesiapan Gereja dalam menghadapi bencana
                                <Card>
                                    <Table striped bordered hover border="primary">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Nama Gereja</th>
                                                <th className="text-center">Kesadaran (%)</th>
                                                <th className="text-center">Team (%)</th>
                                                <th className="text-center">Bangunan(%)</th>
                                                <th className="text-center">Kesiapan jika terdapat bencana</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Gereja Kibaid Jemaat Palu</td>
                                                <td>44.44444444</td>
                                                <td>60</td>
                                                <td>60</td>
                                                <td className="text-center"><Button>Gereja Siap Menghadapi Bencana</Button></td>
                                            </tr>
                                            <tr>
                                                <td>Gereja Dome of Bethany Jemaat Palu</td>
                                                <td>33.33333333</td>
                                                <td>20</td>
                                                <td>63.63636364</td>
                                                <td className="text-center"><Button>Gereja Siap Menghadapi Bencana</Button></td>
                                            </tr>
                                            <tr>
                                                <td>GKST Musafir Palu</td>
                                                <td>88.88888889</td>
                                                <td>60</td>
                                                <td>72.72727273</td>
                                                <td className="text-center"><Button variant="warning">Gereja Cukup Siap Menghadapi Bencana</Button></td>
                                            </tr>
                                            <tr>
                                                <td>GPDI pedati kota palu</td>
                                                <td>22.22222222</td>
                                                <td>20</td>
                                                <td>63.63636364</td>
                                                <td className="text-center"><Button variant="danger">Gereja Belum Siap Menghadapi Bencana</Button></td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div >
        )
    }
}
