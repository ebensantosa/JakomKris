import React, { Component } from 'react'
import { Container, Col, Row, Form, InputGroup, Button } from 'react-bootstrap'
import $ from 'jquery';
import './profileuser.scss'
import { DefaultState } from '../../assets';


export default class ProfileUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            picture: false,
            src: false
        }
    }



    handlePictureSelected(event) {
        var picture = event.target.files[0];
        var src = URL.createObjectURL(picture);

        this.setState({
            picture: picture,
            src: src
        });
    }

    renderPreview() {
        if (this.state.src) {
            return (

                <img src={this.state.src} className="image" />

            );
        } else {
            return (
                <div class="box">
                    <img src={DefaultState} className="image" />
                    <div class="text">
                        <h1>UO</h1>
                    </div>
                </div>
            );
        }
    }

    upload() {
        var formData = new FormData();

        formData.append("file", this.state.picture);

        $.ajax({
            url: "/some/api/endpoint",
            method: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                // Code to handle a succesful upload
            }
        });
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <div>
                                    {this.renderPreview()}
                                </div>
                                <label for="upload-photo" className="text-upload label-upload">Upload Foto</label>
                                <input
                                    name="photo"
                                    id="upload-photo"
                                    type="file"
                                    onChange={this.handlePictureSelected.bind(this)}
                                    onClick={this.upload.bind(this)}
                                />
                                {/* <button
                                      >
                                    Upload Foto
                                </button> */}
                                <p className="text-desc">Ukuran gambar: maks. 1 MB <br></br>Format gambar: .JPEG, .PNG</p>
                            </div>
                        </Col>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupBadanusaha">
                                    <Form.Label id="label-desc"> Badan Usaha/Hukum</Form.Label>
                                    <Form.Control placeholder="UVUVUEUE OSAS" disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupNama">
                                    <Form.Label id="label-desc">Nama Lengkap</Form.Label>
                                    <Form.Control id="label-form" type="text" placeholder="Nama Lengkap" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupTempatLahir">
                                    <Form.Label id="label-desc">Tempat Lahir</Form.Label>
                                    <Form.Control id="label-form" type="text" placeholder="Tempat Lahir" />
                                </Form.Group>
                                <Form.Group  className="mb-3" controlId="formGroupTanggal">
                                    <Form.Label id="label-desc">Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" name="tanggalLahir" data-date-format="yyyy-mm-dd" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupGender">
                                    <Form.Label id="label-desc">Jenis Kelamin</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Laki - laki"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Perempuan"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />

                                        </div>
                                    ))}
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGroupAgama">
                                    <Form.Label id="label-desc">Agama</Form.Label>
                                    <Form.Control as="select" placeholder="hallo">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPekerjaan">
                                    <Form.Label id="label-desc">Pekerjaan</Form.Label>
                                    <Form.Control id="label-form" type="text" placeholder="Pekerjaan" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label id="label-desc">Email</Form.Label>
                                    <Form.Control id="label-form" type="text" placeholder="Email" />
                                </Form.Group>
                                <Form.Group controlId="validationFormiknoHp">
                                    <Form.Label>No Handphone</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+62</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="823XXXXXXX"
                                            aria-describedby="inputGroupPrepend"
                                            name="No Handphone"
                                        />

                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="validationFormikTelpRumah">
                                    <Form.Label>Telp. Rumah</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+62</InputGroup.Text>

                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="823XXXXXXX"
                                            aria-describedby="inputGroupPrepend"
                                            name="No Handphone"
                                        />

                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="validationFormikTelpRumah">
                                    <Form.Label>Telp. Rumah</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+62</InputGroup.Text>

                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="823XXXXXXX"
                                            aria-describedby="inputGroupPrepend"
                                            name="No Handphone"
                                        />

                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="validationFormikTelpRumah">
                                    <Form.Label>Telp. Rumah</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+62</InputGroup.Text>

                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="823XXXXXXX"
                                            aria-describedby="inputGroupPrepend"
                                            name="No Handphone"
                                        />

                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAgama">
                                    <Form.Label id="label-desc">Provinsi</Form.Label>
                                    <Form.Control as="select" placeholder="hallo">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAgama">
                                    <Form.Label id="label-desc">Kota/Kabupaten</Form.Label>
                                    <Form.Control as="select" placeholder="hallo">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAgama">
                                    <Form.Label id="label-desc">Kecamatan</Form.Label>
                                    <Form.Control as="select" placeholder="hallo">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupAgama">
                                    <Form.Label id="label-desc">Kelurahan</Form.Label>
                                    <Form.Control as="select" placeholder="hallo">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupKodePos">
                                    <Form.Label id="label-desc">Kode Pos</Form.Label>
                                    <Form.Control id="label-form" type="text" placeholder="Kode Pos" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label id="label-desc">Alamat</Form.Label>
                                    <Form.Control as="textarea" maxlength="90" rows={3} placeholder="Contoh: Jl. Portal Franchise No.1 RT03 RW04" />
                                    <Form.Text className="text-muted">
                                        90 karakter
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Gunakan alamat yang sama untuk pengiriman dokumen" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Gunakan alamat yang sama untuk pengiriman paket" />
                                </Form.Group>
                                <Button type="submit">Simpan Perubahan</Button>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
