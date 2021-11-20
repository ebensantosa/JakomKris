import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { MenuArrowLeft, MenuClose } from '../../assets'
import { Buttons } from '../../components'
import './modalPilihBadanUsaha.scss'

export class ModalPilihBadanUsaha extends Component {
    constructor(props) {
		super(props);
		this.state = {
            isModalKataSandi: false,
            dataBadanUsaha: [{ id: 0, name: 'UVUVUEUE OSAS'},
            { id: 1, name: 'CV. PESONA HARAPAN INDAH'},
            { id: 2, name: 'KOP. KARYAWAN RUWA JURAI PTPN VII WAY LIMA'},
            { id: 3, name: 'KOPERASI PAGUYUBAN PEDAGANG KECIL BANTEN'},
            { id: 4, name: 'CV. BILAL MUSTAFA BHAYANGKARA SEJATI'}],
            badanUsahaSelected: null
		};
	}
    
    handleClose(value) {
        this.props.onShowModalPilihBadanUsaha(value)
    }

    handleClickItem(value) {
        this.setState({ badanUsahaSelected: value })
    }

    handleShowModalKataSandi(value) {
        this.props.onShowModalPilihBadanUsaha(false)
        this.props.onShowModalKataSandi(value)
    }

    render() {
        let { dataBadanUsaha,  badanUsahaSelected } = this.state
        let { isShow } = this.props

        return (
            <Modal className="modal-pilih-badan-usaha" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <a className="btnArrowLeft" onClick={() => this.handleClose(false)}>
                            <img src={MenuArrowLeft} alt="menuArrowLeft"/>
                        </a>
                        <p className="title font-bold font-24">Pilih Badan Usaha</p>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body modal-scroll">
                        <div className="items">
                            {dataBadanUsaha.map((item, i) => {
                                return (
                                    <div className={"item "+(badanUsahaSelected == item.id ? 'active' : '')} id={'item-'+item.id} onClick={() => this.handleClickItem(item.id)}>
                                        <p className="font-normal font-16">{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="content-footer">
                        {badanUsahaSelected != null ?
                            <Buttons title="Lanjutkan" className="line-height-16" block size="md" variant="general" onClick={() => this.handleShowModalKataSandi(true)}/>
                        :
                            <Buttons title="Lanjutkan" className="line-height-16" block size="md" variant="general" disabled/>
                        }
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalPilihBadanUsaha
