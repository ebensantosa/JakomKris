import React, { Component } from 'react'
import { NounFile } from '../../assets'
import './fileItem.scss'

export default class FileItem extends Component {
    constructor(props) {
		super(props);
		this.state = {
            isHovered: false
		};

        this.toggleHoverEnter = this.toggleHoverEnter.bind(this);
        this.toggleHoverLeave = this.toggleHoverLeave.bind(this);
	}

    toggleHoverEnter() {
        this.setState({isHovered: true})
    }

    toggleHoverLeave() {
        this.setState({isHovered: false})
    }

    handleShowModalInformasiPasswordFile() {
        let { isHovered } = this.state

        if(isHovered) {
            this.props.onShowModalInformasiPasswordFile(true)
        }

        this.setState({isHovered: false})
    }

    render() {
        let { isHovered } = this.state

        // console.log('HOVER :', isHovered)

        return (
            <div className="file-item" onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave} onClick={() => this.handleShowModalInformasiPasswordFile()}>
                <div className="header-content">
                    <img className="icon-file" src={NounFile} alt="file"/>
                </div>
                <div className="footer-content" >
                {isHovered ? 
                    <p className="filename">Download</p>
                :
                    <p className="filename">Nama File</p>
                }
                </div>
            </div>
        )
    }
}
