import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './modalinformasitoko.scss'

export default class ModalInformasiToko extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datatoko: [
                { id: 0, toko: 'GKST Jemaat Bethel Watubula' },
                { id: 1, title: 'Alamat', content: 'Jl. Terusan Angkasa No.12, Kec. Kemayoran, Kota Jakarta Pusat, Prov. DKI Jakarta' },
                { id: 2, title: 'Tgl. Berdiri Gereja', content: '1 Januari 2020' },
                { id: 3, title: 'Telepon Gereja', content: '085887878787' },
                { id: 4, title: 'Nama Pengembala', content: 'Abcde' }],
            tokoSelected: null,
            dataDesc: [
                { id: 0, toko: 'DC jakarta' },
                { id: 1, title: 'Alamat', content: 'Jl. Terusan Angkasa No.12, Kec. Kemayoran, Kota Jakarta Pusat, Prov. DKI Jakarta' },
                { id: 2, title: 'Telepon', content: '(021) 6914478' },
                { id: 3, title: 'Fax', content: '(021) 6918976' },
                { id: 4, title: 'PIC', content: 'Mangatur Retno Sitorus' },
                { id: 5, title: 'Telp. PIC', content: '085887878787' }

            ],
            dataTokoSelected: null
        };
    }

    handleClickItem(value) {
        this.setState({ tokoSelected: value })
    }

    render() {
        let { datatoko, tokoSelected, dataDesc, dataTokoSelected } = this.state
        let { isShow } = this.props
        return (

            <div >
                
                {datatoko.map((item, i) => {
                    if (i >= 1 && i <= 4) {
                        return (
                            <div className={"item " + (tokoSelected == item.id ? 'active' : '')} id={'item-' + item} onClick={() => this.handleClickItem(item.id)}>
                                <div className="desc">
                                    <Row>
                                        <Col className="colomn left-text" sm={3}> {item.title}</Col>
                                        <Col className="colomn right-text" sm={9}>{item.content}</Col>
                                    </Row>
                                </div>

                            </div>

                        )
                    }
                    if (i >= 0) {
                        return (
                            <div className={"item " + (tokoSelected == item.id ? 'active' : '')} id={'item-' + item} onClick={() => this.handleClickItem(item.id)}>
                                <h4>{item.toko}</h4>
                            </div>

                        )
                    }

                })}
            </div>



        )
    }
}

