import React, { Component } from 'react'
import './tentangKami.scss'
import { Row, Col, Container, Image } from 'react-bootstrap';
import { LogoJakomkris } from '../../assets'

export default class TentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'tentang kami'
        }
    }

    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)
    }

    render() {
        return (
            <div className="tentang-waralaba content-page">
                <div className="container-page">
                    <Container>
                        <Row className="title">
                            <Col>Tentang Kami</Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    &emsp; JAKOMKRIS PBI (Jaringan Komunitas Kristen untuk penanggulangan Bencana di Indonesia) didirikan pada 29 September 2017 sebagai saran bagi gereja,
                                    lembaga pelayanan, dan Komunitas Kristen untuk turut berperan dalam pengurangan risiko bencana. Kegiatan pelatihan, penguatan jejaring, serta
                                    gerakan respon terhadap bencana yang terjadi di Indonesia dilakukan secara khusus bagi gereja-gereja yang berdiri di wilayah rawan bencana seperti
                                    banjir, tanah longsor, gempa bumi, gunung meletus, tsunami, hingga kebakaran hutan dan lahan melalui pendekatan Church and Community Transformation
                                    Resilience Approach.
                                </p>
                            </Col>
                            <Col xs={6} md={4}>
                                <Image className = "logo" src={LogoJakomkris} rounded />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="container-page">
                    <Container >
                        <Row className="title">
                            <Col>VISI</Col>
                            <Col>MISI</Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>&emsp; Terwujudnya kerja sama dan sinergi diantara Komunitas Kristiani melalui gereja dan lembaga kmanusiaan berbasis iman Kristiani untuk membangun masyarakat tangguh dan tanggap bencana.</p>
                            </Col>
                            <Col>
                                <ol>
                                    <li>Memobilisasi sumber daya, kapasitas gereja, dan lembaga untuk kegiatan penanggulangan/pengurangan risiko bencana.</li>
                                    <li>Memfasilitasi penyebarluasan informasi tentang pengurangan risiko bencana hinga warga jemaat.</li>
                                    <li>Melakukan advokasi kepada pemerintah dan para pihak dalam perihal pengurangan risiko bencana.</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
