import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { MenuArrowLeft, MenuClose } from '../../assets'
import { Buttons, PasswordFields, CheckValidate } from '../../components'
import './modalKataSandi.scss'

export class ModalKataSandi extends Component {
    constructor(props) {
		super(props);
		this.state = {
            Password: null,
            validatePassword: true
		};
	}
    
    handleClose(value) {
        this.props.onShowModalKataSandi(value)
    }

    handlePrevious() {
        this.props.onShowModalKataSandi(false)
        this.props.onShowModalPilihBadanUsaha(true)
    }

    handleShowModalLupaKataSandi() {
        this.props.onShowModalKataSandi(false)
        this.props.onShowModalLupaKataSandi(true)
    }

    handleShowModalPerubahanKataSandi() {
        this.props.onShowModalKataSandi(false)
        this.props.onShowModalPerubahanKataSandi(true)
    }

    handleChangeInput(name, value) {
        if(CheckValidate('Text', value))
        {
            this.setState({ validatePassword: true });
        }
        else {
            this.setState({ validatePassword: false });
        }
        this.setState({[name]: value});
    }

    render() {
        let { validatePassword } = this.state
        let { isShow } = this.props

        return (
            <Modal className="modal-kata-sandi" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <a className="btnArrowLeft" onClick={() => this.handlePrevious()}>
                            <img src={MenuArrowLeft} alt="menuArrowLeft"/>
                        </a>
                        <p className="title font-bold font-24">Masukkan Kata Sandi</p>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body modal-scroll">
                        <p className="desc font-normal font-14">Masukkan Kata Sandi sesuai badan usaha yang dipilih untuk melanjutkan ke halaman dashboard portal waralaba</p>
                        <PasswordFields
                            name="Password"
                            placeholder="Kata Sandi"
                            onChange={(event)=> this.handleChangeInput(event.target.name, event.target.value)}
                            validate={validatePassword}
                            validateText="Silahkan masukkan password Anda"
                        />
                    </div>
                    <div className="content-footer">
                        <Buttons title="Masuk ke Dashboard" className="line-height-16" block size="md" variant="general" onClick={() => this.handleShowModalPerubahanKataSandi()}/>
                        <div className="divider-footer">
                            <div className="divider-line"></div>
                            <p className="divider-text font-normal font-12">Atau</p>
                            <div className="divider-line"></div>
                        </div>
                        <div className="forgot-password">
                            <a className="font-normal font-14px" onClick={() => this.handleShowModalLupaKataSandi(false)}>
                                Lupa Kata Sandi?
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalKataSandi
