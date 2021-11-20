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
                const getChurches = axios.get(`https://jsonplaceholder.typicode.com/albums/`);
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
                            <p className="title">Informasi Gereja -- ganti make API</p>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col sm={8} className="box">Nama Gereja</Col>
                                        <Col sm={4} className="box">75% - 100%</Col>
                                    </Row>

                                    <Row>
                                        <Col sm={8} className="box">Alamat</Col>
                                        <Col sm={4} className="box">50% - 75%</Col>
                                    </Row>

                                    <Row>
                                        <Col sm={8} className="box">Rencana tanggap darurat</Col>
                                        <Col sm={4} className="box">25% - 50%</Col>
                                    </Row>


                                    <Row>
                                        <Col sm={8} className="box">Sistem peringatan dini</Col>
                                        <Col sm={4} className="box">0% - 25%</Col>
                                    </Row>

                                </Col>
                                <Col>

                                    <Image className="imageChruch" src="https://asset.kompas.com/crops/PxBbiPGNG1UJq0WqKAs3HgR0PUY=/0x0:0x0/750x500/data/photo/2020/12/24/5fe4510e0878a.jpg" />

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm={9}>
                        <Card className="cardBencanaLeft">
                            <p className="title"> Risiko Bencana </p>
                            <Carousel cols={3} rows={2} gap={12} loop className="Carousel">

                                <Carousel.Item>
                                    <Card
                                        style={{ background: 'red', color: 'white' }}
                                        className="mb-2 dark disasterCard"
                                    >
                                        <Card.Header> <center> GEMPA </center></Card.Header>

                                    </Card>
                                </Carousel.Item>


                            </Carousel>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="cardBencanaRight">

                            <p className="title">Informasi Gereja</p>

                            <Row>
                                <Col sm={2} className="box red"></Col>
                                <Col sm={8} className="box">75% - 100%</Col>
                            </Row>

                            <Row>
                                <Col sm={2} className="box orange"></Col>
                                <Col sm={8} className="box">50% - 75%</Col>
                            </Row>

                            <Row>
                                <Col sm={2} className="box yellow"></Col>
                                <Col sm={8} className="box">25% - 50%</Col>
                            </Row>


                            <Row>
                                <Col sm={2} className="box green"></Col>
                                <Col sm={8} className="box">0% - 25%</Col>
                            </Row>

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

        </div>
    )

}