import React, { Component } from 'react'
import { Container, Row, Col, Carousel} from 'react-bootstrap'

export default class Gereja extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'gereja',
        }
    }

    componentDidMount() {
        let { subMenu } = this.state

        this.props.onSubMenu(subMenu)
    }

    render() {
        const { } = this.state;
        return (
            <div className = "content-page">
                <Container bsPrefix = "container-page">
                    <div className = "content-side">
                        mantap
                    </div>
                </Container>
            </div>
        )
    }
}
