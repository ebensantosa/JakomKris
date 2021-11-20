import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { Buttons, TextFields } from '../../components'
import { MenuArrowLeft, MenuClose, NounSuccess } from '../../assets'
import './modalPerubahanKataSandi.scss'

export default class ModalPerubahanKataSandi extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    handleBack(value) {
        this.props.onShowModalPerubahanKataSandi(value)
    }

    handleClose(value) {
        this.props.onShowModalPerubahanKataSandi(value)
    }

    handlePrevious() {
        this.props.onShowModalPerubahanKataSandi(false)
        this.props.onShowModalKataSandi(true)
    }

    handleShowModalUbahKataSandi() {
        this.props.onShowModalPerubahanKataSandi(false)
        this.props.onShowModalUbahKataSandi(true)
    }

    render() {
        let { isShow } = this.props

        return (
            <Modal className="modal-perubahan-kata-sandi" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <a className="btnArrowLeft" onClick={() => this.handlePrevious()}>
                            <img src={MenuArrowLeft} alt="menuArrowLeft"/>
                        </a>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body">
                        <span className="success-icon">
                            <img src={NounSuccess} alt="success-alert"/>
                        </span>
                        <p className="title font-bold font-24">Perubahan Kata Sandi</p>
                        <p className="desc font-normal font-14">Mohon untuk mengganti kata sandi yang baru. Saat ini kata sandi minimal 6 karakter</p>
                    </div>
                    <div className="content-footer">
                        <Buttons title="Ubah Kata Sandi" className="line-height-16" block size="md" variant="general" onClick={() => this.handleShowModalUbahKataSandi()}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
