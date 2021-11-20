import React, { Component } from 'react'
import './dashboard.scss'
import Faq from '../../components/Faq';
export default class Dashboard extends Component {
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
            <div className="dashboard-page content-page">
                <div className="container-page">
                    <p className="title ">FAQ</p>
                 
                 <Faq></Faq>
                </div>
            </div>
        )
    }
}