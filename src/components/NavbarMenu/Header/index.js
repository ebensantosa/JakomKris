import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuBurger, LogoJakomkris} from '../../../assets'
import './header.scss'

export class Header extends Component {

    expandSidebar(value) {
        if(value === true) {
            this.props.onExpandSidebar(false);
        }
        else {
            this.props.onExpandSidebar(true);
        }
    }

    render() {
        let { isSidebarExpand } = this.props

        return (
            <div className="header">
                <div className="left-side">
                    <div className={"logo "+(isSidebarExpand? 'active' : '')}>
                        <img src={LogoJakomkris} alt="logoJakomkris"/>
                    </div>
                    <a className={"btn-burger "+(isSidebarExpand? '' : 'unexpanded')} onClick={() => this.expandSidebar(isSidebarExpand)}>
                        <img src={MenuBurger} alt="menuBurger"/>
                    </a>
                </div>
                <div className="right-side">
                    <div className="menu-header">
                        <Link className="link-header font-normal" to={`${process.env.PUBLIC_URL}/tentang`}>
                            Tentang Kami
                        </Link>
                        <Link className="link-header font-normal margin-left-20 margin-right-10" to={`${process.env.PUBLIC_URL}/kontak`}>
                            Kontak
                        </Link>
                        <Link className="link-header font-normal margin-left-20 margin-right-10" to={`${process.env.PUBLIC_URL}/faq`}>
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
