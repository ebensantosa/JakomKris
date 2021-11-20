import React, { Component } from 'react'
import './profile.scss'
import { ProfileUser } from '../../components';
export default class Profile extends Component {
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
                <div className="profile-page">
                    <p className="title ">Profile User</p>
                    <ProfileUser/>


                </div>
            </div>
        )
    }
}
