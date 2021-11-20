import React, { Component } from 'react'
import './pesan.scss'

export default class Pesan extends Component {
    constructor(props) {
		super(props);
		this.state = {
            subMenu: 'pesan'
        }
	}

    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)
    }

    render() {
        return (
            <div className="content-page">
                <div className="container-page">
                    Pesan
                </div>
            </div>
        )
    }
}
