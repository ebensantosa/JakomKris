import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { MenuArrowLeft, MenuClose } from '../../assets'
import { Buttons, TextFields, CheckValidate } from '../../components'
import './modalLupaKataSandi.scss'

export default class ModalLupaKataSandi extends Component {
    constructor(props) {
		super(props);
		this.state = {
            Email: null,
            validateEmail: true
		};
	}

    handleChangeInput(name, value) {
        if(CheckValidate('Email', value))
        {
            this.setState({validateEmail: true});
        }
        else {
            this.setState({validateEmail: false});
        }
        this.setState({[name]: value});
    }
    
    handleClose(value) {
        this.props.onShowModalLupaKataSandi(value)
    }

    handleSend(value) {
        let { Email, validateEmail } = this.state

        if(Email != null && validateEmail) {
            this.props.onShowModalLupaKataSandi(false)
            this.props.onShowModalBerhasil(value)
        }
        else {
            this.setState({ validateEmail: false })
        }
    }

    handlePrevious() {
        this.props.onShowModalLupaKataSandi(false)
        this.props.onShowModalKataSandi(true)
    }

    render() {
        let { Email, validateEmail } = this.state
        let { isShow } = this.props

        return (
            <Modal className="modal-lupa-kata-sandi" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <a className="btnArrowLeft" onClick={() => this.handlePrevious()}>
                            <img src={MenuArrowLeft} alt="menuArrowLeft"/>
                        </a>
                        <p className="title font-bold font-24">Lupa Kata Sandi?</p>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body modal-scroll">
                        <p className="desc font-normal font-14">Masukkan email yang terdaftar. Selanjutnya kami akan mengirimkan kata sandi sementara Anda</p>
                        <TextFields
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={(event)=> this.handleChangeInput(event.target.name, event.target.value)}
                            validate={validateEmail}
                            validateText="Silahkan masukkan email Anda"
                        />
                    </div>
                    <div className="content-footer">
                        <Buttons title="Kirim" className="line-height-16" block size="md" variant="general" onClick={() => this.handleSend(true)}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
