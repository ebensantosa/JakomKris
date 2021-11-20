import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { NounEye, NounEyeSlash } from '../../assets'
import './passwordFields.scss'

export default class PasswordFields extends Component {
    constructor(props) {
		super(props);
		this.state = {
            type: false
		};
	}

    changeStatusType() {
        let { type } = this.state

        this.setState({ type: !type })
    }

    render() {
        let { type } = this.state
        let { className, name, placeholder, value, onChange, validate, validateText, label } = this.props

        return (
            <Form.Group className="password-fields">
                {label ?
                    <Form.Label className="text-label">{label}</Form.Label>
                :
                    null
                }
                <div className="form-container">
                    <Form.Control className={"form-input "+(validate == true || validate == undefined ? '' : 'error')} type={type ? "text" : "password"} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
                    <a className="btn-show-hide" onClick={() => this.changeStatusType()}>
                        <img src={type ? NounEye : NounEyeSlash}></img>
                    </a>
                </div>
                {validate == true || validate == undefined ?
                    null
                :
                    <Form.Text className="text-alert">
                        {validateText}
                    </Form.Text>
                }
            </Form.Group>
        )
    }
}
