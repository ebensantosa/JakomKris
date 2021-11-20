import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DefaultState } from '../../assets';
import './ArticleUtama.scss'


export default class ArticleUtama extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalKataSandi: false,
            dataBadanUsaha: [
                { id: 0, title: 'Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' }],
            badanUsahaSelected: null
        };
    }

    handleClickItem(value) {
        this.setState({ badanUsahaSelected: value })
    }

    render() {
        let { dataBadanUsaha, badanUsahaSelected } = this.state
        let { isShow } = this.props
        return (

            <div className="article-page">
                {dataBadanUsaha.map((item, i) => {
                    if (i >= 0 && i <= 4) {
                        return (
                            <div className={"item " + (badanUsahaSelected == item.id ? 'active' : '')} id={'item-' + item} onClick={() => this.handleClickItem(item.id)}>
                                <Container>
                                    <Row>
                                        <Col className="colomn" sm={5}>
                                            <img className="image" src={DefaultState} alt="DefaultState" />
                                        </Col>
                                        <Col className="content" sm={7}>
                                            <a className="title-article">{item.title}</a> <br></br>
                                            <span className="date">{item.Date}</span>
                                            <span className="circle">&bull;</span>
                                            <span className="time">{item.time}</span> 
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        )
                    }
                })}
            </div>



        )
    }
}
