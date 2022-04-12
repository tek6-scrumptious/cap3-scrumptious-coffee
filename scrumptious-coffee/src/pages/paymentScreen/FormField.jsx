import { Form, } from 'react-bootstrap'


const FormField = ({ label, type, name, placeholder, required, Col }) => {
    return (
        <Form.Group as={Col} >
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control name={name} type={type} placeholder={placeholder} required />
        </Form.Group>
    );
};

export default FormField;

