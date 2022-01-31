import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { MenuWelcomePeople, Banner } from '../../assets'
import './home.scss'
import { Freshchat } from 'reactjs-freshchat';
import 'reactjs-freshchat/dist/index.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'home',
        }
    }

    componentDidMount() {
        let { subMenu } = this.state

        this.props.onSubMenu(subMenu)
    }

    render() {
        const { } = this.state;
        return (
            <div className="home-page content-page">
                <Container bsPrefix="container-page">
                    <Row>
                        <Col className="left-side" sm="12">
                            <div className="welcome">
                                <img className="welcome-people" src={MenuWelcomePeople} alt="welcomePeople"></img>
                                <h4 className="title font-bold">Selamat Datang di Situs Gereja Tangguh Bencana!</h4>
                                <p className="desc font-normal font-16">Senang bertemu denganmu kembali</p>
                            </div>
                            <div className="article">

                                <div className="content-side">
                                    <div className="carousel">
                                        <Carousel>
                                            {/* <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://camo.envatousercontent.com/86437a2a50b9afeb4e3c2ae9c3817966c86af45c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c474b5858585167376569704c42734d49622f67697068792e676966"
                                                    alt="First slide"
                                                />
                                            </Carousel.Item> */}
                                            {/* <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://data.whicdn.com/images/318718780/original.gif"
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item> */}

                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://web.kominfo.go.id/sites/default/files/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg"
                                                    alt="Third slide"
                                            
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={Banner}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>

                                    <div className="bottom-side">
                                        <hr></hr>
                                        <div className="header-side">
                                            <h4 className="title font-bold">Apa itu Gereja tangguh Bencana ? </h4>
                                        </div>
                                        <p className="font-16 desc text-justify">
                                            &emsp; JakomKris adalah portal hasil kajian risiko yang menggunakan arcgis server sebagai data services yang menggambarkan cakupan wilayah ancaman bencana, populasi terdampak, potensi kerugian fisik (Rp.), potensi kerugian ekonomi (Rp.) dan potensi kerusakan lingkungan (ha) dan terintegrasi dengan realisasi pelaksanaan kegiatan pengurangan risiko bencana sebagai tool monitoring penurunan indeks risiko bencana.
                                            Kontribusi yang diberikan oleh United Nation Development Program (UNDP) adalah dengan menyiapkan data services yang menjadi data utama dalam InaRISK.
                                            Pemetaan untuk situs cagar budaya di Prov. DIY dan Jateng untuk pengembangan InaRISK merupakan kontribusi dari UNESCO (United Nations Educational, Scientific, and Organization) bersama kemitraan BNPB, UGM, PT. Waindo SpecTerra, BPCB Prov. DIY, BPCB Prov. Jateng dan KEMENDIKBUD.
                                            InaRISKtelah secara resmi diluncurkan penggunaannya oleh Kepala Badan Nasional Penanggulangan Bencana (BNPB) pada tanggal 10 November 2016 yang mana peluncurannya juga dihadiri Kementerian/Lembaga, perwakilan dari Badan PBB, perwakilan organisasi dari negara-negara donor lain (NGO) dan institusi pemerintah terkait lainnya.
                                            Diharapkan InaRISK dapat digunakan oleh semua pihak, termasuk masyarakat dalam menyusun rencana-rencana penanggulangan bencana dan selain sebagai portal untuk sharing data spasial dalam bentuk service gis adalah sebagai:
                                            Alat diseminasi hasil kajian risiko bencana kepada Pemerintah, Pemda, dan stakeholder lainnya sebagai dasar perencanaan program pengurangan risiko bencana.
                                            Membantu Pemerintah, Pemerintah Daerah, dan para pihak dalam menyusun strategi pelaksanaan program, kebijakan, dan kegiatan untuk mengurangi risiko bencana di tingkat nasional hingga daerah.
                                            Membantu Pemerintah dalam melakukan pemantauan terhadap capaian penurunan indeks risiko bencana di Indonesia.
                                            Menyediakan data spasial untuk kepentingan analisa lainnya, seperti GCDS (Global Center Disaster Statistics), MHEWS, revisi tata ruang, dll.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Freshchat token={'2267ca1b-df60-4cde-8889-8ccd6456e234'}
                    // label="Chat"
                    ic_styles={{
                        backgroundColor: '#00aae4',
                        color: '#fff'
                    }}
                />
            </div>
        )
    }
}
