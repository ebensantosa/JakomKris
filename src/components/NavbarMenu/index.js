import React, { Component } from 'react'
import { Header, Sidebar } from '../../components'

export class NavbarMenu extends Component {
    constructor(props) {
		super(props);
		this.state = {
            isSidebarExpand: true
        }
	}

    handleExpandSidebar = (value) => {
        this.setState({
            isSidebarExpand: value
        })

        this.props.onExpandSidebar(value);
    }

    render() {
        let { isSidebarExpand } = this.state
        let { subMenu } = this.props

        return (
            <>
                <Header
                    isSidebarExpand={isSidebarExpand}
                    onExpandSidebar={(value) => this.handleExpandSidebar(value)}
                />
                <Sidebar
                    isSidebarExpand={isSidebarExpand}
                    subMenu={subMenu}
                />
            </>
        )
    }
}

export default NavbarMenu
