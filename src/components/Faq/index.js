import React, { Component } from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import { MenuChevron } from '../../assets';
import './Faq.scss'

export default class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'Faq',
            idToggleActive: null,
            toggleActive: false,
            dataFaq: [
                { id: 1, title: '1. Pertanyaan nomor satu?', content: 'Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu' },
                { id: 2, title: '2. Pertanyaan nomor dua?', content: 'Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu' },
                { id: 3, title: '3. Pertanyaan nomor tiga?', content: 'Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu' },
                { id: 4, title: '4. Pertanyaan nomor empat?', content: 'Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu' },
                { id: 5, title: '5. Pertanyaan nomor lima?', content: 'Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu Jawaban Pertanyaan nomor satu' }],
            dataFaqSelected: null
        }
    }

    handleClickItem(value) {
        this.setState({ badanUsahaSelected: value })
    }

    handleToggle(event) {
        let { idToggleActive, toggleActive } = this.state
        let idToggle = event.target.id

        console.log(idToggle)

        if (!toggleActive) {
            this.setState({
                idToggleActive: idToggle,
                toggleActive: true
            })
        }
        else {
            if (toggleActive && idToggleActive == idToggle) {
                this.setState({
                    toggleActive: false,
                    idToggleActive: null
                })
            }
            else {
                this.setState({
                    idToggleActive: idToggle
                });
            }
        }
    }


    render() {
        let { idToggleActive, toggleActive } = this.state
        let { dataFaq, dataFaqSelected } = this.state
        let { isShow } = this.props
        return (
            <div className="faq">
                <div className="Faq-page">
                    {dataFaq.map((item, i) => {
                        return (
                            <Accordion className="accordion">
                                <Card className={"card" + (i == 0 ? ' top' : ' bottom' )}>
                                    <Card.Header className={"header-side" + (idToggleActive == item.id ? ' active' : '')}>
                                        <Accordion.Toggle className="title-toggle" as="div" variant="link" eventKey={item.id} id={item.id} onClick={(event) => this.handleToggle(event)}>
                                            {item.title}       
                                        </Accordion.Toggle>
                                        <img src={MenuChevron} className="chevron" />
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={item.id}>
                                        <Card.Body>{item.content}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion>
                        )
                    })}
                </div>



            </div>
        )
    }
}