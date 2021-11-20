import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import './modalBerhasil.scss'
import { NounSuccess } from '../../assets'
import { Buttons, TextFields } from '../../components'

export default class ModalBerhasil extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    handleBack(value) {
        this.props.onShowModalBerhasil(value)
    }

    render() {
        let { isShow } = this.props

        return (
            <Modal className="modal-berhasil" show={isShow} centered={true}>
                <div className="content">
                    <div className="content-body">
                        <span className="success-icon">
                            <img src={NounSuccess} alt="success-alert"/>
                        </span>
                        <p className="title font-bold font-24">Berhasil</p>
                        <p className="desc font-normal font-14">Mohon cek segera email Anda karena system telah mengirimkan kata sandi sementara ke <a>*****snu@indomaret.co.id</a></p>
                    </div>
                    <div className="content-footer">
                        <Buttons title="Kembali" className="line-height-16" block size="md" variant="general" onClick={() => this.handleBack(false)}/>
                    </div>
                </div>
            </Modal>
        )
    }
}
