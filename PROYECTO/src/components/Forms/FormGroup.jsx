import {Form} from "react-bootstrap"

function FormGroup({label, type, register, placeholder, helpText}) {
    return ( 
        <Form.Group className="mb-2" controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} {...register} placeholder = {placeholder || ""}/>
            <Form.Text>
                {helpText || ""}
            </Form.Text>
        </Form.Group>
     );
}

export default FormGroup;