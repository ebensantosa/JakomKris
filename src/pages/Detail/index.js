import React, { useEffect, useState } from "react";
import './detail.scss'
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import { PersonIcon, MarkerIcon } from '../../assets'
import { VerticalBar } from '../../components';
import Carousel from 'react-grid-carousel'

export default function Detail() {


    const [churches, setChurches] = useState({});
    const [artist, setArtist] = useState({});

    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");

    useEffect(() => {
        const fetch = async () => {
            try {
                const getChurches = axios.get(`http://44.198.35.77:8080/api/churches/${id}`);
                const getArtist = axios.get(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`);
                const responses = await axios.all([getChurches, getArtist]);
                setChurches(responses[0].data);
                setArtist(responses[1].data);

            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    return (
        <div className="detail-page">
            <Container className="container-page">
                <Row>
                    <Col>
                        <Card className="cardBencanaLeft">
                            <p className="title">
                                {churches.properties != null ?
                                    <p>{churches.properties.name}</p>
                                    :
                                    null
                                }
                            </p>
                            <Row>
                                <Col sm={9}>
                                    <Row>
                                        <Col sm={5} className="box">Nama Gereja</Col>
                                        <Col sm={7} className="box">
                                            {churches.properties != null ?
                                                <p>:{churches.properties.name}</p>
                                                :
                                                null
                                            }
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={5} className="box">Alamat</Col>
                                        <Col sm={7} className="box">
                                            {churches.properties != null ?
                                                <p>:{churches.properties.address}</p>
                                                :
                                                null
                                            }
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={5} className="box">Rencana tanggap darurat</Col>
                                        <Col sm={7} className="box">
                                            {churches.properties != null ?
                                                <p>:{churches.properties.emergencyResPlan}</p>
                                                :
                                                null
                                            }
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col sm={5} className="box">Sistem peringatan dini</Col>
                                        <Col sm={7} className="box">
                                            {churches.properties != null ?
                                                <p>:{churches.properties.warningSystem}</p>
                                                :
                                                null
                                            }
                                        </Col>
                                    </Row>

                                </Col>
                                <Col>

                                    {churches.properties != null ?
                                        <Image className="imageChruch" src={churches.properties.churchImage} />
                                        :
                                        null
                                    }
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm={8}>
                        <Card className="cardBencanaLeft">
                            <p className="title"> Resiko Bencana </p>

                            {churches.properties != null ?
                                <div>
                                    <Carousel cols={2} rows={2} gap={12} loop className="Carousel">

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[0].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[0].name}</p>
                                                </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[1].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[1].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[2].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[2].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[3].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[3].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[4].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[4].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[5].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[5].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[6].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[6].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[7].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[7].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[8].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[8].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[9].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[9].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[10].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[10].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[11].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[11].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[12].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[12].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Card
                                                style={{ background: churches.properties.disasterRisks[13].alertLevel.color, color: 'white' }}
                                                className="mb-2 dark disasterCard"
                                            >
                                                <Card.Header> <center><p>{churches.properties.disasterRisks[13].name}</p> </center></Card.Header>

                                            </Card>
                                        </Carousel.Item>

                                    </Carousel>
                                </div>
                                :
                                null
                            }

                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="cardBencanaRight">

                            <p className="title">Indikator Bencana</p>
                           
                            {churches.properties != null ?
                                <div>
                                
                                    <Row>
                                        <Col sm={2} className="box red"></Col>
                                        <Col sm={8} className="box">Resiko Sangat Tinggi</Col>
                                    </Row>

                                    <Row>
                                        <Col sm={2} className="box orange"></Col>
                                        <Col sm={8} className="box">Resiko Tinggi</Col>
                                    </Row>

                                    <Row>
                                        <Col sm={2} className="box yellow"></Col>
                                        <Col sm={8} className="box">Resiko Sedang</Col>
                                    </Row>


                                    <Row>
                                        <Col sm={2} className="box green"></Col>
                                        <Col sm={8} className="box">Resiko Rendah</Col>
                                    </Row>
                                </div>
                            :
                            null
                            }

                    </Card>
                </Col>
            </Row>


            <Row>
                <Col >
                    <Card className="cardBencanaLeft">

                        <VerticalBar />
                    </Card>
                </Col>
            </Row>
        </Container>

        </div >
    )

}