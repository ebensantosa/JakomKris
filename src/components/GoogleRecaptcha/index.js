import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import './googleRecaptcha.scss'

export default class GoogleRecaptcha extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};


	}

    onChange(value) {
        console.log("Captcha value:", value);
        this.props.onValueReCaptcha(true)
    }

    render() {
        return (
            <ReCAPTCHA
                className="google-recaptcha"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value) => this.onChange(value)}
            />
        )
    }
}
