import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { MenuArrowLeft, MenuClose } from '../../assets'
import { Buttons, PasswordFields, CheckValidate } from '../../components'
import './modalUbahKataSandi.scss'

export default class ModalUbahKataSandi extends Component {
    constructor(props) {
		super(props);
		this.state = {
            OldPassword: null,
            validateOldPassword: true,
            NewPassword: null,
            validateNewPassword: true,
            RepeatNewPassword: null,
            validateRepeatNewPassword: true,
		};
	}
    
    handleClose(value) {
        this.props.onShowModalUbahKataSandi(value)
    }

    handlePrevious() {
        this.props.onShowModalUbahKataSandi(false)
    }

    handleChangeInput(name, value) {
        if(CheckValidate('Text', value))
        {
            if(name == 'OldPassword') {
                this.setState({ validateOldPassword: true })
            }
            else if(name == 'NewPassword') {
                this.setState({ validateNewPassword: true })
            }
            else if(name == 'RepeatNewPassword') {
                this.setState({ validateRepeatNewPassword: true })
            }
        }
        else {
            if(name == 'OldPassword') {
                this.setState({ validateOldPassword: false })
            }
            else if(name == 'NewPassword') {
                this.setState({ validateNewPassword: false })
            }
            else if(name == 'RepeatNewPassword') {
                this.setState({ validateRepeatNewPassword: false })
            }
        }
        this.setState({[name]: value});
    }

    handleSend() {
        this.props.onShowModalUbahKataSandi(false)
        this.props.onShowModalBerhasilUbahKataSandi(true)

    }

    render() {
        let { validateOldPassword, validateNewPassword, validateRepeatNewPassword } = this.state
        let { isShow } = this.props

        return (
            <Modal className="modal-ubah-kata-sandi" show={isShow} centered={true}>
                <div className="content">
                    <div className="nav-header">
                        <a className="btnArrowLeft" onClick={() => this.handlePrevious()}>
                            <img src={MenuArrowLeft} alt="menuArrowLeft"/>
                        </a>
                        <p className="title font-bold font-24">Ubah Kata Sandi</p>
                        <a className="btnClose" onClick={() => this.handleClose(false)}>
                            <img src={MenuClose} alt="menuClose"/>
                        </a>
                    </div>
                    <div className="content-body">
                        <PasswordFields
                            name="OldPassword"
                            placeholder="Kata Sandi Lama"
                            onChange={(event)=> this.handleChangeInput(event.target.name, event.target.value)}
                            validate={validateOldPassword}
                            validateText="Silahkan masukkan password Anda"
                        />
                        <PasswordFields
                            name="NewPassword"
                            placeholder="Kata Sandi Baru"
                            onChange={(event)=> this.handleChangeInput(event.target.name, event.target.value)}
                            validate={validateNewPassword}
                            validateText="Silahkan masukkan password Anda"
                        />
                        <PasswordFields
                            name="RepeatNewPassword"
                            placeholder="Ulangi Kata Sandi Baru"
                            onChange={(event)=> this.handleChangeInput(event.target.name, event.target.value)}
                            validate={validateRepeatNewPassword}
                            validateText="Silahkan masukkan password Anda"
                        />
                    </div>
                    <div className="content-footer">
                        <Buttons title="Kirim" className="line-height-16" block size="md" variant="general" onClick={() => this.handleSend()}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
