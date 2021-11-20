import React, { Component } from 'react'
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap'
import { MenuClose, MenuSearch } from '../../assets'
import './artikel.scss'
import { DefaultState } from '../../assets';
import { ArticleUtama } from '../../components';
export default class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'artikel',
            value: '',
            dataSearchStore: [
                { id: 0, name: '1Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 1, name: '2Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 2, name: '3Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 3, name: '4Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 4, name: '5Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 5, name: '6Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 6, name: '7Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 7, name: '8Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 8, name: '9Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 9, name: '10Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 10, name: '11Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 11, name: '12Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 12, name: '13Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 13, name: '14Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' },
                { id: 14, name: '15Lorem ipsum dolor sit amet, consectetur adipi...', content: 'Testing', Date: '10 Agustus 2021', time: '08:19 WIB' }
            ],
            filterSearchStore: [],
            valueSearchStore: '',
            selectedSearchStore: null
        }
    }

    componentDidMount() {
        let { subMenu, dataSearchStore } = this.state
        this.props.onSubMenu(subMenu)

        this.setState({
            filterSearchStore: dataSearchStore
        });
    }

    handleChangeSearch = () => {
        let { dataSearchStore } = this.state

        this.setState({
            filterSearchStore: dataSearchStore
        });
    };

    filterListSearch = (e) => {
        let { dataSearchStore } = this.state

        let updatedList = dataSearchStore.filter(item => {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
            );
        });
        this.setState({
            filterSearchStore: updatedList,
            valueSearchStore: e.target.value
        });
    };

    handleClickStore(item) {
        this.setState({
            valueSearchStore: item.name,
            selectedSearchStore: item.name,
            bigTitle: item.name,
            date: item.Date,
            time: item.time,
            
        })
    }

    handleRemoveSearch = () => {
        let { dataSearchStore } = this.state

        this.setState({
            valueSearchStore: '',
            filterSearchStore: dataSearchStore,
            selectedSearchStore:null
        });
    };

    render() {
        let { selectedSearchStore } = this.state
        const { filterSearchStore, valueSearchStore, bigTitle, date, time } = this.state;
        console.log('Filter', filterSearchStore)
        console.log(" Selected: ", valueSearchStore)
        return (

            <div className="home-page content-page">
                <Container bsPrefix="container-page">
                    <Row>
                        <Col className="left-side-article" xs={4}>

                            <div className="search-group">
                                <div className="form-search">
                                    <Form.Group className="input-search">
                                        <Form.Control
                                            className="form-input inputSearch"
                                            type="text"
                                            name="Store"
                                            placeholder="Cari Artikel"
                                            value={valueSearchStore}
                                            // onClick={this.handleChangeSearch}
                                            onChange={this.filterListSearch}
                                        />
                                        {valueSearchStore != '' ?
                                            <span className="btn-remove" onClick={this.handleRemoveSearch}>
                                                <img src={MenuClose} alt="searchStore" />
                                            </span>
                                            :
                                            <span className="btn-search">
                                                <img src={MenuSearch} alt="searchStore" />
                                            </span>
                                        }
                                    </Form.Group>
                                </div>
                                <div className="stores custom-y-scrollbar-xs">
                                    {filterSearchStore.map((item, i) => {
                                        if (i >= 0 && i <= 14) {

                                            return (
                                                <div className="store" onClick={() => this.handleClickStore(item)}>
                                                    <Col className="colomn" sm={3}>
                                                        <img className="image" src={DefaultState} alt="DefaultState" />
                                                    </Col>
                                                    <Col className="content" sm={6}>
                                                        <a className="title-article">{item.name}</a> <br></br>
                                                        <span className="date">{item.Date}</span>
                                                        <span className="circle">&bull;</span>
                                                        <span className="time">{item.time}</span>

                                                    </Col>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>


                            {/* <Dropdown className="dropdown-store-select">
                                <Dropdown.Toggle bsPrefix="btn-store-select">
                                    <div>
                                        <Form.Group className="input-search">
                                            <Form.Control
                                                className="form-input inputSearch"
                                                type="text"
                                                name="Store"
                                                placeholder="Cari Artikel"
                                                value={valueSearchStore}
                                                onClick={this.handleChangeSearch}
                                                onChange={this.filterListSearch}
                                            />
                                            {valueSearchStore != '' ?
                                                <span className="btn-remove" onClick={this.handleRemoveSearch}>
                                                    <img src={MenuClose} alt="searchStore" />
                                                </span>
                                                :
                                                <span className="btn-search">
                                                    <img src={MenuSearch} alt="searchStore" />
                                                </span>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="stores">
                                        {filterSearchStore.map((item, i) => {
                                              if (i >= 0 && i <= 10) {
                                            return (
                                                <div className="store" onClick={() => this.handleClickStore(item)}>
                                                    <Col className="colomn" sm={5}>
                                                        <img className="image" src={DefaultState} alt="DefaultState" />
                                                    </Col>
                                                    <Col className="content" sm={7}>
                                                        <a className="title-article">{item.name}</a> <br></br>
                                                        <span className="date">{item.Date}</span>
                                                        <span className="circle">&bull;</span>
                                                        <span className="time">{item.time}</span>
                                                        
                                                    </Col>

                                                </div>
                                            )
                                               }
                                        })}
                                    </div>
                                </Dropdown.Toggle>
                            </Dropdown> */}
                        </Col>


                        {selectedSearchStore != null ?
                            <Col className="right-side-article custom-y-scrollbar-xs" xs={7}>
                                <div className="articles ">

                                    <img className="image-big" src={DefaultState} alt="DefaultState" />
                                    <div className="date-time">
                                        <p className="date-article">{date}</p>
                                        <p className="circle-article">&bull;</p>
                                        <p className="time-article">{time}</p>
                                    </div>

                                    <h5 className="big-title">{bigTitle}</h5>
                                    <h6 className="small-title">The standard Lorem Ipsum passage, used since the 1500s</h6>
                                    <p className="content-article">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum."
                                    </p>
                                    <h6 className="small-title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h6>
                                    <p className="content-article">
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                                        vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                                        dolorem eum fugiat quo voluptas nulla pariatur?"
                                    </p>
                                </div>


                            </Col>
                            :
                            <div></div>
                        }

                    </Row>
                </Container>
            </div>
        )
    }
}
