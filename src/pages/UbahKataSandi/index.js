import React, { Component, useState } from 'react'
import { TextInput } from '../../components'
import './ubahkatasandi.scss'


export default class UbahKataSandi extends Component {
    render() {
        return (
            <div className="ubah-sandi">
            <div className="container-page">
                <h4 className="title font-bold font-24 text-center">Ubah Kata Sandi</h4>
                    <TextInput/>
                    
            </div>
        </div>
        )
    }
}

