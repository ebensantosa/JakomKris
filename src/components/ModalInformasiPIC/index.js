import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './modalinformasipic.scss'

export default class ModalInformasiPIC extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.setState({ dataTokoSelected: value })
    }

    render() {
        let { dataDesc, dataTokoSelected } = this.state
        let { isShow } = this.props
        return (
            <div >
                {dataDesc.map((item, i) => {
                    if (i >= 1 && i <= 5) {
                        return (
                            <div className={"item " + (dataTokoSelected == item.id ? 'active' : '')} id={'item-' + item} onClick={() => this.handleClickItem(item.id)}>
                                <div className="desc">
                                    <Row>
                                        <Col className="colomn left-text" sm={2}>{item.title}</Col>
                                        <Col className="colomn right-text" sm={9}>{item.content}</Col>
                                    </Row>
                                </div>

                            </div>

                        )
                    }
                    if (i >= 0) {
                        return (
                            <div className={"item " + (dataTokoSelected == item.id ? 'active' : '')} id={'item-' + item} onClick={() => this.handleClickItem(item.id)}>
                                <h4 className="title">{item.toko}</h4>
                            </div>

                        )
                    }

                })}
            </div>



        )
    }
}

