import React from 'react';
import PasswordFields from '../PasswordFields';
import './textinput.scss'

export default class TextInput extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},
            berhasil: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            let berhasil = {};
            let isValid = true;

            input["oldpassword"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
            alert('Berhasil Mengisi data');

            if (input["oldpassword"] != null) {
                isValid = false;
                berhasil["oldpassword"] = "Wajib mantap.";
            }

        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
   
        let isValid = true;

        if (!input["oldpassword"]) {
            isValid = false;
            errors["oldpassword"] = "Wajib diisi.";
        } else if (input["oldpassword"].length <= 6) {
            isValid = false;
            errors["oldpassword"] = "Kata sandi minimal 6 karakter";

        }




        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Wajib diisi.";
        } else if (input["password"].length <= 6) {
            isValid = false;
            errors["password"] = "Kata sandi minimal 6 karakter";

        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Wajib diisi";
        } else if (input["confirm_password"].length <= 6) {
            isValid = false;
            errors["confirm_password"] = "Kata sandi minimal 6 karakter";

        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["confirm_password"] = "Passwords Tidak Cocok";
            }

        }




        this.setState({
            errors: errors
        });



        return isValid;
    }

    render() {
        return (
            <div className="change-password">
                <div className="text-danger text">{this.state.berhasil.oldpassword}</div>

                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <PasswordFields
                            className="text"
                            name="oldpassword"
                            placeholder="Kata Sandi Lama"
                            value={this.state.input.oldpassword}
                            onChange={this.handleChange}
                            validateText="Kata Sandi Lama"
                            id="oldpassword"
                        />
                        <div className="text-danger text">{this.state.errors.oldpassword}</div>
                    </div>

                    <div class="form-group">
                        <PasswordFields
                            name="password"
                            placeholder="Kata Sandi Baru"
                            value={this.state.input.password}
                            onChange={this.handleChange}
                            validateText="Kata Sandi Baru"
                            id="password"
                        />

                        <div className="text-danger text">{this.state.errors.password}</div>
                    </div>

                    <div class="form-group">
                        <PasswordFields
                            name="confirm_password"
                            placeholder="Ulangi Kata Sandi Baru"
                            value={this.state.input.confirm_password}
                            onChange={this.handleChange}
                            validateText="Ulangi Kata Sandi Baru"
                            id="confirm_password"
                        />

                        <div className="text-danger text">{this.state.errors.confirm_password}</div>
                    </div>

                    <input type="submit" value="Simpan Kata Sandi baru" class="btn tombol" onClick={() => this.handleSubmit} />
                </form>

                <div>

                </div>

            </div>


        );

    }
}
