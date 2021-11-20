import React, { Component } from 'react'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'
import { NounFile, MenuChevron, MenuEmptyItem, MenuBtnArrow } from '../../assets'
import { FileItem, ModalInformasiPasswordFile } from '../../components'
import ReactResizeDetector from 'react-resize-detector'
import './manajemenToko.scss'
import { ModalInformasiToko } from '../../components';
import { ModalInformasiPIC } from '../../components';

export default class Artikel extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.state = {
            subMenu: 'manajemen toko',
            isShowModalInformasiPasswordFile: false,
            dataLaporanKeuangan: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
            dataLaporanPajak: [],
            dataLaporanPembetulan: [{ id: 0 }, { id: 1 }, { id: 2 }],
            dataStatus: 'LaporanKeuangan',
            isBtnArrowLeft: false,
            isBtnArrowRight: true
            // dataItem: []
        }
        this.myRef = React.createRef();
    }

    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)

        // //Overflow Detect
        // this.handleOverflowed()
    }

    handleShowModalInformasiPasswordFile(value) {
        this.setState({
            isShowModalInformasiPasswordFile: value
        })
    }

    handleClickMenu(event) {
        console.log(event.target.name)
        let name = event.target.name

        this.setState({ dataStatus: name })
    }

    itemIsEmpty() {
        return (
            <div className="item-empty">
                <div className="container-content">
                    <img className="icon" src={MenuEmptyItem} alt="itemEmpty" />
                    <h4 className="text font-bold font-20">Belum ada laporan</h4>
                </div>
            </div>
        )
    }

    //Scroll Menu ===========================================
    handleOnScrollMenu(event) {
        let scrollLeft = event.target.scrollLeft
        let scrollWidth = event.target.scrollWidth
        let clientWidth = event.target.clientWidth

        console.log('scrollWidth - scrollLeft : ', parseInt(scrollWidth - scrollLeft, 10))
        console.log('clientWidth : ', clientWidth)

        if (scrollLeft == 0) {
            this.setState({ isBtnArrowLeft: false, isBtnArrowRight: true })
        }
        else if (parseInt(scrollWidth - scrollLeft, 10) - 1 <= clientWidth && parseInt(scrollWidth - scrollLeft, 10) + 1 >= clientWidth) {
            this.setState({ isBtnArrowLeft: true, isBtnArrowRight: false })
        }
        else {
            this.setState({ isBtnArrowLeft: true, isBtnArrowRight: true })
        }
    }

    handleScroll(value) {
        var container = document.getElementById('scrollMenu');
        let scrollAmount = 0;

        if (value == 'left') {

            var slideTimer = setInterval(function () {
                container.scrollLeft -= 20;
                scrollAmount += 10;
                if (scrollAmount >= 100) {
                    window.clearInterval(slideTimer);
                }
            }, 15);
        }
        else {
            var slideTimer = setInterval(function () {
                container.scrollLeft += 20;
                scrollAmount += 10;
                if (scrollAmount >= 100) {
                    window.clearInterval(slideTimer);
                }
            }, 15);
        }
    }

    handleOverflowed() {
        let scrollWidth = this.inputRef.current.scrollWidth
        let offsetWidth = this.inputRef.current.offsetWidth
        let scrollLeft = this.inputRef.current.scrollLeft
        let clientWidth = this.inputRef.current.clientWidth

        if (offsetWidth < scrollWidth) {
            if (scrollLeft == 0) {
                this.setState({ isBtnArrowLeft: false, isBtnArrowRight: true })
            }
            else if (parseInt(scrollWidth - scrollLeft, 10) == clientWidth) {
                this.setState({ isBtnArrowLeft: true, isBtnArrowRight: false })
            }
            else {
                this.setState({ isBtnArrowLeft: true, isBtnArrowRight: true })
            }
        }
        else {
            this.setState({ isBtnArrowLeft: false, isBtnArrowRight: false })
        }
    }
    // ===========================================

    render() {
        let { isShowModalInformasiPasswordFile, dataLaporanKeuangan, dataLaporanPajak, dataLaporanPembetulan, dataStatus,
            isBtnArrowLeft, isBtnArrowRight } = this.state

        return (
            <div className="manajemen-toko-page content-page">
                <div className="container-page">
                    <div className="top-side">
                        <div className="left-side">
                            <Row>
                                <Col className="left-content">

                                    <ModalInformasiToko />

                                </Col>
                                <Col className="right-content" xs={6}>
                                    <ModalInformasiPIC />
                                </Col>
                            </Row>
                        </div>
                        <div className="right-side">


                        </div>
                    </div>
                    <div className="bottom-side">
                        <div className="navigation-side">
                            {isBtnArrowLeft ?
                                <span className="btn-arrow left" onClick={() => this.handleScroll('left')}>
                                    <img src={MenuBtnArrow} />
                                </span>
                                : null}
                            <ReactResizeDetector handleWidth handleHeight onResize={(event) => this.handleOverflowed(event)}>
                                <div
                                    className="scroll-side scroll-x-scrollbar hidden-scrollbar"
                                    id="scrollMenu"
                                    onScroll={(event) => this.handleOnScrollMenu(event)}
                                    ref={this.inputRef}
                                >
                                    <Button className="btn-navbar margin-right-8" name="LaporanKeuangan" onClick={(event) => this.handleClickMenu(event)}>
                                        Laporan Keuangan
                                    </Button>
                                    <Button className="btn-navbar margin-left-8 margin-right-8" name="LaporanPembetulan" onClick={(event) => this.handleClickMenu(event)}>
                                        Laporan Pembetulan
                                    </Button>
                                    <Button className="btn-navbar margin-left-8 margin-right-8" name="LaporanPajak" onClick={(event) => this.handleClickMenu(event)}>
                                        Laporan Pajak
                                    </Button>
                                    <Button className="btn-navbar margin-left-8 margin-right-8">
                                        Rekening Koran
                                    </Button>
                                    <Button className="btn-navbar margin-left-8 margin-right-8">
                                        Rekonsiliasi Bank
                                    </Button>
                                    <Button className="btn-navbar margin-left-8">
                                        Surplus Kas
                                    </Button>
                                </div>
                            </ReactResizeDetector>
                            {isBtnArrowRight ?
                                <span className="btn-arrow right" onClick={() => this.handleScroll('right')}>
                                    <img src={MenuBtnArrow} />
                                </span>
                                : null}
                        </div>
                        <div className="content-side">
                            {dataStatus == 'LaporanKeuangan' ?
                                dataLaporanKeuangan.length > 0 ?
                                    <Row>
                                        {dataLaporanKeuangan.map((item, i) => {
                                            return (
                                                <Col>
                                                    <FileItem
                                                        onShowModalInformasiPasswordFile={(value) => this.handleShowModalInformasiPasswordFile(value)}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                    :
                                    this.itemIsEmpty()
                                :
                                null
                            }
                            {dataStatus == 'LaporanPembetulan' ?
                                dataLaporanPembetulan.length > 0 ?
                                    <Row>
                                        {dataLaporanPembetulan.map((item, i) => {
                                            return (
                                                <Col>
                                                    <FileItem
                                                        onShowModalInformasiPasswordFile={(value) => this.handleShowModalInformasiPasswordFile(value)}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                    :
                                    this.itemIsEmpty()
                                :
                                null
                            }
                            {dataStatus == 'LaporanPajak' ?
                                dataLaporanPajak.length > 0 ?
                                    <Row>
                                        {dataLaporanPajak.map((item, i) => {
                                            return (
                                                <Col>
                                                    <FileItem
                                                        onShowModalInformasiPasswordFile={(value) => this.handleShowModalInformasiPasswordFile(value)}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                    :
                                    this.itemIsEmpty()
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
                <ModalInformasiPasswordFile
                    isShow={isShowModalInformasiPasswordFile}
                    onShowModalInformasiPasswordFile={(value) => this.handleShowModalInformasiPasswordFile(value)}
                />
            </div>
        )
    }
}
