import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { NounSuccess } from '../../assets'
import { Buttons, TextFields } from '../../components'
import './modalBerhasilUbahKataSandi.scss'

export default class ModalBerhasilUbahKataSandi extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    handleBack(value) {
        this.props.onShowModalBerhasilUbahKataSandi(value)
    }

    render() {
        let { isShow } = this.props

        return (
            <Modal className="modal-berhasil-ubah-kata-sandi" show={isShow} centered={true}>
                <div className="content">
                    <div className="content-body">
                        <span className="success-icon">
                            <img src={NounSuccess} alt="success-alert"/>
                        </span>
                        <p className="title font-bold font-24">Berhasil</p>
                        <p className="desc font-normal font-14">Kata sandi berhasil diubah. Anda dapat masuk kembali dengan kata sandi yang baru</p>
                    </div>
                    <div className="content-footer">
                        <Buttons title="Kembali" className="line-height-16" block size="md" variant="general" onClick={() => this.handleBack(false)}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
