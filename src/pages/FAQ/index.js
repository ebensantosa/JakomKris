import React, { Component } from 'react'
import './faq.scss'
import Faq from '../../components/Faq';
export default class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'faq'
        }
    }

    componentDidMount() {
        let { subMenu } = this.state
        this.props.onSubMenu(subMenu)
    }

    render() {
        return (
            <div className="faq-page content-page">
                <div className="container-page">
                    <p className="title ">FAQ</p>
                 
                 <Faq></Faq>
                </div>
            </div>
        )
    }
}