import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavbarMenu } from '../../components'
import { Home, Peta, Artikel, Pesan, TentangKami, UbahKataSandi, FAQ, Kontak, Detail, Dashboard, InformasiDetail, SummaryDashboard, Gereja} from '../../pages'
import React, { Component } from 'react'
import { isMobile } from "react-device-detect";

export class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarExpand: true,
            subMenu: ''
        }
    }

    DashboardContainer = () => (
        <>
          <Route path="/dashboard" component={Dashboard} />
        </>
    )

    handleExpandSidebar(value) {
        this.setState({
            isSidebarExpand: value
        })
    }

    handleSubMenu(value) {
        this.setState({
            subMenu: value
        })
    }

    DefaultContainer = () => (
        <>
           <NavbarMenu
                onExpandSidebar={(value) => this.handleExpandSidebar(value)}
                subMenu={this.state.subMenu}
            />
            <div className={isMobile ? "menu-page-mobile" : "menu-page " + (this.state.isSidebarExpand ? 'expanded' : 'unexpanded')}>
                <Route exact strict path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/peta">
                    <Peta
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/artikel">
                    <Artikel
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/pesan">
                    <Pesan
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/tentang">
                    <TentangKami
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/faq">
                    <FAQ
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/ubahkatasandi">
                    <UbahKataSandi
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/kontak">
                    <Kontak
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>

                <Route path="/detail">
                    <Detail
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
                <Route path="/informasiDetail">
                    <InformasiDetail
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>

                <Route path="/summaryDashboard">
                    <SummaryDashboard
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>

                <Route path="/gereja">
                    <Gereja
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>
            </div>
        </>
    )

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/(login)" component={this.LoginContainer} />
                        <Route component={this.DefaultContainer} />
                        {/* <Route exact path="/(dashboard)" component={this.DashboardContainer} /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes