import React from 'react'
import { Form } from 'react-bootstrap'
import './textFields.scss'

const TextFields = (props) => {
    const {className, type, name, placeholder, value, onChange, validate, validateText, label, ...rest} = props

    return (
        <Form.Group className="text-fields">
            {label ?
                <Form.Label className="text-label">{label}</Form.Label>
            :
                null
            }
            <Form.Control className={"form-input "+(validate == true || validate == undefined ? '' : 'error')} type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
            {validate == true || validate == undefined ?
                null
            :
                <Form.Text className="text-alert">
                    {validateText}
                </Form.Text>
            }
        </Form.Group>
    )
}

export default TextFields