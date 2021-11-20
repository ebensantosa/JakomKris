import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Buttons } from '../../components'
import { MenuClose } from '../../assets'
import './modalInformasiPasswordFile.scss'

export default class ModalInformasiPasswordFile extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    handleClose(value) {
        this.props.onShowModalInformasiPasswordFile(value)
    }

    handleDownload(value) {
        // this.props.onShowModalInformasiPasswordFile(value)
    }

    render() {
        let { isShow } = this.props

        return (
            <Modal className="modal-informasi-password-file" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <p className="title font-bold font-24">Informasi Password File</p>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body">
                        <p className="desc font-normal font-14">Kata sandi yang digunakan adalah kata sandi login ke portal waralaba</p>
                    </div>
                    <div className="content-footer">
                        <Buttons title="Batalkan" className="line-height-16 margin-right-6 full-width" size="md" variant="outline-general" onClick={() => this.handleClose(false)}/>
                        <Buttons title="Download" className="line-height-16 margin-left-6 full-width" size="md" variant="general" onClick={() => this.handleDownload(false)}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
